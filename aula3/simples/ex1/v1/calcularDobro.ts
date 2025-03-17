import PromptSync from "prompt-sync";

const prompt = PromptSync();

const n = parseInt(prompt("Digite um número: "));
const dobro = n * 2;
console.log(`O dobro de ${n} é ${dobro}`);