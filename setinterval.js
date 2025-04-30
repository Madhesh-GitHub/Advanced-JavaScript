/*
setInterval() is a method that calls a function or executes a code snippet repeatedly, with a fixed time delay between each call.
It takes two arguments: the function to execute and the delay in milliseconds.

syntax: setInterval(function, delay)
clearInterval() is a method that stops the execution of the function specified in setInterval().
It takes one argument: the interval ID returned by setInterval().
*/


function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function () {
        if (secondsRemaining > 0) {
            console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`)
            secondsRemaining--
        } else {
            console.log(`Your ${device} is shutting down`)
            clearInterval(shutdownTimer)
        }

    }, 1000)
}
startCountdown('MacBook')
