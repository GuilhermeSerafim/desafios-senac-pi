import PromptSync from "prompt-sync";
import contaRegressivamente from "./service";
const prompt = PromptSync();

let n1 = parseInt(prompt("Informe o 1º número: "));
const n2 = parseInt(prompt("Informe o 2º número: "));

contaRegressivamente(n1, n2);