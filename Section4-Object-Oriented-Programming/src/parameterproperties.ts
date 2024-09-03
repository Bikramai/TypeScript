class Account {
    nickname?: string;

    // Parameter properties 
    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
        
    }

    deposit(amount: number): void {
      if (amount <= 0)  
        throw new Error('Invalid amount');
      // Record a transaction 
      this._balance += amount;
    }

    private calculateTax(){

    }

    getBalance(): number {
      return this.balance;
    }
}

// Objects
let account = new Account(1, 'Bikram', 0);
console.log(account.getBalance());
