'use strict'

const imperativeFactorial = (n) => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

const recursiveFactorial = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * recursiveFactorial(n - 1)
  }
}

const tailRecursiveFactorial = (n, result = 1) => {
  if (n <= 1) {
    return result
  } else {
    return tailRecursiveFactorial(n - 1, result * n)
  }
}

// Test

console.assert(imperativeFactorial(0) === 1)
console.assert(recursiveFactorial(0) === 1)
console.assert(tailRecursiveFactorial(0) === 1)

console.assert(imperativeFactorial(1) === 1)
console.assert(recursiveFactorial(1) === 1)
console.assert(tailRecursiveFactorial(1) === 1)

console.assert(imperativeFactorial(8) === 40320)
console.assert(recursiveFactorial(8) === 40320)
console.assert(tailRecursiveFactorial(8) === 40320)
