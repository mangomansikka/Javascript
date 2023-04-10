function GetList(value) {
  text += "<li>" + value + "</li>";
}

let participants = parseInt(prompt('How many participants there are? '));
let list = [];

for (let i=0; i<participants; i++) {
  name = prompt('Give me a participants full name: ')
  list.push(name)
}
list.sort()

let text = "<ol>";
list.forEach(GetList)
text += "</ol>"

document.getElementById("result").innerHTML = text