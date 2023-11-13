const jokecontainer = document.querySelector('.p-tag'); 
const button = document.querySelector('.btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

const getJoke = () => {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        jokecontainer.textContent = `${data.joke}`
    })
}
button.addEventListener('click', getJoke)
getJoke()