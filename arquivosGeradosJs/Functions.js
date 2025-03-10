import promptSync from 'prompt-sync';
const prompt = promptSync();
function helloWord() {
    const currentYear = prompt("Digite o ano atual");
    console.log(`Hello, World ${currentYear}`);
}
helloWord();
