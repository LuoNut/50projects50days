let boxs = document.querySelectorAll('.box')

window.addEventListener('scroll', scrolling)
scrolling()

function scrolling() {
    let distranceTop = window.innerHeight / 5 * 4

    boxs.forEach(item => {
        if(item.getBoundingClientRect().top < distranceTop) {
            item.classList.add('show')
        }else {
            item.classList.remove('show')
        }
    })
}