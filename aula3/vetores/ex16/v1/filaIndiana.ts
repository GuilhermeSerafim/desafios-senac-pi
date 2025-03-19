import PromptSync from "prompt-sync";

const sc = PromptSync();

const qtdAlunos = parseInt(sc("Informe a quantidade de alunos: "));
const alunosArr: number[] = [];

    for (let i = 0; i < qtdAlunos; i++) {
        alunosArr[i] = parseFloat(sc(`Informe a altura do ${i + 1}º aluno: `));
    }

console.log("Fila indiana: " + alunosArr.sort((a, b) => a - b));
