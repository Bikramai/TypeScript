function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log('Hello!');
}

greet(undefined);