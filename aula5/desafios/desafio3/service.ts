import { Tarefa } from "./models";

export class GerenciadorTarefas {
  tarefas: Tarefa[]

  constructor() {
    this.tarefas = [];
  }

  novaTarefa(codigo: string, descricao: string) {
    let novaTarefa: Tarefa = {
      codigo,
      descricao,
      concluida: false
    }
    this.tarefas.push(novaTarefa);
  }

  listarTarefas() {
    this.tarefas.forEach((t, i) =>
      console.log(`${i + 1}. (${t.concluida ? 'x' : ' '}) ${t.codigo} - ${t.descricao}`));
  }

  deletarTarefa(cdTarefa: string) {
    for (let i = 0; i <= this.tarefas.length; i++) {
      // Identificando cdTarefa para deletar
      if (cdTarefa == this.tarefas[i].codigo) {
        for (let j = i; j < this.tarefas.length - 1; j++) {
          // Atualiza a posição j com o valor da posição j+1,
          // efetivamente deslocando o elemento à direita para a esquerda.
          // Esse movimento sobrescreve o valor atual, "removendo" o elemento na posição j.
          this.tarefas[j] = this.tarefas[j + 1];
        }

        // Reduz o tamanho do array removendo o último item duplicado
        this.tarefas.length = this.tarefas.length - 1;
        break; // Encerra o loop após remover a primeira ocorrência
      }
    }
    /* OBS:
      Quando deslocamos os elementos para a esquerda, cada posição recebe o valor da posição imediatamente à sua direita. 
      No laço interno, isso ocorre até o penúltimo índice, deixando o último elemento sem ser "atualizado".
      Assim, o valor do último elemento é copiado para a posição anterior, mas o próprio último item permanece inalterado. 
      Isso resulta em uma duplicação do valor no final do array. 
      Por isso, após o deslocamento, ajustamos o tamanho do array, reduzindo-o em 1, para remover o item duplicado.
    */

  }
  alterar(
    posicaoAlterar: number,
    cdAlterar: string,
    dsAlterar: string
  ) {
    this.tarefas[posicaoAlterar] = {
      ...this.tarefas[posicaoAlterar], // copia tudo
      codigo: cdAlterar,
      descricao: dsAlterar
    }
  }

  marcarConcluido(posicao: number) {
    for(let i = 0; i < this.tarefas.length; i++) {
      if(posicao == i) {
        this.tarefas[i].concluida = true;
        break;
      }
    }
  }

}