"use strict";
function Component(constructor) {
    // Here we have a chance to modify members of 
    // the target class. 
    constructor.prototype.uniqueId = Date.now();
}
