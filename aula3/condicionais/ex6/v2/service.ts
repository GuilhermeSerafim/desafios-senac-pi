const calculaIngresso = (tipo: string, quantidade: number): number => {
    if (tipo.toLowerCase() == "meia") {
        return 14.25 * quantidade;
    } else {
        return 28.50 * quantidade;
    }
}

export default calculaIngresso;