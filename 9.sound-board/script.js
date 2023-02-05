let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
let buttonContainet = document.querySelector('.buttons')

sounds.forEach( sound => {
    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        pauseSound()
        document.getElementById(sound).play()
    })
    buttonContainet.appendChild(btn)
})

function pauseSound() {
    sounds.forEach( sound => {
        audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}