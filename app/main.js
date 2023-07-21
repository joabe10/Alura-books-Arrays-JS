let livros = []
const endPointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosdaAPI() 

async function getBuscarLivrosdaAPI() {
    const res = await fetch(endPointdaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto) //função para mostrar os descontos 
    // e tmb para manipular com os métodos
}
