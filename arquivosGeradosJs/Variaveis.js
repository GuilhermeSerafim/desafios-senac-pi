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
// Implementar o tsconfig.json:
/*
{
  "compilerOptions": {
    "module": "ESNext", // Gera módulos ESNext (suporta ESM nativamente)
    "target": "ESNext", // Usa recursos mais modernos do JavaScript
    "moduleResolution": "Node", // Resolve módulos de acordo com o Node.js
    "esModuleInterop": true, // Habilita compatibilidade com módulos CommonJS
    "outDir": "./arquivosGeradosJs", // Pasta onde os arquivos compilados serão gerados
    "strict": true, // Habilita todas as verificações estritas do TypeScript
    "skipLibCheck": true // Ignora verificação de tipos nas bibliotecas
  },
  "include": [
    "*.ts" // Onde seus arquivos TypeScript estão localizados
    ,
    "aula2/*.ts"
  ]
}
*/
// npx tsc
// Gera os arquivos .js
// Execute com node
