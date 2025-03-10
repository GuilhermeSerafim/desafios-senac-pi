import promptSync from 'prompt-sync';

const prompt = promptSync();

function helloWord(): void {
    const currentYear  = prompt("Digite o ano atual: ")
    console.log(`Hello, World ${currentYear}`);
}

function verificaParOuImpar(): void {
    const numero = parseInt(prompt("Digite um número: "));
    if(numero % 2 === 0 ) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é impar`);
    }
}


helloWord();
console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
verificaParOuImpar();

// PODEMOS SIMPLESMENTE EXECTAR COM NPX TSX EX1.TS