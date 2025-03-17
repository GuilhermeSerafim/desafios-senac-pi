const corResultante = (cor1: string, cor2: string): string => {
    if ((cor1 == "vermelho" && cor2 == "amarelo") || (cor2 == "vermelho" && cor1 == "amarelo")) {
        return ("Laranja");
    } else if ((cor1 == "azul" && cor2 == "amarelo") || (cor2 == "azul" && cor1 == "amarelo")) {
        return ("Verde");
    } else if ((cor1 == "vermelho" && cor2 == "azul") || (cor2 == "vermelho" && cor1 == "azul")) {
        return ("Roxo");
    } else {
        return ("Apenas cores primárias são aceitas");
    }
}

export default corResultante;