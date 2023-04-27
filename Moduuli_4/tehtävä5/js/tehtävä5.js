

async function fetchjoke() {
  const joke = await fetch('https://api.chucknorris.io/jokes/random')
  const jsonData = await joke.json()
  document.getElementById("result").innerHTML = jsonData.value
}

fetchjoke();
