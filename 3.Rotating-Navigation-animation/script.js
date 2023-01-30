let open = document.getElementById('open')
let close = document.getElementById('close')
let container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('showNav')
    console.log("showNav");
})
close.addEventListener('click', () => {
    container.classList.remove('showNav')
    console.log("clear showNav");
})