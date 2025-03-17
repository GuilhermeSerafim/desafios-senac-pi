import PromptSync from "prompt-sync";
import somaNrNaturaisAteONrInformado from "./service";

const sc = PromptSync();

const n = parseInt(sc("Informe o número: "));
const soma = somaNrNaturaisAteONrInformado(n);
console.log(soma);
