import test from 'ava';
import m from '.';

test(t => {
	t.true(m(Symbol.prototype).has('propertyIsEnumerable'));
	t.true(m(Array.prototype).has('push'));
});
