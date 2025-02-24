// https://www.figmc.com/design/IVlfjt3Si0iElpYIop1ppK/Desafios
// npm init -v
// npm i prompt -sync
// node arquivo.js
import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt("Informe o nível de A: "));
const b = Number(prompt("Informe o nível de B: "));
const c = Number(prompt("Informe o nível de C: "));
const d = Number(prompt("Informe o nível de D: "));

// O maior sempre vai se juntar com o menor na minha lógica, portanto, a menor diferença
if (a > b && a > c && a > d) {
    if (b <= c && b <= d) {
        console.log((a + b) - (c + d));
    } else if (c <= b && c <= d) {
        console.log((a + c) - (b + d));
    } else {
        console.log((a + d) - (b + c));
    }
} else if (b > a && b > c && b > d) {
    if (a <= b && a <= c && a <= d) {
        console.log((a + b) - (c + d));
    } else if (c <= b && c <= d) {
        console.log((a + c) - (b + d));
    } else {
        console.log((a + d) - (b + c));
    }
} else if (c > a && c > b && c > d) {
    if (a <= b && a <= d) {
        console.log((a + c) - (b + d));
    } else if (b <= c && b <= d) {
        console.log((c + b) - (a + d));
    } else {
        console.log((c + d) - (a + b));
    }
} else {
    if (a <= b && a <= c) {
        console.log((d + a) - (b + c));
    } else if (b <= c && b <= d) {
        console.log((d + b) - (c + d));
    } else {
        console.log((d + c) - (a + b)); // 0000
    }
}

// Poderia fazer assim para identificar N menor, mas eu estaria criando uma condição a mais, porém deixando meu código mais organizadinho
// if (a < b && a < c && a < d) {

// } else if (b < b && b < c && b < d) {

// } else if (c < b && c < c && c < d) {

// } else {

// }
