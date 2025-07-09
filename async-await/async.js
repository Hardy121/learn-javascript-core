const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully")
    }, 10000)
})


function handlePromise() {
    promise.then((res) => console.log(res))
    console.log("Before resolving promise")
}
handlePromise()


// async function handleAsyncAwait() {
//     const val = await promise
//     console.log("Before resolving promise")
//     console.log(val)
// }
// handleAsyncAwait()