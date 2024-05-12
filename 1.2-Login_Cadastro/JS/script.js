let btnSignin = document.querySelector('#signin')
let btnSignup = document.querySelector('#signup')
let body = document.querySelector('body')

btnSignin.addEventListener('click', function() {
    body.className = "sign-in-js"
})

btnSignup.addEventListener('click', function() {
    body.className = "sign-up-js"
})

function encaminhar_opcoes() {
    window.location.href = '3opcao'
}