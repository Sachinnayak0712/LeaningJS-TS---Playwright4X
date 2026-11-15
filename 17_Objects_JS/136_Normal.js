const user = {
    name: "Sachin",
    age: 30,
    email: "sachinnayak@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);
console.log(user.age);

// Adding properties
user.city = "Bangalore";

// Modifying properties
user.age = 31;

console.log(user);