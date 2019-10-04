import {LiteralUnion} from 'type-fest';

declare namespace allKeys {
	interface Options {
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
}

declare const allKeys: {
	/**
	Get all property keys of an object including non-enumerable and inherited ones. Like [Reflect.ownKeys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) but traverses up the prototype-chain.

	@returns All property names from `object`.

	@example
	```
	import allKeys = require('all-keys');

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
	<ObjectType extends {[key: string]: any}>(
		object: ObjectType,
		options?: allKeys.Options
	): Set<LiteralUnion<keyof ObjectType, string | number | symbol>>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function allKeys<ObjectType extends {[key: string]: any}>(
	// 	object: ObjectType,
	// 	options?: allKeys.Options
	// ): Set<LiteralUnion<keyof ObjectType, string | number | symbol>>;
	// export = allKeys;
	default: typeof allKeys;
};

export = allKeys;
