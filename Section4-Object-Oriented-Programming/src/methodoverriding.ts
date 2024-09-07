class Person1 {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    walk(): void {
        console.log('Walking');
    }
}

class Student1 extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log('Taking a test');
    }
}

class Teacher extends Person {
    override get fullName(): string {
        return 'Professor ' + ' ' + super.lastName;
    }

}


let teacher = new Teacher('John', 'Smith')
console.log(teacher.fullName)
