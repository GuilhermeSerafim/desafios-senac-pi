import PromptSync from "prompt-sync";

const sc = PromptSync();
const populaArr = (qtdNumeros: number): number[] => {
    const numeros: number[] = [];

    for (let i = 0; i < qtdNumeros; i++) {
        numeros[i] = parseInt(sc(`Informe o ${i + 1}º número: `));
    }

    return numeros;
}

const verificaOrdemArr = (arr: number[]): string => {
    if (arr[0] < arr[1] && arr[1] < arr[2]) {
        return "Organização dos elementos: Ordem crescente";
    } else if (arr[0] > arr[1] && arr[1] > arr[2]) {
        return "Organização dos elementos: Ordem descrescente";
    } else {
        return "Organização dos elementos: Desordenados";
    }
}

export { populaArr, verificaOrdemArr };