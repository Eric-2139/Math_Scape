//Porta com senha
const button = document.querySelector('.button')
const input = document.querySelector('.input')


button.addEventListener('click', () => {
  const password = input.value;
  
  if (password === '92139') {
    window.location.href = 'http://127.0.0.1:5500/3-Opções/index3.html'
    alert('Parabéns viajante, concluiu o primeiro nível, agora você tem todo um universo para explorar ou até criar o seu próprio!');
  } else {
    alert('Senha incorreta!');
  }
});
//-----------------------------------------------------------------------------------------------------------------------------------

//Botões
const botoes = document.querySelectorAll('.botao')
const fase =  document.querySelectorAll('.room')

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarBotao()
        desselecionarFase()

        botao.classList.add('selecionado')
        fase[indice].classList.add(('selecionado'))
    })
})

function desselecionarFase() {
    const personagemSelecionado = document.querySelector('.room.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
//-----------------------------------------------------------------------------------------------------------------------------------

//Terceiro digito da senha
function verificar() {
  const resposta = document.querySelector('input.resposta')
  const res = document.querySelector('div.res')
  const txtres = Number(resposta.value)

  if (txtres == 310) {
    res.innerHTML = 'O terceiro digito da senha é 3'
  } else {
    res.innerHTML = 'Resposta Errada!!'
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------

//Segundo digito da senha
function verificar_direita() {
  const resposta_direita = document.querySelector('input.resposta-direita')
  const resdir = document.querySelector('div.res-direita')
  const txtresdir = Number(resposta_direita.value)

  if (txtresdir == 123) {
    resdir.innerHTML = 'O segundo digito da senha é 1'
  } else {
    resdir.innerHTML = 'Resposta Errada!!'
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------

//Primeiro digito da senha-caminho
function verificar_esquerda_horas() {
  const resposta_esquerda_horas = document.querySelector('input.resposta-esquerda-horas')
  const resesqh = document.querySelector('div.res-esquerda-horas')
  const txtresesqh = Number(resposta_esquerda_horas.value)

  if (txtresesqh == 15) {
    resesqh.innerHTML = 'Resposta correta, olhe para cima'
  } else {
    resesqh.innerHTML = 'Resposta Errada!!'
  }
}

function verificar_esquerda_min() {
  const resposta_esquerda_min = document.querySelector('input.resposta-esquerda-min')
  const resesqmin = document.querySelector('div.res-esquerda-min')
  const txtresesqmin = Number(resposta_esquerda_min.value)

  if (txtresesqmin == 40) {
    resesqmin.innerHTML = 'Resposta correta, olhe para cima'
  } else {
    resesqmin.innerHTML = 'Resposta Errada!!'
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------

//Relogio
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

const getTime = () => {
    const date = new Date()

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

setInterval(() => {

    const { seconds, minutes, hours } = getTime()
 
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

},1000)
//-----------------------------------------------------------------------------------------------------------------------------------

//Primeiro digito da senha
function verificar_teto() {
  const resposta_teto = document.querySelector('input.resposta-teto')
  const resteto = document.querySelector('div.res-teto')
  const txtresteto = Number(resposta_teto.value)

  if (txtresteto == 55) {
    resteto.innerHTML = 'O primeiro digito da senha é 92'
  } else {
    resteto.innerHTML = 'Resposta Errada!!'
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------

function dica_frente() {
  alert('Realize primeiro a multiplicação, depois a adição')
}

function dica_direita() {
  alert('Se você tentar fazer de cabeça, é provavel que você se perca, escreva a equação em algum lugar, seguindo a ordem das setas, resolva primeiro as multiplicações e divisões, e depois as adições e subtrações')
}

function dica_fundo() {
  alert('')
}

function dica_esquerda() {
  alert('Resolva primeiro o que está entre parênteses')
}

function dica_teto() {
  alert('Não use as horas e minutos do relógio que você está vendo no momento, use os dados que você conseguiu nas contas perto do relógio antigo')
}