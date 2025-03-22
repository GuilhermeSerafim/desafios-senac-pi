import PromptSync from "prompt-sync";

const sc = PromptSync();

const mostrarMenu = (): number => {
    console.log("▬▬▬▬ Menu ▬▬▬▬");
    console.log("1. Iniciar jogo: ");
    console.log("2. Encerrar: ");
    return parseInt(sc("Escolha uma opção: "));
}

const sortearNumero = (): number => Math.floor(Math.random() * 1000);

const jogar = (n: number) => {
    console.log("Número sorteado! Você tem até 10 tentativas para acertar...");

    for (let i = 0; i < 10; i++) {
        const chute = parseInt(sc("Informe o número: "));

        if (chute === n) {
            console.log("Acertou!!");
            return; // Finaliza o jogo
        } else if (chute < n) {
            console.log(`Maior! Você ainda tem ${9 - i} tentativas.`);
        } else {
            console.log(`Menor! Você ainda tem ${9 - i} tentativas.`);
        }
    }
    console.log(`O número aleatório era: ${n}`);
}

export { jogar, sortearNumero, mostrarMenu };