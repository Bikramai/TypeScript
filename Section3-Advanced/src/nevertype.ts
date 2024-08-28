function reject(message: string):never {
    throw new Error(message)
}



function processEvent(): never {
    while (true) {
        // Read a message from a queuce
    }
}

reject('...')
processEvent()
console.log('Hello World');