import test from 'ava';
import allPropertyNames from '.';

test('main', t => {
	t.true(allPropertyNames(Symbol.prototype).has('propertyIsEnumerable'));
	t.true(allPropertyNames(Array.prototype).has('push'));
});

test('includeObjectPrototype option', t => {
	class Foo {
		foo() {}
	}

	t.is(allPropertyNames(Foo.prototype, {includeObjectPrototype: false}).size, 2);
	t.not(allPropertyNames(Foo.prototype, {includeObjectPrototype: false}).has('isPrototypeOf'));
	t.true(allPropertyNames(Foo.prototype).size > 2);
	t.true(allPropertyNames(Foo.prototype).has('isPrototypeOf'));
});
