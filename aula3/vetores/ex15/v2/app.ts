import PromptSync from "prompt-sync";
import { populaArrChegadaLargada, imprimeProgressoCorredores } from "./service";

const sc = PromptSync();

const qtdPilotos = parseInt(sc("Digite a quantidade de pilotos competindo: "));
console.log();
const largada: number[] = [];
const chegada: number[] = [];

populaArrChegadaLargada(qtdPilotos, largada, chegada);
imprimeProgressoCorredores(qtdPilotos, largada, chegada);