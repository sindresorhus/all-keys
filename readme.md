# all-keys

> Get all property keys of an object including non-enumerable and inherited ones

Like [`Reflect.ownKeys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) but traverses up the prototype-chain.

## Install

```
$ npm install all-keys
```

## Usage

```js
import allKeys from 'all-keys';

Object.getOwnPropertyNames(Symbol.prototype);
/*
[
	'constructor',
	'toString',
	'valueOf'
]
*/

allKeys(Symbol.prototype);
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

### allKeys(object, options?)

Returns a `Set` of all property names from `object`.

#### object

Type: `object`

#### options

Type: `object`

##### includeObjectPrototype

Type: `boolean`\
Default: `true`

Include `Object.prototype` properties like `isPrototypeOf`.

##### includeSymbols

Type: `boolean`\
Default: `true`

Include [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keys.
