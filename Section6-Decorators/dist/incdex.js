"use strict";
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
function Component(value) {
    return (constructor) => {
        // Here we have a chance to modify members of
        // the target class.
        constructor.prototype.uniqueId = Date.now();
    };
}
