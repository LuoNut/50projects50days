let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', scrolling)

scrolling()
function scrolling() {
    let triggerBotton = window.innerHeight / 5 * 4

    boxes.forEach( box => {
        boxTop = box.getBoundingClientRect().top
        if( boxTop < triggerBotton) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}