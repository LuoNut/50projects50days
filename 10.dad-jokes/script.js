let joke = document.getElementById('joke')
let btn = document.getElementById('btn')

btn.addEventListener('click', getJoke)

getJoke()

async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    let res = await fetch('https://icanhazdadjoke.com', config)
    let data = await res.json()
    joke.innerHTML = data.joke
}