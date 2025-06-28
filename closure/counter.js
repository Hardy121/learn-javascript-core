    function createAdvancedCounter() {
        let count = 0
        function increment() {
            return ++count
        }

        function decrement() {
            return --count
        }

        function reset() {
            return count = 0
        }

        return { increment, decrement, reset }

    }

    const advancedCounter = createAdvancedCounter();
    console.log(advancedCounter.increment())
    console.log(advancedCounter.increment())
    console.log(advancedCounter.increment())
    console.log(advancedCounter.decrement())
    console.log(advancedCounter.decrement())
    console.log(advancedCounter.reset())