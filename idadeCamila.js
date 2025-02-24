import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Desafio Idade de Camila: ");
const idade1 = prompt('Informe a primeira idade: ');
const idade2 = prompt('Informe a segunda idade: ');
const idade3 = prompt('Informe a terceira idade: ');

if (idade1 > idade2 && idade1 < idade3) {
    console.log(`Idade de Camila ${idade1}`);
} else if (idade2 > idade1 && idade2 < idade3) {
    console.log(`Idade de Camila ${idade2}`);
} else {
    console.log(`Idade de camila ${idade3}`);
}
