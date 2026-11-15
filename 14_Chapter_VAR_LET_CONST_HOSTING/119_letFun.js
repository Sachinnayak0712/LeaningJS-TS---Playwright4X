/*
Block-scoped
Cannot be redeclared in the same scope
Can be reassigned
*/

let a = 15;
console.log(a);

function printHello(){
    console.log("Hello Sachin Nayak");
    let a = 20;
    console.log(a);
    if(true){
        let a = 30;
        console.log(a);
    }
    console.log(a);
}
printHello();