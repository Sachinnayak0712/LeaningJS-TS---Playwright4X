class Car {
        #name;
        #engine; // #private
        constructor(name, engineName) {
        this.#name = name;
        this.#engine = engineName;
    }
    getEngine() {
        return this.#engine;
    }
    getname(){
        return this.#name;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Mahindra", "V8");
console.log(tesla.getname());
console.log(tesla.getEngine());

tesla.setEngine("V9");

console.log(tesla.getEngine());