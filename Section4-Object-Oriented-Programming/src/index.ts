// class Account {
//     readonly id: number;
//     owner: string;
//     private balance: number;
//     nickname?: string;

//     constructor(id: number, owner: string, balance: number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//       if (amount <= 0)  
//         throw new Error('Invalid amount');
//       // Record a transaction 
//       this.balance += amount;
//     }

//     private calculateTax(){

//     }

//     getBalance(): number {
//       return this.balance;
//     }
// }

// // Objects
// let account = new Account(1, 'Bikram', 0);
// console.log(account.getBalance());
