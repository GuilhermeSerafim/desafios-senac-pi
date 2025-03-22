import PromptSync from "prompt-sync";

const sc = PromptSync();

let quantidade = 0;
let preco = 0;

let menu = -1;

console.log("▬▬▬▬ Menu ▬▬▬▬");
console.log("1. Adicionar produto;");
console.log("2. Exibir subtotal;");
console.log("3. Finalizar compra;");
console.log("0. Sair do programa.");

do {
    menu = parseInt(sc("Escolha a opção: "));
    switch (menu) {
        case 1:
            let nomeProduto = sc("Informe o nome do produto: ");
            quantidade += parseInt(sc("Informe a quantidade do produto: "));
            preco += parseFloat(sc("Informe o preço do produto: "));
            console.log("Produto adicionado");
            break;
        case 2:
            console.log(`(${quantidade} itens) - Subtotal: R$ ${preco.toFixed(2)}`);
            console.log("Continuar comprando");
            break;
        case 3:
            console.log(`(${quantidade} itens) - Total: R$ ${preco.toFixed(2)}`);
            console.log("Compra finalizada");
            quantidade = 0;
            preco = 0;
            break;
        case 0:
            console.log("Finalizando programa...");
            break;
        default:
            console.log("Selecione uma opção válida!")
            break;
    }
} while (menu != 0);