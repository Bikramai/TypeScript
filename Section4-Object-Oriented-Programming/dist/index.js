"use strict";
class Account {
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
    calculateTax() {
    }
    getBalance() {
        return this.balance;
    }
}
let account = new Account(1, 'Bikram', 0);
console.log(account.getBalance());
