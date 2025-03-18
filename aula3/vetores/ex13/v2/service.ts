import PromptSync from "prompt-sync";

const obterArrNumeros = (): number[] => {
    
    const sc = PromptSync();
    
    const tamanhoArr = parseInt(sc("Informe a quantidade de números a serem armazenados no array: "));
    let numeros: number[] = [];
    
    for (let i = 0; i < tamanhoArr; i++) {
        numeros[i] = parseInt(sc(`Informe o ${i + 1}º número: `));
    }
    return numeros;    
} 

export default obterArrNumeros;