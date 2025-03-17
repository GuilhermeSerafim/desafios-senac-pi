import PromptSync from "prompt-sync";
import { calculaMedia, verificaSituacaoAluno } from "./service"; "./service";

const prompt = PromptSync();

const n1 = parseInt(prompt("Informe a 1º nota: "));
const n2 = parseInt(prompt("Informe a 2º nota: "));
const n3 = parseInt(prompt("Informe a 3º nota: "));

const media = calculaMedia(n1, n2, n3);
const resultado = verificaSituacaoAluno(media);

console.log(`A média do aluno é ${media.toFixed(1)}`);
console.log(resultado);