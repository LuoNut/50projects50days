let container = document.querySelector('.container')
let left = document.querySelector('.left')
let right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {container.classList.add('hoverLeft')})
left.addEventListener('mouseleave', () => {container.classList.remove('hoverLeft')})
right.addEventListener('mouseenter', () => {container.classList.add('hoverRight')})
right.addEventListener('mouseleave', () => {container.classList.remove('hoverRight')})