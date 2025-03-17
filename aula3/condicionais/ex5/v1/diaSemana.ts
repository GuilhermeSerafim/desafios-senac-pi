import PromptSync from "prompt-sync";

const sc = PromptSync();

let n = parseInt(sc("Digite o dia da semana, a partir de 0: "));

const diasDaSemana: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
while (n < 0 || n > 6) {
    console.log("Dia da semana inválido");
    n = parseInt(sc("Digite um número válido: "));
}

console.log(diasDaSemana[n]);