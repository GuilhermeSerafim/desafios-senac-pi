import { adicionaProduto, exibeCarrinho, exibeMenuCompras, finalizarCompra } from "./service";

type Compra = {
    nome: string,
    valor: number,
    quantidade: number
}

let menu = -1;

const carrinho: Compra[] = [];

do {
    menu = exibeMenuCompras();
    switch (menu) {
        case 1:
            adicionaProduto(carrinho);
            console.log("Produto adicionado");
            break;
        case 2:
            exibeCarrinho(carrinho);
            break;
        case 3:
            finalizarCompra(carrinho);
            break;
        case 0:
            console.log("Finalizando programa...");
            break;
        default:
            console.log("Selecione uma opção válida!")
            break;
    }
} while (menu != 0);

export { Compra };