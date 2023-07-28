const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click',
FiltrarLivros) ) //n tem parenteses, pois é executado depois

function FiltrarLivros() {
    const elementoBtn = document.getElementById(this.id) //identifica qual btn está sendo clicado 
    const categoria = elementoBtn.value //mostra a categoria do btn tocado atraves do value
    //refazer o seguinte código com cmmnts alura para facilitar
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponiveis') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) 
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponives.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}
//consigo puxar o array 'livros' criado em main. 