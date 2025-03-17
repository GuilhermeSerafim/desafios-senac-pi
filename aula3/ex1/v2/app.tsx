import calcularDobro from "./services";
import PromptSync from "prompt-sync";

const sc = PromptSync();
const n = parseInt(sc("Digite um número: "));
const resultado = calcularDobro(n);
console.log(`O dobro de ${n} é ${resultado}`);