'use strict'

const test = require('tape')
const { snakeToCamel, snakeToTrain } = require('./snakeCharmer.js')

test('[snakeCharmer] snakeToCamel', (assert) => {
  assert.equal(snakeToCamel('super_cool_name'), 'superCoolName')
  assert.equal(snakeToCamel('functional_programming_rocks'), 'functionalProgrammingRocks')
  assert.end()
})

test('[snakeCharmer] snakeToTrain', (assert) => {
  assert.equal(snakeToTrain('super_cool_name'), 'Super-Cool-Name')
  assert.equal(snakeToTrain('functional_programming_rocks'), 'Functional-Programming-Rocks')
  assert.end()
})
