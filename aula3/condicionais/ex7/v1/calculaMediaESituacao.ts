import PromptSync from "prompt-sync";

const prompt = PromptSync();

const n1 = parseInt(prompt("Informe a 1º nota: "));
const n2 = parseInt(prompt("Informe a 2º nota: "));
const n3 = parseInt(prompt("Informe a 3º nota: "));

const media = (n1 + n2 + n3) / 3;

if(media >= 8) {
    console.log("Aprovado com Sucesso");
} else if(media >= 6) {
    console.log("Aprovado");
} else if(media >= 3) {
    console.log("Recuperação");
} else if(media > 0) {
    console.log("Reprovado")
} else {
    console.log("Desistente");
}
