import type { Pointer } from './pointer';
import type { Prism } from './prism/Interface';
import type { PointerToPrismProvider } from './pointerToPrism';
/**
 * Allows creating pointer-prisms where the pointer can be switched out.
 *
 * @remarks
 * This allows reacting not just to value changes at a certain pointer, but changes
 * to the proxied pointer too.
 */
export default class PointerProxy<O extends {}> implements PointerToPrismProvider {
    private readonly _currentPointerBox;
    /**
     * Convenience pointer pointing to the root of this PointerProxy.
     *
     * @remarks
     * Allows convenient use of {@link pointerToPrism} and {@link val}.
     */
    readonly pointer: Pointer<O>;
    constructor(currentPointer: Pointer<O>);
    /**
     * Sets the underlying pointer.
     * @param p - The pointer to be proxied.
     */
    setPointer(p: Pointer<O>): void;
    /**
     * Returns a prism of the value at the provided sub-path of the proxied pointer.
     *
     * @param path - The path to create the prism at.
     */
    pointerToPrism<P>(pointer: Pointer<P>): Prism<P>;
}
//# sourceMappingURL=PointerProxy.d.ts.map