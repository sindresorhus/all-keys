import test from 'ava';
import allPropertyNames from '.';

test('main', t => {
	t.true(allPropertyNames(Symbol.prototype).has('propertyIsEnumerable'));
	t.true(allPropertyNames(Array.prototype).has('push'));
});

test('includeObjectPrototype option', t => {
	class Fixture {
		foo() {}
	}

	t.is(allPropertyNames(Fixture.prototype, {includeObjectPrototype: false}).size, 2);
	t.false(allPropertyNames(Fixture.prototype, {includeObjectPrototype: false}).has('isPrototypeOf'));
	t.true(allPropertyNames(Fixture.prototype).size > 2);
	t.true(allPropertyNames(Fixture.prototype).has('isPrototypeOf'));
});

test('includeSymbols option', t => {
	const fixtureSymbol = Symbol('fixture');

	class Fixture {
		[fixtureSymbol]() {}
	}

	t.false(allPropertyNames(Fixture.prototype, {includeSymbols: false}).has(fixtureSymbol));
	t.true(allPropertyNames(Fixture.prototype).has(fixtureSymbol));
});
