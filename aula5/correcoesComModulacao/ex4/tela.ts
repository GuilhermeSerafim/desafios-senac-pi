import PromptSync from "prompt-sync";

const ler = PromptSync();

const pedirNumero = (msg: string): number => (console.log(msg), (Number(ler(""))));

const escrever = (msg: string): void => console.log(msg);

export { pedirNumero, escrever }