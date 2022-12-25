let para = document.querySelector('p')
para.innerHTML = 'Welcome to my coding git'
para.style.color = 'green'
para.style.textAlign = 'center'

const d = document.querySelector('#div')
d.style.border = '1px solid black'

const ds = document.querySelectorAll('.div')
ds.forEach(element =>{
    element.textContent = 'green'
})