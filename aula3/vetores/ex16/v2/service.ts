import PromptSync from "prompt-sync";

const sc = PromptSync();


const insereAltura = (qtdAlunos: number, alunosArr: number[]): void => {
    for (let i = 0; i < qtdAlunos; i++) {
        alunosArr[i] = parseFloat(sc(`Informe a altura do ${i + 1}º aluno: `));
    }
}

const obtemArrOrdenadoCrescente = (alunosArr: number[]): number[] => alunosArr.sort((a, b) => a - b);

export { insereAltura, obtemArrOrdenadoCrescente };
