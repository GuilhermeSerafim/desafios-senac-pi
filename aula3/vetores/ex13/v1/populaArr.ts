import PromptSync from "prompt-sync";

const sc = PromptSync();

const tamanhoArr = parseInt(sc("Informe a quantidade de números a serem armazenados no array: "));
let numeros: number[] = [];

for (let i = 0; i < tamanhoArr; i++) {
    numeros[i] = parseInt(sc(`Informe o ${i + 1}º número: `));
}

console.log(numeros.join(" "));