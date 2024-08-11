const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();

        botao.classList.add("selecionado");

        trocarImagemDeFundo(indice);

        trocarInformacaoAtiva(indice);

    })
})

function trocarInformacaoAtiva(indice) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
    informacoes[indice].classList.add("ativa");
}

function trocarImagemDeFundo(indice) {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
    imagens[indice].classList.add("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
