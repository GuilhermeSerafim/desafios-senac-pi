import PromptSync from "prompt-sync";
import verificaStatusAprovacao from "./service";
const sc = PromptSync();
const notaCandidato = parseFloat(sc("Informe a nota que tirou: "));
const notaCorte = parseFloat(sc("Informe a nota de corte: "));
const notaAprovacao = parseFloat(sc("Informe a nota minima para a aprovação: "));

const resultado = verificaStatusAprovacao(notaCandidato, notaCorte, notaAprovacao);
console.log(resultado);