/*
🧠 CONCEITO:
- Não precisa estar ordenado.
- Útil quando a ordem dos dados não importa.
- Custo: O(n) (tempo proporcional ao tamanho do array).
*/
const buscaLinear = (arr: number[], alvo: number): number => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === alvo) {
            return i; // retorna o índice onde encontrou
        }
    }
    return -1; // não encontrado
}


/*
🧠 CONCEITO:
- Só funciona corretamente se o array estiver ORDENADO.
- Divide a busca pela metade a cada passo.
- Muito mais rápida em listas grandes.
- Custo: O(log n) (crescimento logarítmico, bem eficiente).
*/
const buscaBinaria = (arr: number[], alvo: number): number => {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (arr[meio] === alvo) {
            return meio; // encontrou
        } else if (arr[meio] < alvo) {
            inicio = meio + 1; // busca na parte direita
        } else {
            fim = meio - 1; // busca na parte esquerda
        }
    }

    return -1; // não encontrado
}

export { buscaBinaria, buscaLinear }