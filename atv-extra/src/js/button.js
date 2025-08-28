const buttons = document.querySelectorAll('.button')
const body = document.getElementById('body')

buttons.forEach(value => {
    value.addEventListener('click', event => {
        if(value.innerHTML === 'Azul') {
            body.style.background = 'blue'
        } 
        if(value.innerHTML === 'Vermelho') {
            body.style.background = '#ff2c2c'
        } 
        if (value.innerHTML === 'Cinza') {
            body.style.background = 'gray'
        }
    })
})