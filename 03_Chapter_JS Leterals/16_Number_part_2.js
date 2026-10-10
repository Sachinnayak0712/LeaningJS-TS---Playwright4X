
// 3. NUMERIC SEPARATORS

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

// 4. BIGINT - For arbitrarily large integers

let big = 123456789012345678901234567890n;
let big2 = BigInt("1193877343947446652083645");
let bigFromNum = BigInt(55);

console.log("BigInt literal value is: ", big);
console.log("BigInt from string value is: ", big2);
console.log("BigInt from number value is: ", bigFromNum);
console.log("typeof BigInt is: ", typeof big); // "bigint"