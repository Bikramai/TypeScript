"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student2 extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher2 extends Person {
    get fullName() {
        return 'Professor ' + ' ' + super.lastName;
    }
}
let teacher2 = new Teacher('John', 'Smith');
console.log(teacher.fullName);
