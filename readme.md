# all-property-names [![Build Status](https://travis-ci.org/sindresorhus/all-property-names.svg?branch=master)](https://travis-ci.org/sindresorhus/all-property-names)

> Get all property names of an object including non-enumerable and inherited ones

Like [`Reflect.ownKeys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) but traverses up the prototype-chain.


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

### allPropertyNames(input, [options])

Returns a `Set`.

#### input

Type: `Object`

#### options

Type: `Object`

##### includeObjectPrototype

Type: `boolean`<br>
Default: `true`

Include `Object.prototype` properties like `isPrototypeOf`.

##### includeSymbols

Type: `boolean`<br>
Default: `true`

Include [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keys.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
