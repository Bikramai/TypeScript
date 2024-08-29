"use strict";
class Account3 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let account3 = new Account(1, 'Bikram', 0);
account3.deposit(500);
console.log(account3);
console.log(typeof account3);
console.log(account3 instanceof Account3);
