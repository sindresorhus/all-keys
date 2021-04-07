export default function allKeys(object, options = {}) {
	const {
		includeObjectPrototype = true,
		includeSymbols = true
	} = options;

	const getKeys = includeSymbols ? Reflect.ownKeys : Object.getOwnPropertyNames;
	const properties = new Set();

	do {
		for (const key of getKeys(object)) {
			properties.add(key);
		}
	} while ((object = Object.getPrototypeOf(object)) && (includeObjectPrototype || object !== Object.prototype)); // eslint-disable-line no-unmodified-loop-condition

	return properties;
}
