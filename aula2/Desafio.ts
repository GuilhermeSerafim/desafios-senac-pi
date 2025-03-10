import promptSync from 'prompt-sync';

const prompt = promptSync();

type Disciplina = {
    nome: string,
    nota1: number,
    nota2: number,
    nota3: number
}

type NotasAluno = {
    nome: string,
    disciplinas: Disciplina[]
}

type Boletim = {
    disciplina: string,
    media: number,
    situacao: string
}

const nomeAluno = prompt("Informe o nome do aluno: ");

const disciplinas: Disciplina[] = [];

while (true) {
    const maisDisciplina = prompt("Quer informar uma disciplina? (sim/não): ").toLowerCase();
    if (maisDisciplina !== "sim") break;

    const nomeDisciplina = prompt("Informe o nome da disciplina: ");

    // Captura as notas, garantindo conversão para número
    const nota1 = parseFloat(prompt("Informe a 1ª nota: "));
    const nota2 = parseFloat(prompt("Informe a 2ª nota: "));
    const nota3 = parseFloat(prompt("Informe a 3ª nota: "));

    // Adiciona a disciplina ao array
    disciplinas.push({ nome: nomeDisciplina, nota1, nota2, nota3 });
}

const aluno: NotasAluno = {
    nome: nomeAluno,
    disciplinas: disciplinas,
}

function calcularBoletim(notas: NotasAluno): Boletim[] {
    // TERMINAR
}