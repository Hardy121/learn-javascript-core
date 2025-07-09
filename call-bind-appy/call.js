const student = {
    name: "Hardik",
    surname: "matheran",
    
    printName: function () {
        console.log(this.name + " " + this.surname)
    }
}
student.printName()

const student2 = {
    name: "Student",
    surname : "sceince"
}

student.printName.call(student2)