import PromptSync from "prompt-sync";

const sc = PromptSync();
const tamanhoQuadrado = parseInt(sc("Informe o tamanho do quadrado: "));

for (let i = 0; i <= tamanhoQuadrado; i++) {
    for (let j = 0; j <= tamanhoQuadrado; j++) {
        process.stdout.write("x");
    }
    console.log("y");
}