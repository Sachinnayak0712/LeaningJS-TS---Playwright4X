function greet(name){
    return `Hello, ${name}`;
}

const greet1 = function(name){
    return `Hello, ${name}`;
}

// Arrow Fn
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
const greet2 = (name) => `Hello, ${name}`;

console.log(greet("Sachin"));
console.log(greet1("Nayak"));
console.log(greet2("Sachin"));