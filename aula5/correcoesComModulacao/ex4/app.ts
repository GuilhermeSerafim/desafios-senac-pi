import * as tela  from './tela'
import * as op  from './service'
import { PedidoAcai } from './models';


// apresenta o programa
tela.escrever('-- PROGRAMA DO AÇAÍ --');

// coleta os dados (entrada)
let qtdP = tela.pedirNumero('Quantidade de açaí pequeno:');
let qtdM = tela.pedirNumero('Quantidade de açaí médio:');
let qtdG = tela.pedirNumero('Quantidade de açaí grande:');

// resolução do problema (processamento)
let pedido: PedidoAcai = {
  qtdPequeno: qtdP,
  qtdMedio: qtdM,
  qtdGrande: qtdG
}

let total = op.calcularTotal(pedido);

// exibe as respostas (saída)
tela.escrever(`O total a pagar é R$ ${total.toFixed(2)}`);