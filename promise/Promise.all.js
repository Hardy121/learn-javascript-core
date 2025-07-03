// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 success")
//     }, 3000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 success")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 success")
//     }, 2000)
// })

// Promise.all([p1, p2, p3])
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

function getTodos() {
    const res = fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
    return res
}

function getTodo() {
    const res = fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
    return res
}


function getPosts() {
    const res = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    return res
}
function getPost() {
    const res = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json())
    return res
}
Promise.all([
    getTodos(),
    getTodo(),
    getPosts(),
    getPost()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err.message)
})
