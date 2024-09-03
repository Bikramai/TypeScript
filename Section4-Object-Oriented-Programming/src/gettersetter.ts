// class Account {
//     nickname?: string;

//     // Parameter properties 
//     constructor(
//         public readonly id: number, 
//         public owner: string, 
//         private _balance: number) {
        
//     }


// get balance(): number {
//     return this. _balance;
// }

// set balance(value: number) {
//     if (value < 0)
//         throw new Error('Invalid value');
//     this._balance = value;
// }

// let account = new Account(1, 'Bikram', 0);
// console.log(account.getBalance());