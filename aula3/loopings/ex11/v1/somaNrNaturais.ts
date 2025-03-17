import PromptSync from "prompt-sync";

const sc = PromptSync();

const n = parseInt(sc("Informe o número: "));
let soma = 0;
for(let i = 0; i <= n; i++) {
    soma += i;
}

console.log(soma);