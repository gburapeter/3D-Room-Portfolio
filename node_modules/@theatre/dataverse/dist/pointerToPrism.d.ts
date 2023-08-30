import type { Prism } from './prism/Interface';
import type { Pointer, PointerType } from './pointer';
/**
 * Interface for objects that can provide a prism at a certain path.
 */
export interface PointerToPrismProvider {
    /**
     * Returns a prism of the value at the provided pointer.
     */
    pointerToPrism<P>(pointer: Pointer<P>): Prism<P>;
}
export declare function isPointerToPrismProvider(val: unknown): val is PointerToPrismProvider;
/**
 * Returns a prism of the value at the provided pointer. Prisms are
 * cached per pointer.
 *
 * @param pointer - The pointer to return the prism at.
 */
export declare const pointerToPrism: <P extends PointerType<any>>(pointer: P) => Prism<P extends PointerType<infer T> ? T : void>;
//# sourceMappingURL=pointerToPrism.d.ts.map