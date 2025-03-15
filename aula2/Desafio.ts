import promptSync from 'prompt-sync';

const prompt = promptSync();

type Aluno = {
    nome: string,
    disciplinas: Disciplina[]
}

type Disciplina = {
    nome: string,
    nota1: number,
    nota2: number,
    nota3: number
}

// Situação:
// Aprovado: média ≥ 7.0
// Reprovado: média < 5.0
// Recuperação: 5.0 ≤ média < 7.0 */
type Boletim = {
    disciplina: string,
    media: number,
    situacao: string
}

const nomeAluno = prompt("Informe o nome do aluno: ");
const disciplinas: Disciplina[] = [];

// Input disciplina e notas
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

const alunoA: Aluno = {
    nome: nomeAluno,
    disciplinas: disciplinas,
}


// Percorre notas, calcular media e mostrar todos os boletins de cada respectiva materia do aluno
function gerarBoletim(aluno: Aluno): Boletim[] {
    const boletimArr: Boletim[] = [];
    for (let i = 0; i < aluno.disciplinas.length; i++) {
        let media = 0;
        media = (aluno.disciplinas[i].nota1 + aluno.disciplinas[i].nota2 + aluno.disciplinas[i].nota3) / 3;
        let boletim: Boletim = {
            disciplina: aluno.disciplinas[i].nome,
            media: media,
            situacao: media > 6 ? "Aprovado" : media < 5 ? "Reprovado" : "Recuperação"
        }
        boletimArr.push(boletim);
    }
    return boletimArr;
}

function visualizarBoletimAluno(aluno: Aluno, boletins: Boletim[]): void { 
    console.log(`Boletim do aluno ${aluno.nome}`);
    for (const boletim of boletins) {
        console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
        console.log(boletim.disciplina);
        console.log(boletim.media);
        console.log(boletim.situacao);
        console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
    }
}

visualizarBoletimAluno(alunoA, gerarBoletim(alunoA));