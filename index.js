'use strict'

const propEntries = require('prop-entries')
const sbo = require('sbo')

module.exports = sbo((...args) => propEntries(...args)[Symbol.iterator]())
