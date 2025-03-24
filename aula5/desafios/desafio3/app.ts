import { GerenciadorTarefas } from './service';
import * as tela from './view'

let gerenciador = new GerenciadorTarefas();

let opcao = tela.apresentarMenu();
while (opcao != 0) {
    switch (opcao) {
        case 1:
            let cdAdicionar = tela.pedirTexto('Informe o código:');
            let dsAdicionar = tela.pedirTexto('Informe a tarefa:');
            gerenciador.novaTarefa(cdAdicionar, dsAdicionar);
            break;
        case 2:
            gerenciador.listarTarefas();
            break;
        case 3:
            let cdDeletar = tela.pedirTexto('Informe o código:');
            let dsDeletar = tela.pedirTexto('Informe a tarefa:');
            gerenciador.(codigo, descricao);
            break;
        case 4:
            // código para alterar
            break;
        case 5:
            // código para marcar conluído
            break;
        case 0:
            // código para sair
            break;
        default:
            // código inválido
            break;
    }

    opcao = tela.apresentarMenu();
}