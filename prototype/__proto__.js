const obj = {
    name: "hardik",
    surname: "mer",
    getName() {
        console.log(this.name + " " + this.surname);
    }
}
console.log(obj);

const obj2 = Object.create(obj);
obj2.__proto__.name = "hack";
console.log(obj);
console.log(obj2);


