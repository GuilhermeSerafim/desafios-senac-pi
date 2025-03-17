import PromptSync from "prompt-sync";

const prompt = PromptSync();

let n1 = parseInt(prompt("Informe o 1º número: "));
const n2 = parseInt(prompt("Informe o 2º número: "));

while (n1 >= n2) {
    console.log(n1);
    n1--
}
