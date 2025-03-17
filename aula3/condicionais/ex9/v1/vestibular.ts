import PromptSync from "prompt-sync";

const sc = PromptSync();
const notaCandidato = parseFloat(sc("Informe a nota que tirou: "));
const notaCorte = parseFloat(sc("Informe a nota de corte: "));
const notaAprovacao = parseFloat(sc("Informe a nota minima para a aprovação: "));

if(notaCandidato < notaCorte) {
    console.log("Candidato não passou");
} else if(notaCandidato >= notaAprovacao) {
    console.log("Candidato passou");
} else {
    console.log("Candidato está na lista de espera");
}