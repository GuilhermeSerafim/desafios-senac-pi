import { PedidoAcai } from "./models"; "./models"

const calcularTotal = (pedido: PedidoAcai): number => (pedido.qtdPequeno * 13.50) + (pedido.qtdMedio * 15) + (pedido.qtdGrande * 17.50);

export { calcularTotal };