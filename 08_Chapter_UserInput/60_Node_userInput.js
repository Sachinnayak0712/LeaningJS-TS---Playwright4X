const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
       let number = Number(input);

    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else { 
        console.log(number + " is Odd");
    }
rl.close(); 
});