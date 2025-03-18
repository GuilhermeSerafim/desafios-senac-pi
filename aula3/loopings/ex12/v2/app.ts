import PromptSync from "prompt-sync";
import imprimeQuadrado from "./service";
const sc = PromptSync();
const tamanhoQuadrado = parseInt(sc("Informe o tamanho do quadrado: "));
imprimeQuadrado(tamanhoQuadrado);