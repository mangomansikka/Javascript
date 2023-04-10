function roll(sides) {
  let result = 0
  result += Math.floor(Math.random() * sides + 1);
  return result;
}

function list(value) {
  text += "<li>" + value + "</li>";
}

let number = 0
let numbers = []
let sides = prompt('How many sides does the dice have?')

do {
  number = roll(sides)
  numbers.push(number)
} while (number != sides)

let text = "<ul>";
numbers.forEach(list)
text += "</ul>"


document.getElementById("print").innerHTML = text