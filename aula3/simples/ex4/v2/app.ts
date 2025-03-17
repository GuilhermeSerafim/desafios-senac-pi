import PromptSync from "prompt-sync";
import calculaVendaAcai from "./service";
const sc = PromptSync();
const qtdPequeno = parseInt(sc("Digite a quantidade comprada de açai tamanho pequeno: "));
const qtdMedio = parseInt(sc("Digite a quantidade comprada de açai tamanho médio: "));
const qtdGrande = parseInt(sc("Digite a quantidade comprada de açai tamanho grande: "));

const resultado = calculaVendaAcai(qtdPequeno, qtdMedio, qtdGrande);

console.log(`O total a pagar é ${resultado.toFixed(1)}`);