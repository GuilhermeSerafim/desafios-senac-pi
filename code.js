import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt('Digite seu nome: ');
console.log(`Olá, ${nome}!`);
