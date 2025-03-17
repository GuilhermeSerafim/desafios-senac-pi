import PromptSync from "prompt-sync";
import misturaCorPrimarias from "./service";

const sc = PromptSync();
const corPrimaria1 = sc("Informe cor 1: ").toLowerCase();
const corPrimaria2 = sc("Informe cor 2: ").toLowerCase();

const corSecundaria = misturaCorPrimarias(corPrimaria1, corPrimaria2);
console.log(`A combinação das cores é: ${corSecundaria}`);