function Pipe(constructor: Function ) {
    console.log('Pipe decorator called')
    constructor.prototype.pipe = true;
}

// function Component(constructor: Function) { 
//     // console.log('Component decorator called');
//     // constructor.prototype.uniqueId = Date.now();
//     // constructor.prototype.insertInDOM = () => {
//     //     console.log('Inserting the component in the DOM');
//     // }
//     // Here we have a chance to modify members of 
//     // the target class. 
//     constructor.prototype.uniqueId = Date.now();
// }

// @Component
// class ProfileComponent { 
// }


// Parameterized decorators
function Component(value: number) {
    return (constructor: Function) => {
        // Here we have a chance to modify members of
        // the target class.
        constructor.prototype.uniqueId = Date.now(); 
    };
}

// Decorator composition

// Multiple decorators are applied in reverse order.
// Pipe followed by Component.
//@Component
@Pipe
class ProfileComponent {}
