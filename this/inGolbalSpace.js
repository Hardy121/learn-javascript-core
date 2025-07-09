"use strict"

console.log(this) // globalObject - window, global 

function inFunction() {
    // this value will depends on "use strict" Mode on/off 
    // if it is off then it will give undfiened or null but replaced by the globalObject it is called substitutional 
    // if it is on then it will undefined and not replaced by globalObject 
    console.log(this)
}
inFunction() // undefined
// this keyword in function always depends on how function is called 
// even if it is in function and "use strict" is on 
window.inFunction() // and we called like this than it will print windowObject/globalObject



const obj = {
    a: 10,
    x: function () {
        console.log(this) // this will print obj
    }, // the x is known as a method instead of function
    // y: console.log(this)
}
obj.x()



const obj2 = {
    a: 10,
    x: () => {
        console.log(this) // this will print whole windowObject not the obj cause this keyword is not exist in arrow function
        // it behaves like enclosing lexical context    
    },
}

// this keyword inside DOM elements => reference to HTMLelement
obj.x()




