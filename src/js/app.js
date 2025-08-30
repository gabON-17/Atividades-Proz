const list = document.getElementById('ulList')
const item = document.getElementById('item')
const reload = document.getElementById('reload')
const elementItens = []

const bottom = document.getElementById('submit').addEventListener('click', event => {
    const newBottom = document.createElement('button')
    const newElement = document.createElement('li')

    newBottom.addEventListener('click', e => {
        const element = newBottom.parentElement
        list.removeChild(element)
    })

    newBottom.className = 'buttom-end'
    newBottom.innerHTML = 'X'
    newElement.innerHTML = item.value

    newElement.append(newBottom)
    list.appendChild(newElement)

    elementItens.push(newElement)
})

reload.addEventListener('click', e => {
    const item = localStorage.getItem('item')
    console.log(item)
    // list.appendChild()
})

const setItens = () => {
    localStorage.setItem('itens', elementItens)
}