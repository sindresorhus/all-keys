# all-property-names [![Build Status](https://travis-ci.org/sindresorhus/all-property-names.svg?branch=master)](https://travis-ci.org/sindresorhus/all-property-names)

> Get all property names of an object including non-enumerable and inherited ones

Like [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) but traverses up the prototype-chain.


## Install

```
$ npm install all-property-names
```


## Usage

```js
const allPropertyNames = require('all-property-names');

Object.getOwnPropertyNames(Symbol.prototype);
/*
[
	'constructor',
	'toString',
	'valueOf'
]
*/

allPropertyNames(Symbol.prototype);
/*
Set {
	'constructor',
	'toString',
	'valueOf',
	'toLocaleString',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'__defineGetter__',
	'__lookupGetter__',
	'__defineSetter__',
	'__lookupSetter__',
	'__proto__'
}
*/
```


## API

### allPropertyNames(input)

Returns a `Set`.

#### input

Type: `Object`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
