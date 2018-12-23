import test from 'ava';
import allPropertyNames from '.';

test('main', t => {
	t.true(allPropertyNames(Symbol.prototype).has('propertyIsEnumerable'));
	t.true(allPropertyNames(Array.prototype).has('push'));
});
