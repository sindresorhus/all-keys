'use strict';

module.exports = object => {
	const props = new Set();

	do {
		for (const key of Object.getOwnPropertyNames(object)) {
			props.add(key);
		}
	} while ((object = Object.getPrototypeOf(object)));

	return props;
};
