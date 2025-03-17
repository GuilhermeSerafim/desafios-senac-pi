import PromptSync from "prompt-sync";

const sc = PromptSync();
const n1 = parseFloat(sc("Informe a 1º nota: "));
const n2 = parseFloat(sc("Informe a 2º nota: "));
const n3 = parseFloat(sc("Informe a 3º nota: "));
const media = (n1 + n2 + n3)  / 3;
console.log(`A média é ${media.toFixed(2)}`);