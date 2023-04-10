
let number = 1
const list = []
do {
  number = parseFloat(prompt('Give me a number: '))
  list.push(number)
} while (number != 0)

list.sort()
list.reverse()

for(let i=0; i<list.length; i++) {
  console.log(list[i])
}