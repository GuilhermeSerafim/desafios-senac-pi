import PromptSync from "prompt-sync";

const sc = PromptSync();

for(let i = 0; i <= 10; i++) {
    console.log(Math.floor(Math.random() * 1000)); // floor arrendonda pra baixo
}