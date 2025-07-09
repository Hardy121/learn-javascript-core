const url = "https://jsonplaceholder.typicode.com/posts"

const promise = fetch(url)
console.log("🚀 ~ promise:", promise)

promise.then(function (res) {
    console.log(res)
})
promise
    .then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data)
    })