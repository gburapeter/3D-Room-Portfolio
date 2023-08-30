import type { Prism } from './prism/Interface';
import type { PointerType } from './pointer';
/**
 * Convenience function that returns a plain value from its argument, whether it
 * is a pointer, a prism or a plain value itself.
 *
 * @remarks
 * For pointers, the value is returned by first creating a prism, so it is
 * reactive e.g. when used in a `prism`.
 *
 * @param input - The argument to return a value from.
 */
export declare const val: <P extends Prism<any> | PointerType<any> | null | undefined>(input: P) => P extends PointerType<infer T> ? T : P extends Prism<infer T_1> ? T_1 : P extends null | undefined ? P : unknown;
//# sourceMappingURL=val.d.ts.map