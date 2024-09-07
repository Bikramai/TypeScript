class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    walk(): void {
        console.log('Walking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log('Taking a test');
    }
}

let student = new Student(1, 'Ikram', 'Khan');
console.log(student.fullName); // Outputs: Ikram Khan
student.walk(); // Outputs: Walking
student.takeTest(); // Outputs: Taking a test
