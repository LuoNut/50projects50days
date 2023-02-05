let circleContainer = document.querySelector('.circleContainer')
let container = document.querySelector('.container')
let close = document.querySelector('.close')
let open = document.querySelector('.open')

close.addEventListener('click', () => {
    container.classList.remove('showNav')
    circleContainer.classList.remove('showNav')
    console.log('close');
})
open.addEventListener('click', () => {
    container.classList.add('showNav')
    circleContainer.classList.add('showNav')
    console.log('open');
})