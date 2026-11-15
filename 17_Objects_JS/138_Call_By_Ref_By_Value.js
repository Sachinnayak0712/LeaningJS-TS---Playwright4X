// Primitive data type - call by value
// Primitive, Number, String, Boolean, Null, Undefined

let a = 20;
let b = a;
b = 9;
console.log(a);
console.log(b);

console.log("-----")

let object1 = {val:20};
let object2 = object1;
object2.val = 90;
console.log(object1.val);
console.log(object2.val);

