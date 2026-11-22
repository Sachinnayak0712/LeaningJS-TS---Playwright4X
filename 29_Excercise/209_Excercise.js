class Bug {
    constructor(title, severity) {
        this.title = title;
        this.severity = severity;
    }
    display() {
        console.log("[" + this.severity + "] " + this.title);
    }
}
let test1 = new Bug("Login crash", "Critical");
let test2 = new Bug("Typo in footer", "Low");
test1.display();
test2.display();