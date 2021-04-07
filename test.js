import test from 'ava';
import allKeys from './index.js';

test('main', t => {
	t.true(allKeys(Symbol.prototype).has('propertyIsEnumerable'));
	t.true(allKeys(Array.prototype).has('push'));
});

test('includeObjectPrototype option', t => {
	class Fixture {
		foo() {}
	}

	t.is(allKeys(Fixture.prototype, {includeObjectPrototype: false}).size, 2);
	t.false(allKeys(Fixture.prototype, {includeObjectPrototype: false}).has('isPrototypeOf'));
	t.true(allKeys(Fixture.prototype).size > 2);
	t.true(allKeys(Fixture.prototype).has('isPrototypeOf'));
});

test('includeSymbols option', t => {
	const fixtureSymbol = Symbol('fixture');

	class Fixture {
		[fixtureSymbol]() {}
	}

	t.false(allKeys(Fixture.prototype, {includeSymbols: false}).has(fixtureSymbol));
	t.true(allKeys(Fixture.prototype).has(fixtureSymbol));
});
