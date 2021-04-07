import {LiteralUnion} from 'type-fest';

export interface Options {
	/**
	Include `Object.prototype` properties like `isPrototypeOf`.

	@default true
	*/
	readonly includeObjectPrototype?: boolean;

	/**
	Include [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keys.

	@default true
	*/
	readonly includeSymbols?: boolean;
}

/**
Get all property keys of an object including non-enumerable and inherited ones. Like [Reflect.ownKeys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) but traverses up the prototype-chain.

@returns All property names from `object`.

@example
```
import allKeys from 'all-keys';

Object.getOwnPropertyNames(Symbol.prototype);
/*
[
	'constructor',
	'toString',
	'valueOf'
]
*\/

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
*\/
```
*/
export default function allKeys<ObjectType extends Record<string, any>>(
	object: ObjectType,
	options?: Options
): Set<LiteralUnion<keyof ObjectType, string | number | symbol>>;
