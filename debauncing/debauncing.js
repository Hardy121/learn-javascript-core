function searchingData() {
    console.log("Searching....")
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        let context = this
        timer = setTimeout(() => {
            fn.apply(context, ...args)
        }, delay)
    }
}

let debouncedFunction = debounce(searchingData, 1000)