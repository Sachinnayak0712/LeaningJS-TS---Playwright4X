class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    food(){
        console.log("Food Called!");
    }
}

class name extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        super.food();
        console.log(this.name, " is barking!");
    }
}

let dog = new name("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);
