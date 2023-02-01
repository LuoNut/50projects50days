let bg = document.querySelector('.bg')
let loadingText = document.querySelector('.loadingText')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load += 1

    loadingText.innerHTML = `${load}%`
    if(load > 99) {
        clearInterval(int)
    }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
}

const scale = (nuber, inMin, inMax, outMin, outMax) => {
    return (nuber - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}