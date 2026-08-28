const readline = require('readline/promises');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function iniciarJogo(){
    const palavras = ["BACKEND", "NODEJS", "JAVASCRIPT", "EXPRESS", "SERVIDOR", "TERMINAL"];

    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSecreta = palavras[indiceAleatorio];

    let letrasDescobertas = Array(palavraSecreta.length).fill("_");
    let jogoRodando = true;

    let vidas = 6;
    
    const dica = "Desenvolvimento de software";
    console.log("=== Bem-vindo ao Jogo da Forca ===");
    console.log(`\nVidas restantes: ${vidas}`);
   
    while (jogoRodando) {
        console.log(`\nPalavra atual: ${letrasDescobertas.join(" ")}`);
        
        const chute = (await rl.question("Digite uma letra: ")).toUpperCase();
        let acertou = false;

        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === chute) {
                letrasDescobertas[i] = chute;
                acertou = true;
            }
        }

        if (!acertou){
            console.log("[X] Letra incorreta!");
            vidas--;
        }

        if (!letrasDescobertas.includes("_")){
            let pontuacao = (vidas * 10) + 50;
            console.log(`\n[VITORIA] Parabéns! Você descobriu a palavra: ${palavraSecreta}`);
             console.log(` \n[PONTUAÇÃO] Sua pontuação final foi: 
                ${pontuacaoFinal} pontos`);
            jogoRodando = false;
        }

        if (vidas === 0){
            console.log(`\n[FIM DE JOGO] A palavra correta era: ${palavraSecreta}`);
            jogoRodando = false;
        }
    }

    rl.close();

}

iniciarJogo()