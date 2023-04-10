function roll() {
  let result = 0
  result += Math.floor(Math.random() * 6 + 1);
  return result;
}

function list(value) {
  text += "<li>" + value + "</li>";
}

let number = 0
let numbers = []

do {
  number = roll()
  numbers.push(number)
} while (number != 6)

let text = "<ul>";
numbers.forEach(list)
text += "</ul>"


document.getElementById("print").innerHTML = text
