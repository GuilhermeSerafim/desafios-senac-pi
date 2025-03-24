import prompt from 'prompt-sync'
const ler = prompt();

export function pedirNumero(msg: string): number {
    console.log(msg);
    return Number(ler(""));
}

export function pedirTexto(msg: string): string {
    console.log(msg);
    return ler("");
}

export function escrever(msg: string): void {
    console.log(msg);
}

export function apresentarMenu(): number {
      escrever('\n-- GERENCIADOR DE TAREFAS --');
        escrever('[1]. Nova Tarefa');
        escrever('[2]. Listar Tarefas');
        escrever('[3]. Remover Tarefa');
        escrever('[4]. Alterar Tarefa');
        escrever('[5]. Marcar como Conluído');
        escrever('[0]. Sair');
        return Number(ler(""));
}