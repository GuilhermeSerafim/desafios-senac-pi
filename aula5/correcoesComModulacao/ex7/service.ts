import { Boletim, NotasAluno } from "./models";

const analisarNotas = (notas: NotasAluno): Boletim => {
    let media = calculaMedia(notas);
    let situacao = verificaSituacaoAluno(media);
    let boletim: Boletim = {
        media: media,
        situacao: situacao
    }
    return boletim;
}

const calculaMedia = (notas: NotasAluno): number => (notas.n1 + notas.n2 + notas.n3) / 3;

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

export default analisarNotas;