import PromptSync from "prompt-sync";

const sc = PromptSync();
const cor1 = sc("Informe cor 1: ").toLowerCase();
const cor2 = sc("Informe cor 2: ").toLowerCase();


if((cor1 == "vermelho" && cor2 == "amarelo") || (cor2 == "vermelho" && cor1 == "amarelo")) {
    console.log("A combinação das cores é: Laranja");
} else if((cor1 == "azul" && cor2 == "amarelo") || (cor2 == "azul" && cor1 == "amarelo")) {
    console.log("A combinação das cores é: Verde");
} else if((cor1 == "vermelho" && cor2 == "azul") || (cor2 == "vermelho" && cor1 == "azul")) {
    console.log("A combinação das cores é: Roxo");
} else {
    console.log("Apenas cores primárias são aceitas");
}