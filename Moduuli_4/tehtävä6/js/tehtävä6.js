'use strict'
let info = 'Enter search'
document.getElementById("info").innerHTML = info

document.addEventListener('submit', async function(evt) {
  evt.preventDefault()
  const query = this.querySelector('#query').value;
  const joke = await fetch(`https://api.chucknorris.io/jokes/random?q=${query}`)
  const jsonData = await joke.json()
  document.getElementById("result").innerHTML = jsonData.value
});

