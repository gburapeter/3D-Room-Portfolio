import type { $IntentionalAny } from '../types';
/**
 * Useful in type tests, such as: const a: SomeType = _any
 */
export declare const _any: $IntentionalAny;
/**
 * Useful in typeTests. If you want to ensure that value v follows type V,
 * just write `expectType<V>(v)`
 */
export declare const expectType: <T extends unknown>(v: T) => T;
//# sourceMappingURL=typeTestUtils.d.ts.map