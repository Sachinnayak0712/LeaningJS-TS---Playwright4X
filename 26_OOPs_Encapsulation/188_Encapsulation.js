class Person{   // A class named Person is created. A class is a blueprint for creating objects.0
    // hide my variable
    #child1;
    #child2;
/*
The # symbol makes these fields private.

#child1 → accessible only inside the class.
#child2 → accessible only inside the class.
*/
    constructor(name, child1, child2){   // The constructor runs automatically when an object is created.
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getChild(){ // M/O This method returns the value of the private variable #child1.
        return this.#child1;
       
    }


    setChild2(changed_name2){ // M/O This method returns the value of the private variable #child1.
        this.#child2 = changed_name2;
    }

    getchild2(){
        return this.#child2;
    }
    setChild(changed_name)
    {
        this.#child1 = changed_name;
    }
}

let details = new Person("Sachin", "Nayak", "Name2");
console.log(details.getChild());


 details.setChild("Virat");   // Changing the child1 value from Nayak to Virat
 console.log(details.getChild());

details.setChild2("Name2");
 console.log(details.getChild());

 console.log(details.name);
 details.name = "Amit";
  console.log(details.name);