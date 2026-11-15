// 1. Call by reference: one object, two names
let a = {status:"pass"};
let b = a;
b.status = "fail";
console.log(a.status);         

// 2. Shallow copy (...spread): new object, but the inner object is shared
let user1 = {name:"Sachin", address:{city:"Bangalore"}};
let copy1 = {...user1};
copy1.name = "Amit";
copy1.address.city = "Mumbai";
console.log(user1.name);    
console.log(user1.address.city); 

// 3. Deep copy (structuredClone): everything is new
let user2 = {name:"Sachin", address:{city:"Bangalore"}};
let copy2 = structuredClone(user2);
copy2.name = "Amit";
copy2.address.city = "Mumbai";
console.log(user2.name);         
console.log(user2.address.city);  