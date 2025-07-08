// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("1st promise resolve")
//     }, 2000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("2nd promise resolve")
//     }, 4000)
// })

// async function handleAsync() {
//     console.log("Hello world!")
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await res.json()
//     console.log(data)
//     console.log("First promise is completed")

//     const res2 = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data2 = await res2.json()
//     console.log(data2)
//     console.log("Second promise is completed")
// }
// handleAsync()

function fetchWithRetry(fetchFn, retries = 3) {
  return fetchFn().catch((err) => {
    if (retries === 0) throw err;
    console.log("Retrying...");
    return fetchWithRetry(fetchFn, retries - 1);
  });
}

