const pessoa2 = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`);
    }
}

pessoa2.exibirInfo();