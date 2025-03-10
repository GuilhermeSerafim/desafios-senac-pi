let nome: string = "João";
console.log(nome); // Saída: João
let idade: number = 25;
console.log(idade); // Saída: 25
let isAtivo: boolean = true;
console.log(isAtivo); // Saída: true
let pessoa: [string, number] = ["Maria", 30];
console.log(pessoa); // Saída: ["Maria", 30]
let valorQualquer: any = "Isso pode ser qualquer coisa";
valorQualquer = 42; // Agora é um número
console.log(valorQualquer); // Saída: 42
let usuario: { nome: string, idade: number } = {
    nome: "Carlos",
    idade: 28
};
console.log(usuario); // Saída: { nome: "Carlos", idade: 28 }
enum Cor {
    Vermelho = "VERMELHO",
    Verde = "VERDE",
    Azul = "AZUL"
}
let corFavorita: Cor = Cor.Vermelho;
console.log(corFavorita); // Saída: VERMELHO
let nulo: null = null;
let indefinido: undefined = undefined;
console.log(nulo, indefinido); // Saída: null undefined
function logarMensagem(mensagem: string): void {
    console.log(mensagem);
}
logarMensagem("Olá, TypeScript!"); // Saída: Olá, TypeScript!


// Comandos executados:
// npm i --global typescript
// npm i --global npx
// Ai gera um arq.js
// Executamos com node arq.js