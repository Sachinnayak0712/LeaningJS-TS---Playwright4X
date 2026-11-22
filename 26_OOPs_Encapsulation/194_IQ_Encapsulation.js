class User{
    constructor(Fname, Lname){
        this.Fname = Fname;
        this.Lname = Lname;
    }
    greet(){
        console.log("Hi, I am first name is:" + this.Fname );
        console.log("And last name is: " + this.Lname);
    }
}

let a1 = new User("Sachin", "Nayak");
a1.greet();