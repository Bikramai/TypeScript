"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Bikram', 0);
console.log(account.getBalance());
