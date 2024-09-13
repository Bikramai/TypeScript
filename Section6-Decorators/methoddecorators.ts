// Method decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // We get a reference to the original method
    const original = descriptor.value as Function;
    // Then, we redefine the method
    descriptor.value = function(...args: any) {
        // We have a chance to do something first
        console.log('Before');
        // Then, we call the original method
        original.call(this, ...args);
        // And we have a chance to do something after 
        console.log('After');  
    }
}
    
class Person {   
    //@Log
    say(message: string) {}
}