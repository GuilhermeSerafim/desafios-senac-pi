import PromptSync from "prompt-sync";
import calculaMedia from "./service";

const sc = PromptSync();
const n1 = parseFloat(sc("Informe a 1º nota: "));
const n2 = parseFloat(sc("Informe a 2º nota: "));
const n3 = parseFloat(sc("Informe a 3º nota: "));
const resultado = calculaMedia(n1, n2, n3);
console.log(`A média é ${resultado.toFixed(2)}`);