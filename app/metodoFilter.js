const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click',
FiltrarLivros) ) //n tem parenteses, pois é executado depois

function FiltrarLivros() {
    const elementoBtn = document.getElementById(this.id) //identifica qual btn está sendo clicado 
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}
//consigo puxar o array 'livros' criado em main. 