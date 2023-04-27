
'use strict'

let info = 'What TV series would you like to hear more about?'
document.getElementById("info").innerHTML = info

document.addEventListener('submit', async function(evt) {
  evt.preventDefault()
  const response = await fetch('https://api.tvmaze.com/search/shows?q=' + this.querySelector('#query').value);
  const jsonData = await response.json();
  console.log(jsonData)
});

