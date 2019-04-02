'use strict';

const allKeys = (object, options) => {
	options = {
		includeObjectPrototype: true,
		includeSymbols: true,
		...options
	};

	const getKeys = options.includeSymbols ? Reflect.ownKeys : Object.getOwnPropertyNames;
	const properties = new Set();

	do {
		for (const key of getKeys(object)) {
			properties.add(key);
		}
	} while ((object = Object.getPrototypeOf(object)) && (options.includeObjectPrototype || object !== Object.prototype));

	return properties;
};

module.exports = allKeys;
// TODO: Remove this for the next major release
module.exports.default = allKeys;
