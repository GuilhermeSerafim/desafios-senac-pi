import { GerenciadorTarefas } from './service';
import * as tela from './view'

let gerenciador = new GerenciadorTarefas();

let opcao = tela.apresentarMenu();
while (opcao != 0) {
    switch (opcao) {
        case 1:
            let cdAdicionar = tela.pedirTexto('Informe o código: ');
            let dsAdicionar = tela.pedirTexto('Informe a tarefa: ');
            gerenciador.novaTarefa(cdAdicionar, dsAdicionar);
            break;
        case 2:
            gerenciador.listarTarefas();
            break;
        case 3:
            let cdDeletar = tela.pedirTexto('Informe o código: ');
            gerenciador.deletarTarefa(cdDeletar);
            console.log("Tarefa removida!");
            break;
        case 4:
            let posicaoAlterar = tela.pedirNumero("Informe à posição do elemento: ");
            let cdAlterar = tela.pedirTexto("Informe o código: ");
            let dsAlterar = tela.pedirTexto("Informe a descrição: ");
            gerenciador.alterar(posicaoAlterar, cdAlterar, dsAlterar);
            console.log("Tarefa alterada!")
            break;
        case 5:
            let posicaoConcluir = tela.pedirNumero("Informe à posição do elemento: ");
            gerenciador.marcarConcluido(posicaoConcluir);
            break;
        case 0:
            console.log("Encerrando...")
            break;
        default:
            // código inválido
            break;
    }

    opcao = tela.apresentarMenu();
}