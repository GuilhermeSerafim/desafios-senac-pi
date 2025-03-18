import PromptSync from "prompt-sync";

const sc = PromptSync();

const qtdPilotos = parseInt(sc("Digite a quantidade de pilotos competindo: "));
console.log();
const largada: number[] = [];
const chegada: number[] = [];

for(let i = 0; i < qtdPilotos; i++) {
    largada[i] = parseInt(sc(`Informe a posição de largada do piloto ${i + 1}: `));
}
console.log();

for(let i = 0; i < qtdPilotos; i++) {
    chegada[i] = parseInt(sc(`Informe a posição de chegada do piloto ${i + 1}: `));
}
console.log();

for(let i = 0; i < qtdPilotos; i++) {
    let verificaProgresso = chegada[i] - largada[i];
    if(verificaProgresso > 0) {
        console.log(`O piloto ${i + 1} avançou ${verificaProgresso} posições`);
    } else if(verificaProgresso < 0 ) {
        console.log(`O piloto ${i + 1} retrocedeu ${Math.abs(verificaProgresso)} posições`);
    } else {
        console.log(`O piloto ${i + 1} manteve a posição`);
    }
}