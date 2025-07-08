const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st promise resolve")
    }, 3000)
})


function handlePromise() {
    promise.then(res => console.log(res))
    console.log("First promise is completed")

}
handlePromise()

async function handleAsync() {
    console.log("Hello world!")
    const first = await promise
    console.log(first)
    console.log("First promise is completed")
}

handleAsync()