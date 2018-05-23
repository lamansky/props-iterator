# props-iterator

Iterates all properties (owned and inherited) of an object.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i props-iterator
```

## API

The module exports a single function.

### Parameters

1. Bindable: `obj` (object): The object whose properties you want to iterate.
2. Object argument:
   * Optional: `own` (boolean): If set to `true`, only the object’s “[own](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)” properties are iterated. If omitted or if set to `false`, both owned and inherited properties are returned.
   * Optional: `enumOnly` (boolean): If set to `true`, only properties defined with the `enumerable` flag will be iterated.

### Return Value

An iterator that yields two-element key-value-pair arrays.

## Example

```javascript
const props = require('props-iterator')

const iter = props({key: 'value'}, {own: true})
iter.next().value // ['key', 'value']
iter.next().done // true
```

## Related

* [prop-entries](https://github.com/lamansky/prop-entries): Same as this module, except it returns an array.
* [entries-iterator](https://github.com/lamansky/entries-iterator): Supports more than just Objects.
