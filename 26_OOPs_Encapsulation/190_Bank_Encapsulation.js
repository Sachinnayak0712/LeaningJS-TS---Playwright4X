class ICICI {
    #name
    #balance;
    constructor(name, balance) {
        this.#balance = balance;
        this.#name = name;
    }
    getBalance() {
        return this.#balance;
    }
    getName(){
        return this.#name;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}
let userName = new ICICI("Sachin", 1000);
console.log(userName.getName());
console.log(userName.getBalance());
userName.setBalance(10000000, false);
console.log(userName.getBalance());

let userName_father = new ICICI("Sachin", 2000);
console.log(userName_father.getBalance());
userName_father.setBalance(300000, true);
console.log(userName_father.getBalance());