class Teacher1 extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }

}

class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }

}

printName([
    new Student(1, 'ikram', 'Smith'),
    new Teacher('Bikram', 'Subba'),
    new Principal('Ayusha', 'Subba')
])

// polymorphism
function printName(people: Person[]) {
    for (let person of people)
        console.log(person.fullName)
}