// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// 1. Integer Letrals

// Decimal - most common

let decimal_number = 32;
console.log("Number is: ", decimal_number); // 32

// Binary (Base 2) - starts with 0b or 0B

let binary_number = 0b1011; // 11 in decimal
console.log("Binary number 0b1011 is: ", binary_number); // 11

// Octal (Base 8) - starts with 0o or 0O

let octal_value = 0o22; // 18 in decimal
console.log("Octal 0o52:", octal_value); // 18

// Hexadecimal (Base 16) - starts with 0x or 0X

let hex_value = 0x3B; // 59 in decimal
console.log("Hexa decimal value for 0x3B is: ", hex_value); // 59


// 2. Floating point literals

let float_value_1 = 3.14;
let float_value_2 = -0.9
let float_value_3 = .8;
let float_value_4 = 9.    

console.log("Float vlaue 3.14 is: ", float_value_1);
console.log("Float value -0.9 is: ", float_value_2);
console.log("Float vlaue .9 is: ", float_value_3);
console.log("Float vlaue 9. is: ", float_value_4);

// Exponential notation
let exp_value1 = 1.3e5;   // 1.3 * 10^5 = 130000
let exp_value2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp_value3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential_1 value 1.3e5 is: ", exp_value1);   // 1500
console.log("Exponential_2 value 1.5e-3 is: ", exp_value2);  // 0.0015
console.log("Exponential_3 value 2E10 is: ", exp_value3);    // 20000000000