let menuToggle = document.querySelector('.menuToggle')
let menu = document.querySelector('.menu')
let wand = document.querySelector('.wand')
let book = document.querySelector('.book')

menuToggle.onclick = function () {
    menu.classList.toggle('active')
}

function encaminhar_jogo() {
    window.location.href = '/fase'
}

function encaminhar_criador() {
    window.location.href = '/criar'
}