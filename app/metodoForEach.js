const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponives = document.getElementById('valor_total_livros_disponiveis')


function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponives.innerHTML = ''
    elementoParaInserirLivros.innerHTML = '' //limpar a tela e mostrar apenas o btn clicado
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDispoDoLivro(livro) OPÇÃO A)
        //OPÇÃO B) Operador ternário
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel' 
        
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
      `
    })
}

//OPÇÃO A)
// function verificarDispoDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens'
//   } else {
//     return 'livros__imagens indisponivel'
//   }
// }
