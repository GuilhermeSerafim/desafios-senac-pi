import PromptSync from "prompt-sync";

const sc = PromptSync();
let menu = 0;

do {
    console.log("▬▬▬▬ Menu ▬▬▬▬");
    console.log("1. Iniciar jogo: ");
    console.log("2. Encerrar: ");
    menu = parseInt(sc("Escolha uma opção: "));
    
    switch (menu) {
        case 1:
            const numeroAleatorio = Math.floor(Math.random() * 1000);
            console.log(numeroAleatorio);
            console.log("Número sorteado! Você tem até 10 tentativas para acertar...");
            for (let i = 0; i < 10; i++) {
                let chute = parseInt(sc("Informe o número: "));
                if (chute == numeroAleatorio) {
                    console.log("Acertou!!");
                    break; // Early return
                } else if (chute < numeroAleatorio) {
                    console.log(`Maior! Você ainda tem ${9 - i} tentativas.`);
                } else {
                    console.log(`Menor! Você ainda tem ${9 - i} tentativas.`);
                }
            }
            console.log("O número aleatório era: " + numeroAleatorio);
            break;
        case 2:
            console.log("Encerrando programa...");
            break;
        default:
            console.log("Escolha uma opção válida");
            break;
    }
} while (menu != 2);

