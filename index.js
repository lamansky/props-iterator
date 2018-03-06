'use strict'

const ownAll = require('own-all')
const ownEntries = require('own-entries')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator((obj, {own, enumOnly} = {}) => (enumOnly ? Object.entries : ownEntries)(own ? obj : ownAll(obj))[Symbol.iterator]())
