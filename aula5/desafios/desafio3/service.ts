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
      this.tarefas.forEach((t,i) =>
        console.log(`${i+1}. (${t.concluida?'x':' '}) ${t.codigo} - ${t.descricao}`))
    }

    deletarTarefa(cdTarefa: string) {
        for(let i = 0; i <= this.tarefas.length; i++) {
            if(cdTarefa == this.tarefas[i].codigo) {
                this.tarefas.
            }
        }
    }
  }