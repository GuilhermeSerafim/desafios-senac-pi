const verificaSituacaoAluno = (media: number): string => {
    if (media >= 8) {
        return ("Aprovado com Sucesso");
    } else if (media >= 6) {
        return ("Aprovado");
    } else if (media >= 3) {
        return ("Recuperação");
    } else if (media > 0) {
        return ("Reprovado")
    } else {
        return ("Desistente");
    }
}

const calculaMedia = (n1: number, n2: number, n3: number): number => (n1 + n2 + n3) / 3; 

export { verificaSituacaoAluno, calculaMedia };