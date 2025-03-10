var nome = "João";
console.log(nome); // Saída: João
var idade = 25;
console.log(idade); // Saída: 25
var isAtivo = true;
console.log(isAtivo); // Saída: true
var pessoa = ["Maria", 30];
console.log(pessoa); // Saída: ["Maria", 30]
var valorQualquer = "Isso pode ser qualquer coisa";
valorQualquer = 42; // Agora é um número
console.log(valorQualquer); // Saída: 42
var usuario = {
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
var corFavorita = Cor.Vermelho;
console.log(corFavorita); // Saída: VERMELHO
var nulo = null;
var indefinido = undefined;
console.log(nulo, indefinido); // Saída: null undefined
function logarMensagem(mensagem) {
    console.log(mensagem);
}
logarMensagem("Hello, World!");
