// this result will be the first settelled value among the promise it can be the success or failuer

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 success")
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 success")
    }, 2000)
})

Promise.race([p1, p2, p3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })



