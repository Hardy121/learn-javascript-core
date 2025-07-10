function multiply(x, y) {
    console.log(x * y)
}

multiply.bind(this, 3)(50);

function closureCurrying(x) {
    return function (y, z, q) {
        console.log(x * y * z * q)
    }
}
closureCurrying(4)(87, 21, 22);
// Currying is a process of transforming a function with multiple arguments into a series of nested functions that take one argument at a time.
