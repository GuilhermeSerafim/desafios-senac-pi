# Exercícios de programação — Senac

Coleção de desafios e exercícios de aula em JavaScript e TypeScript. As versões e correções são mantidas para acompanhar a evolução do aprendizado.

## Mapa de leitura

| Pasta | Conteúdo na árvore |
| --- | --- |
| `aula1` | Exercícios iniciais em JavaScript. |
| `aula2` | Arquivos TypeScript sobre variáveis, funções e objetos. |
| `aula3` | Exercícios simples, condicionais, laços e vetores, com variantes v1/v2. |
| `aula4` | Buscas e desafios em versões distintas. |
| `aula5` | Correções com modularização e desafio de gerenciamento de tarefas. |
| `arquivosGeradosJs` | Arquivos JavaScript gerados presentes no histórico. |

Em `aula5/desafios/desafio3`, `app.ts` organiza o menu e `service.ts` mantém tarefas em um array em memória, com operações de inclusão, listagem, alteração, exclusão e conclusão. Há limites no tratamento de índices: a exclusão percorre até `tarefas.length` inclusive e pode acessar um item inexistente quando o código não é encontrado; a alteração usa diretamente a posição recebida, enquanto a listagem e a conclusão exibem ou recebem posições a partir de 1.

## Ambiente e limites

O `package.json` declara módulos ES, `prompt` e `prompt-sync`, mas não inclui TypeScript como dependência nem um script de compilação/execução. Seu campo `main` aponta para `code.js`, ausente do repositório. O script `test` é um placeholder que encerra com erro; não representa uma suíte de testes.

Antes de reproduzir um exercício, confira a configuração em `tsconfig.json`, as importações e o ambiente necessário para aquele arquivo.
