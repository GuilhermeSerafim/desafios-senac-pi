import PromptSync from "prompt-sync";
import escolheDiaSemana from "./service";
const sc = PromptSync();

let n = parseInt(sc("Digite o dia da semana, a partir de 0: "));

const diaDaSemana = escolheDiaSemana(n);
console.log(diaDaSemana);