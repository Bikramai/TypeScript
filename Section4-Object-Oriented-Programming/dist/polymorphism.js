"use strict";
class Teacher1 extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printName([
    new Student(1, 'ikram', 'Smith'),
    new Teacher('Bikram', 'Subba'),
    new Principal('Ayusha', 'Subba')
]);
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
