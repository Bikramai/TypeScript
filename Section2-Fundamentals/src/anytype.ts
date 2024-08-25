// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_publish = true;
// let level;

// function render(document) {
//     console.log(document);
// }


/* 
Any : if you declare the variables and don't initialize it, the TypeScript compiler assumes this variable is of any.
For best practice, we should avoid using any type as much as possible. 

Now, look, we have a compilation error. And the error is saying parameter document implicitly has an any type.
Implicity means we haven't explicitly or clearly set the type of this parameter. So the compiler
is inferring or guessing the type of this parameter, and that's why we have this error.
*/