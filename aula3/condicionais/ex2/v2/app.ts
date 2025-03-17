import calculaSoma from "./service";
import PromptSync from "prompt-sync";

const sc = PromptSync();
const n1 = parseInt(sc("Informe o 1º número: "));
const n2 = parseInt(sc("Informe o 2º número: "));
const resultado = calculaSoma(n1, n2);
console.log(`A soma de ${n1} + ${n2} é ${resultado}`);