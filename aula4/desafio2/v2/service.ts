import PromptSync from "prompt-sync";
import { Compra } from "./app";

const sc = PromptSync();

const exibeMenuCompras = (): number => {
    console.log("▬▬▬▬ Menu ▬▬▬▬");
    console.log("1. Adicionar produto;");
    console.log("2. Exibir carrinho;");
    console.log("3. Finalizar compra;");
    console.log("0. Sair do programa.");
    return parseInt(sc("Escolha uma opção: "));
}

const adicionaProduto = (carrinho: Compra[]): void => {
    let nomeProduto = sc("Informe o nome do produto: ");
    let quantidade = parseInt(sc("Informe a quantidade do produto: "));
    let preco = parseFloat(sc("Informe o preço do produto: "));
    let compra: Compra = {
        nome: nomeProduto,
        valor: preco,
        quantidade: quantidade
    }
    carrinho.push(compra);
}

const exibeCarrinho = (carrinho: Compra[]): void => {
    for (let i = 0; i < carrinho.length; i++) {
        console.log(`${i + 1}º compra — ${carrinho[i].nome}: `);
        console.log(`(${carrinho[i].quantidade} itens) - Subtotal do item: R$ ${carrinho[i].valor.toFixed(2)}`);
    }
}

const finalizarCompra = (carrinho: Compra[]): void => {
    let valorTotal = 0;
    let qtdTotal = 0;
    for (let i = 0; i < carrinho.length; i++) {
        valorTotal += carrinho[i].valor;
        qtdTotal += carrinho[i].quantidade;
    }
    console.log(`Valor total a ser pago: R$ ${valorTotal}`);
    console.log(`Quantidade por produto: ${carrinho.length}`);
    const ehFinalizado = sc("Deseja comprar tudo? ").toLocaleLowerCase();
    if (ehFinalizado == "sim") {
        console.log("Compra finalizada");
        carrinho.length = 0; // Limpa o arr
    } else {
        console.log("Voltando ao menu...")
    }
}


export { exibeMenuCompras, adicionaProduto, exibeCarrinho, finalizarCompra }