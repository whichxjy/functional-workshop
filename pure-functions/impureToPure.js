'use strict'

// TODO Copy the impure version of your function here:

let Multiplier = 2

function mul (x, y) {
  return Multiplier * x * y
}

// Test

console.log(mul(2, 3))

Multiplier = 4

console.log(mul(2, 3))

// TODO Now write a refactored, pure version of the function:

function pureMul (x, y) {
  return 2 * x * y
}

// Test

console.log(pureMul(2, 3))
