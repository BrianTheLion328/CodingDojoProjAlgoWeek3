// Recursive Sigma

// Write a recursive function that given a number returns the sum of integers from 1 to that number
// Example: rSigma(5) returns 15, because (1 + 2 + 3 + 4 + 5)

function rSigma(number){
    if (number > 0) {
        return rSigma(number - 1) + number
    }
    return 0
}

console.log(rSigma(5))
console.log(rSigma(-1))
