'use strict';
module.exports = obj => {
	const props = new Set();

	do {
		for (const key of Object.getOwnPropertyNames(obj)) {
			props.add(key);
		}
	} while ((obj = Object.getPrototypeOf(obj)));

	return props;
};
