import PromptSync from "prompt-sync";
import { insereAltura, obtemArrOrdenadoCrescente } from "./service";

const sc = PromptSync();

const qtdAlunos = parseInt(sc("Informe a quantidade de alunos: "));
const alunos: number[] = [];

insereAltura(qtdAlunos, alunos);
const alunosOrdenados = obtemArrOrdenadoCrescente(alunos);

console.log("Fila indiana: ");
for (let index = 0; index < alunosOrdenados.length; index++) {
    console.log(alunosOrdenados[index]);
}