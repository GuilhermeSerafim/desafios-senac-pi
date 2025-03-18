import PromptSync from "prompt-sync";

const sc = PromptSync();

const qtdNumeros = parseInt(sc("Digite a quantidade de números a serem armazenados: "));
const numeros: number[] = [];

for (let i = 0; i < qtdNumeros; i++) {
    numeros[i] = parseInt(sc(`Informe o ${i + 1}º número: `))
}

if (numeros[0] < numeros[1] && numeros[1] < numeros[2]) {
    console.log("Organização dos elementos: Ordem crescente");
} else if (numeros[0] > numeros[1] && numeros[1] > numeros[2]) {
    console.log("Organização dos elementos: Ordem descrescente");
} else {
    console.log("Organização dos elementos: Desordenados");
}