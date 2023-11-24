const botoes = document.querySelectorAll('.botao')
const fase =  document.querySelectorAll('.fase')
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarBotao()
        desselecionarFase()

        botao.classList.add('selecionado')
        fase[indice].classList.add(('selecionado'))
    })
})

function desselecionarFase() {
    const personagemSelecionado = document.querySelector('.fase.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}