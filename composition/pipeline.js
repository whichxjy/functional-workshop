'use strict'

const { count, head, tail } = require('../arrayHelpers.js')
const { reduce } = require('../higher-order/filterMapReduce.js')

const pipeline = (...functions) => {
  if (count(functions) === 0) {
    return (input) => input
  } else if (count(functions) === 1) {
    return (input) => head(functions)(input)
  } else {
    return (input) => pipeline(...tail(functions))(head(functions)(input))
  }
}

const reducePipeline = (...functions) => {
  return (input) => reduce((acc, func) => func(acc), input, functions)
}

module.exports = { pipeline, reducePipeline }
