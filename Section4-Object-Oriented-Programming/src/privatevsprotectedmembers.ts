class Person2 {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    // private class
    private walk(): void {
        console.log('Walking');
    }
}

class Student2 extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    // protected class
    protected takeTest(): void {
        console.log('Taking a test');
    }
}

class Teacher2 extends Person {
    override get fullName(): string {
        return 'Professor ' + ' ' + super.lastName;
    }

}


let teacher2 = new Teacher('John', 'Smith')
console.log(teacher.fullName)