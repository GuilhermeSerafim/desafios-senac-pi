import PromptSync from "prompt-sync";
import { populaArr, verificaOrdemArr } from "./service";

const sc = PromptSync();

const qtdNumeros = parseInt(sc("Digite a quantidade de números a serem armazenados: "));
const numeros: number[] = populaArr(qtdNumeros);
const verificacao = verificaOrdemArr(numeros);

console.log(`Organização dos elementos: ${verificacao}`);