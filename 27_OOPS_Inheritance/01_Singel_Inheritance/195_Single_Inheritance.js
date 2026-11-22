class Parent {
    food(){
        console.log("Hi, This is a Parent Class");
    }
}

class Son extends Parent{
    walk(){
        console.log("Hi this is a Child Class");
    }
}

const a1 = new Son();
const a2 = new Parent();

a1.walk();
a1.food();
a2.food();