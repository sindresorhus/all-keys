import {expectType} from 'tsd-check';
import {LiteralUnion} from 'type-fest';
import allKeys from '.';

expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype)
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeObjectPrototype: false})
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeSymbols: false})
);
