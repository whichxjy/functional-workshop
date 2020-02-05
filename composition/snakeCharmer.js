'use strict'

const { pipeline } = require('./pipeline.js')
const { count, head, tail } = require('../arrayHelpers.js')
const { map } = require('../higher-order/filterMapReduce.js')

// TODO Define reusable, single-argument functions for pipelining here

const splitByUnderscore = (str) => str.split('_')

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)
const capitalizeAll = (strArr) => map(capitalize, strArr)
const capitalizeTail = (strArr) => {
  if (count(strArr) === 0) {
    return []
  } else {
    return [head(strArr)].concat(capitalizeAll(tail(strArr)))
  }
}

const createJoiner = (separator) => (strArr) => strArr.join(separator)
const joinWithNothing = createJoiner('')
const joinWithHyphen = createJoiner('-')

const snakeToCamel = pipeline(splitByUnderscore, capitalizeTail, joinWithNothing)
const snakeToTrain = pipeline(splitByUnderscore, capitalizeAll, joinWithHyphen)

module.exports = { snakeToCamel, snakeToTrain }
