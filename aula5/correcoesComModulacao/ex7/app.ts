import * as tela from "./tela";
import analisarNotas, * as op from "./service";
import { Boletim, NotasAluno } from "./models";

tela.escrever("-- PROGRAMA DE CÁLCULO DE MÉDIA --");

let nota1 = tela.pedirNumero("Informe a primeira nota: ");
let nota2 = tela.pedirNumero("Informe a segunda nota: ");
let nota3 = tela.pedirNumero("Informe a terceira nota: ");

let notas: NotasAluno = {
    n1: nota1,
    n2: nota2,
    n3: nota3
}

let boletim: Boletim = analisarNotas(notas);
console.log("Média: " + boletim.media.toFixed(2));
console.log("Boletim: " + boletim.situacao);