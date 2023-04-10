let number1 = prompt('Give me the first number: ');
let number2 = prompt('Give me the second number: ');
let number3 = prompt('Give me the third number: ');
let number4 = prompt('Give me the fourth number: ');
let number5 = prompt('Give me the fifth number: ');

let list = []

list[4] = number1
list[3] = number2
list[2] = number3
list[1] = number4
list[0] = number5

for (let i = 0; i < list.length; i++) {
        console.log(`Number: ${list[i]}`);
    }
