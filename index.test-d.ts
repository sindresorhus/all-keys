import {expectType} from 'tsd';
import {LiteralUnion} from 'type-fest';
import allKeys from './index.js';

expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype)
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeObjectPrototype: false})
);
expectType<Set<LiteralUnion<'toString' | 'valueOf', string | number | symbol>>>(
	allKeys(Symbol.prototype, {includeSymbols: false})
);
