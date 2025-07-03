    // It finds the success settled promise, whenever the settled promise find it will return and if all promises are 
    // fail then it will give aggregateerror means all promise were find

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 success")
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 success")
    }, 2000)
})

Promise.any([p1, p2, p3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })



    