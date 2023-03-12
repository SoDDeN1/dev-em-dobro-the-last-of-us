/*
OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente a ele.

- passo 1: Dar um jeito de pegar o elemento HTML dos botões.
- passo 2: Identificar o clique dos botões.
- passo 3: Desmarcar o botão selecionado anterior.
- passo 4: Marcar o botão clicado como se tivesse selecionado.
- passo 5: Esconder a imagem de fundo anterior.
- passo 6: Fazer aparecer a imagem de fundo correspondente ao botão clicado.
*/


// passo 1: Dar um jeito de pegar o elemento HTML dos botões.
const botoesCarrosel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// passo 2: Identificar o clique dos botões.
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3: Desmarcar o botão selecionado anterior.
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4: Marcar o botão clicado como se tivesse selecionado.
        botao.classList.add('selecionado');

        // passo 5: Esconder a imagem ativa de fundo.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6: Fazer aparecer a imagem de fundo correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');

    })
})