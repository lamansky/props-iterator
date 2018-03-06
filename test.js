'use strict'

const assert = require('assert')
const isIterator = require('is-iterator')
const props = require('.')

describe('propsIterator()', function () {
  it('should return an iterator', function () {
    assert(isIterator(props({})))
  })

  it('should iterate an object’s own properties', function () {
    assert(Array.from(props({key: 'value'})).some(([k, v]) => k === 'key' && v === 'value'))
  })

  it('should iterate an object’s inherited properties', function () {
    assert(Array.from(props({key: 'value'})).some(([k]) => k === 'toString'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(!Array.from(props({key: 'value'}, {own: true})).some(([k]) => k === 'toString'))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'value'}
    Object.defineProperty(obj, 'key', {value: 'value', enumerable: false})
    assert(Array.from(props(obj)).some(([k, v]) => k === 'key' && v === 'value'))
    assert(!Array.from(props(obj, {enumOnly: true})).some(([k]) => k === 'key'))
  })

  it('should support the bind operator', function () {
    assert(Array.from(props.call({key: 'value'})).some(([k, v]) => k === 'key' && v === 'value'))
  })
})
