const verificaStatusAprovacao = (notaCandidato: number, notaCorte: number, notaAprovacao: number): string => {
    
    if (notaCandidato < notaCorte) {
        return("Candidato não passou");
    } else if (notaCandidato >= notaAprovacao) {
        return("Candidato passou");
    } else {
        return("Candidato está na lista de espera");
    }
}

export default verificaStatusAprovacao;