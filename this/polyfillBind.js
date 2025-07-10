let obj = {
    name: "Sachin",
    surname: "Tendulkar"
}

function printName(city, state, country) {
    console.log(this.name + " " + this.surname + "," + city + "," + state + "," + country)
}
printName.bind(obj, "mumbai", "maharashtra")("india")

Function.prototype.myBind = function (...args) {
    const obj = this
    let params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}
printName.myBind(obj, "mumbai", "maharashtra")("india")