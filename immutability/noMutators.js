'use strict'

// instead of myArray.push(element)
const append = (element, array) => {
  // TODO return a new array with the new element at the end
  const newArray = array.slice()
  newArray.push(element)
  return newArray
}

// instead of myArray[index] = value
const update = (index, value, array) => {
  // TODO return a new copy of the array with the given value at index
  const newArray = array.slice()
  newArray[index] = value
  return newArray
}

// instead of myArray.pop();
const pop = (array) => {
  // TODO return a new array with the last old element removed
  return array.slice(0, array.length - 1)
}

module.exports = { append, update, pop }
