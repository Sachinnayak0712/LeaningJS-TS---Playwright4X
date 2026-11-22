class A { 
    who() { 
        return "A"; 
    } 
}
class B extends A { 
    who() { 
        return "B extends" + super.who(); 
    } 
}
class C extends B { 
    who() { 
        return "C extends" + super.who(); 
    } 
}
console.log(new C().who());
console.log(new B().who());
console.log(new A().who());