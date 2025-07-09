const student = {
    name: "Mount",
    surname: "Matheran"
}
function printName (city, state)  {
        console.log(this.name + " " + this.surname + " from" + city + "," + state)
}
printName.call(student, "bhopal", "MP")

const student2 = {
    name: "Student",
    surname: "Sceince"
}

printName.apply(student2, ["Ajamer","rajasthan"])

const printNAMES = printName.bind(student2, ["Ajamer","rajasthan"])
printNAMES()