const contaRegressivamente = (n1: number, n2: number): void => {
    while (n1 >= n2) {
        console.log(n1);
        n1--
    }
}

export default contaRegressivamente;