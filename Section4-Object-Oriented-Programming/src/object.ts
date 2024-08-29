class Account3 {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)  
          throw new Error('Invalid amount');
        this.balance += amount;
      }
}

// Objects
let account3 = new Account(1, 'Bikram', 0);
account.deposit(500);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);