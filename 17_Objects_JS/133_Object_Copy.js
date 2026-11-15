let a = { status: "pass" };
let b = a;  
b.status = "fail";
console.log(b.status);
console.log(a.status);