import PromptSync from "prompt-sync";

const sc = PromptSync();

const tipoIngresso = sc("Informe o tipo do ingresso: ");
const qtdIngresso = parseInt(sc("Informe a quantidade de ingressos: "));
let total = 0;
if(tipoIngresso.toLowerCase() == "meia") {
    total = 14.25 * qtdIngresso;
} else {
    total = 28.50 * qtdIngresso;
}

console.log(`O total a pagar é R$ ${total.toFixed(2)}`);