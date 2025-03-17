import PromptSync from "prompt-sync";

const sc = PromptSync();
const qtdPequeno = parseInt(sc("Digite a quantidade comprada de açai tamanho pequeno: "));
const qtdMedio = parseInt(sc("Digite a quantidade comprada de açai tamanho médio: "));
const qtdGrande = parseInt(sc("Digite a quantidade comprada de açai tamanho grande: "));

const resultado = (qtdPequeno * 13.50) + (qtdMedio * 15) + (qtdGrande * 17.50);

console.log(`O total a pagar é ${resultado.toFixed(1)}`);