// prototype chain
const obj1 = {
    o1: "inside obj1"
}
const obj2 = {
    o2: "inside obj2",
    __proto__: obj1
}
const obj3 = {
    o3: "inside obj3",
    __proto__: obj2
}


const num = 10
const str = "str"
const bol = true
console.log(num.__proto__)// it gives class of an Number
console.log(num.__proto__.__proto__) // the prototype of Number is Object
console.log(num.__proto__.__proto__.__proto__) // the prototype of Object is null

console.log(str.__proto__)// it gives class of an String
console.log(str.__proto__.__proto__) // the prototype of String is Object
console.log(str.__proto__.__proto__.__proto__) // the prototype of Object is null

console.log(bol.__proto__)// it gives class of an Boolean
console.log(bol.__proto__.__proto__) // the prototype of Boolean is Object
console.log(bol.__proto__.__proto__.__proto__) // the prototype of Object is null