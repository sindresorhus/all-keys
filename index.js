'use strict';

module.exports = (object, options) => {
	options = Object.assign({
		includeObjectPrototype: true
	}, options);

	const props = new Set();

	do {
		for (const key of Object.getOwnPropertyNames(object)) {
			props.add(key);
		}
	} while ((object = Object.getPrototypeOf(object)) && (options.includeObjectPrototype || object !== Object.prototype));

	return props;
};
