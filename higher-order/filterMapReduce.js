'use strict'

// NOTE: The functions in this module are for educational purposes, not high-performance production use!

const { count, head, tail } = require('../arrayHelpers.js')

const filter = (predicateFn, array) => {
  if (count(array) === 0) {
    return []
  } else if (predicateFn(head(array))) {
    return [head(array)].concat(filter(predicateFn, tail(array)))
  } else {
    return filter(predicateFn, tail(array))
  }
}

const map = (mappingFn, array) => {
  if (count(array) === 0) {
    return []
  } else {
    return [mappingFn(head(array))].concat(map(mappingFn, tail(array)))
  }
}

const reduce = (reducerFn, initialValue, array) => {
  // TODO
  // NOTE: many reduce implementations treat the initialValue argument as optional - here we'll require it, for simplicity
  if (count(array) === 0) {
    return initialValue
  } else {
    return reduce(reducerFn, reducerFn(initialValue, head(array)), tail(array))
  }
}

module.exports = { filter, map, reduce }
