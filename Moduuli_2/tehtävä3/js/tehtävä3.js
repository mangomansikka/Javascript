'use strict'
let dogs = []
for(let i=0; i<6; i++){
  let dog = prompt('What is the name of the dog?')
  dogs.push(dog)
}
dogs.sort();
dogs.reverse();
function list(value) {
  text += "<li>" + value + "</li>";
}

let text = "<ul>";
dogs.forEach(list)
text += "</ul>"

document.getElementById("print").innerHTML = text;