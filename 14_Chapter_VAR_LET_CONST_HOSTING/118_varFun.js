/*
Function-scoped
Can be redeclared
Can be reassigned
*/

var a = 15;
console.log(a);

function printHello(){
    console.log("Hello Sachin Nayak");
    var a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log(a);
    }
    console.log(a);
}
printHello();