// syntax: setTimeout(function, delay)
/* 
    setTimeout is a function that executes a function after a specified delay (in milliseconds).
    It takes two arguments: the function to execute and the delay in milliseconds.
    The function will be executed once after the delay.
*/

console.log('What is the capital of Peru?')

setTimeout(function(){
    console.log('Lima!')
}, 3000)

setTimeout(function(){
    console.log('Ready for next question?')
}, 6000)



// setTimeout execution with a function that takes an argument

function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')
setTimeout(logAnswer, 3000, "Lima", 10)