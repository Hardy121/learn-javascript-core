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
Promise.allSettled([
    getTodos(),
    getTodo(),
    getPosts(),
    getPost()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err.message)
})