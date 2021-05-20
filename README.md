# Boas vindas ao repositório do projeto Color-Guess!

#### Projeto elaborado e proposto as pessoas estudantes da [<img src="./trybe.png" width="70px" alt="Trybe">][website]

#### Projeto executado com aproximadamente 1 mês de curso.

#### Este projeto não foi refatorado, permanece com mesma estrura de script, html e css ao projeto feito originalmente.

[website]: https://ajuda.betrybe.com/hc/pt-br/articles/360056543894-Quem-pode-estudar-na-Trybe-
---

## Requisitos do projeto

---

## Requisitos Obrigatórios:

Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da **forma que desejar** desde que todos os requisitos sejam cumpridos. Use sua imaginação! 🧠

---

## Requisitos do projeto

### 1 - O seu site deve possuir um título com o nome do seu jogo

- O **id** do seu título deve ser `title`

### 2 - A página deve possuir o texto com o código RGB a ser adivinhado

- O seu **id** deve ser `rgb-color`
- Esse texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`

### 3 - A página deve conter opções de cores para serem adivinhadas

- Deve conter 6 circulos como opção de cor de adivinhação
- A **class** de todos os circulos deve ser `ball`

### 4 - As cores das bolas devem ser geradas dinâmicamente

- Ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript

### 5 - Ao clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto

- O seu **id** do elemento deve ser `answer`
- Quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`
- Se o circulo colorido for o **correto**, deve ser exibido o texto `"Acertou!"`
- Se o circulo colorido for o **incorreta**, deve ser exibido o texto `"Errou! Tente novamente!"`

### 6 - Crie um botão para iniciar/reiniciar o jogo

- O botão deve ter o **id** `reset-game`.
- Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento `rgb-color` deve ser atualizado
- Ao clicar no botão, o elemento `answer` deve voltar ao estado inicial, exibindo o texto `"Escolha uma cor"`

## BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

- O elemento deve ter o **id** `score`.
- O valor inicial dele deve ser 0.
- A cada acerto, é incrementado 3 pontos ao placar
- Ao clicar no botão reiniciar, o placar **NÃO** deve ser resetado

---
