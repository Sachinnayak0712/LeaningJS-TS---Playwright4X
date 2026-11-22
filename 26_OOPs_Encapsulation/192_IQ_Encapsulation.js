class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }
  display() {
    console.log("[" + this.severity + "] " + this.title);
  }
}
let a1 = new Bug("Login crash", "Critical");
let a2 = new Bug("Typo in footer", "Low");

a1.display();
a2.display();