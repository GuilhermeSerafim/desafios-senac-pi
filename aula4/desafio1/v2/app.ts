import { jogar, mostrarMenu, sortearNumero } from "./service";

let menu = 0;

do {
    menu = mostrarMenu();
    switch (menu) {
        case 1:
            const numero = sortearNumero();
            jogar(numero);
            break;
        case 2:
            console.log("Encerrando programa...");
        default:
            console.log("Escolha uma opção válida");
            break;
    }
} while (menu !== 2);