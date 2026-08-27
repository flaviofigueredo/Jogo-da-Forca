# 🎮 Jogo da Forca (CLI) - Node.js

Um jogo da forca clássico, interativo e executado diretamente no terminal (Command Line Interface). Desenvolvido em JavaScript puro utilizando o ambiente **Node.js**, este projeto demonstra o uso de entradas e saídas assíncronas no console.

## 📝 Sobre o Projeto

Este projeto foi criado com o intuito de praticar conceitos de lógica de programação e manipulação de fluxos de entrada e saída no terminal. O jogo sorteia aleatoriamente uma palavra de um banco de dados interno (com temática voltada para desenvolvimento web/backend) e o jogador tem até 6 tentativas para adivinhar a palavra correta.

## ✨ Funcionalidades

- **Sorteio Aleatório:** A palavra secreta é escolhida de forma randômica a cada nova partida.
- **Feedback em Tempo Real:** O terminal é atualizado a cada palpite, mostrando as letras descobertas e ocultando o restante.
- **Controle de Vidas:** O jogador possui 6 chances de errar antes de perder o jogo (Game Over).
- **Entrada Assíncrona:** Utiliza o módulo `readline/promises` nativo do Node.js para garantir uma interação fluida com o usuário.

## 🛠️ Tecnologias Utilizadas

- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Linguagem de programação.
- **[Node.js](https://nodejs.org/)** - Ambiente de execução (Runtime).
  - Módulo `readline/promises` - Para capturar as entradas do usuário no terminal.
  - Módulo `process` - Para controle de entrada e saída (`stdin` e `stdout`).

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Passo a Passo

1. Salve o código do jogo em um arquivo chamado `index.js` (ou clone o repositório, caso esteja usando o Git).
2. Abra o terminal e navegue até a pasta onde o arquivo foi salvo.
3. Execute o seguinte comando para iniciar o jogo:

```bash
node index.js