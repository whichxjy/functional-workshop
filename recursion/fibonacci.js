'use strict'

const imperativeFibonacci = (n) => {
  // result: fib[n]
  const fib = []
  // fib[0] = 0
  fib.push(0)
  // fib[1] = 1
  fib.push(1)
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1])
  }
  return fib[n]
}

const recursiveFibonacci = (n) => {
  if (n <= 1) {
    return n
  } else {
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1)
  }
}

const tailRecursiveFibonacci = (n, prepre = 0, pre = 1) => {
  if (n === 0) {
    return prepre
  } else if (n === 1) {
    return pre
  } else {
    return tailRecursiveFibonacci(n - 1, pre, pre + prepre)
  }
}

console.assert(imperativeFibonacci(0) === 0)
console.assert(recursiveFibonacci(0) === 0)
console.assert(tailRecursiveFibonacci(0) === 0)

console.assert(imperativeFibonacci(1) === 1)
console.assert(recursiveFibonacci(1) === 1)
console.assert(tailRecursiveFibonacci(1) === 1)

console.assert(imperativeFibonacci(8) === 21)
console.assert(recursiveFibonacci(8) === 21)
console.assert(tailRecursiveFibonacci(8) === 21)
