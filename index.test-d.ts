import {expectAssignable} from 'tsd';
import {LiteralUnion} from 'type-fest';
import allKeys from './index.js';

expectAssignable<Set<LiteralUnion<'toString' | 'valueOf', PropertyKey>>>(
	allKeys(Symbol.prototype)
);
expectAssignable<Set<LiteralUnion<'toString' | 'valueOf', PropertyKey>>>(
	allKeys(Symbol.prototype, {includeObjectPrototype: false})
);
expectAssignable<Set<LiteralUnion<'toString' | 'valueOf', PropertyKey>>>(
	allKeys(Symbol.prototype, {includeSymbols: false})
);
