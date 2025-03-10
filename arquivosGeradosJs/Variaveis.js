"use strict";
let nome = "João";
console.log(nome); // Saída: João
let idade = 25;
console.log(idade); // Saída: 25
let isAtivo = true;
console.log(isAtivo); // Saída: true
let pessoa = ["Maria", 30];
console.log(pessoa); // Saída: ["Maria", 30]
let valorQualquer = "Isso pode ser qualquer coisa";
valorQualquer = 42; // Agora é um número
console.log(valorQualquer); // Saída: 42
let usuario = {
    nome: "Carlos",
    idade: 28
};
console.log(usuario); // Saída: { nome: "Carlos", idade: 28 }
var Cor;
(function (Cor) {
    Cor["Vermelho"] = "VERMELHO";
    Cor["Verde"] = "VERDE";
    Cor["Azul"] = "AZUL";
})(Cor || (Cor = {}));
let corFavorita = Cor.Vermelho;
console.log(corFavorita); // Saída: VERMELHO
let nulo = null;
let indefinido = undefined;
console.log(nulo, indefinido); // Saída: null undefined
function logarMensagem(mensagem) {
    console.log(mensagem);
}
logarMensagem("Olá, TypeScript!"); // Saída: Olá, TypeScript!
// Comandos executados:
// npm i --global typescript
// npm i --global npx
// npx tsc aula2/arq.ts
// Ai gera um arq.js
// Executamos com node arq.js
