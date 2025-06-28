
// 🤔 Why Do We Need Higher-Order Functions?
// Because in JavaScript:

// Functions are first-class citizens — meaning they can be treated like variables.
// You can pass functions around like data, making code flexible, reusable, and modular

// 🧠 Benefits:

// 📦 Code reusability
// 🔁 Cleaner loops using .map, .filter, etc.
// 🧩 Functional programming style
// ⚡ More abstract and powerful logic handling

const array = [1, 2, 3, 4, 5]

function double(params) {
    return params * 2
}

function triple(params) {
    return params * 3
}

function binary(params) {
    return params.toString(2)
}

function TheValue(params) {
    let element = [];
    for (let i = 0; i < array.length; i++) {
        element.push(params(array[i]));
    }
    return element
}

// console.log(TheValue(double))
// console.log(TheValue(triple))
// console.log(TheValue(binary))
