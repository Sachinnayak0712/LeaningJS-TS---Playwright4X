class Counter {
    constructor() {
        this.count = 5;
    }
    increment() {
        this.count++;
        return this;
    }
    display() {
        console.log("Count:", this.count);
        return this;
    }
}
new Counter().increment().increment().increment().display();