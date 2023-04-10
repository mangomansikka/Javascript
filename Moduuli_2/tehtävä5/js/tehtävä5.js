let value = 0
const list = []
do {
  number = parseFloat(prompt('Give me a number: '))
  list.push(number)
    for(let i=0; i<list.length; i++) {
    value = i
  }
} while (number != value)

list.sort()

for(let i=0; i<list.length; i++) {
  console.log(list[i])
}
