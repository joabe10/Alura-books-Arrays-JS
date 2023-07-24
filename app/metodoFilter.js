const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click',
FiltrarLivros) ) //n tem parenteses, pois é executado depois

function FiltrarLivros() {
    const elementoBtn = document.getElementById(this.id) //identifica qual btn está sendo clicado 
    const categoria = elementoBtn.value
    //refazer o seguinte código com cmmnts alura para facilitar
    let livrosFiltrados = categoria == 'disponiveis' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponiveis') {
        exibirValorTotalDosLivrosDisponiveisNaTela() 
    }
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
    elementoComValorTotalDeLivrosDisponives.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
  </div>
    `
}
//consigo puxar o array 'livros' criado em main. 