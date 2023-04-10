function concat(strings) {
  let elements = ""
  for(let i=0; i<strings.length; i++){
    elements += strings[i]
  }
  return elements;
}

const array = ["Mikko", "Anna", "Liisa", "Joni"]

let result = concat(array)

document.getElementById("print").innerHTML = result