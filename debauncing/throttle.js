function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
        let now = Date.now()
        if (now - lastCall < delay) {
            return
        }
        lastCall = now;
        return fn(...args)
    }
}
const sendingMessage = (message) => {
    console.log("sending message", message)
}

const sendingMessageAfterSomeTime = throttle(sendingMessage, 5 * 1000)

setInterval(() => {
    sendingMessageAfterSomeTime("Repeated message every 2s")
}, 2000);
