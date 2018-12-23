'use strict';

module.exports = (object, options) => {
	options = Object.assign({
		includeObjectPrototype: true,
		includeSymbols: true
	}, options);

	const getFn = options.includeSymbols ? Reflect.ownKeys : Object.getOwnPropertyNames;
	const props = new Set();

	do {
		for (const key of getFn(object)) {
			props.add(key);
		}
	} while ((object = Object.getPrototypeOf(object)) && (options.includeObjectPrototype || object !== Object.prototype));

	return props;
};
