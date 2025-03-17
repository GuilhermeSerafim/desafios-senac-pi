import PromptSync from "prompt-sync";
import calculaIngresso from "./service";
const sc = PromptSync();

const tipoIngresso = sc("Informe o tipo do ingresso: ");
const qtdIngresso = parseInt(sc("Informe a quantidade de ingressos: "));

const resultado = calculaIngresso(tipoIngresso, qtdIngresso);

console.log(`O total a pagar é R$ ${resultado.toFixed(2)}`);