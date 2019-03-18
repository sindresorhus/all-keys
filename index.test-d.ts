import {expectType} from 'tsd-check';
import allKeys from '.';
import {LiteralUnion} from 'type-fest';

expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype)
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeObjectPrototype: false})
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeSymbols: false})
);
