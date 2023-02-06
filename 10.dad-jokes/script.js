const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', getJoke)

getJoke()

async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    let res = await fetch('https://icanhazdadjoke.com', config)  
    let data = await res.json()
    joke.innerHTML = data.joke
}