import type { Prism } from './prism/Interface';
import type { Pointer } from './pointer';
import type { PointerToPrismProvider } from './pointerToPrism';
/**
 * Wraps an object whose (sub)properties can be individually tracked.
 */
export default class Atom<State> implements PointerToPrismProvider {
    private _currentState;
    private readonly _rootScope;
    /**
     * Convenience property that gives you a pointer to the root of the atom.
     *
     * @remarks
     * Equivalent to `pointer({ root: thisAtom, path: [] })`.
     */
    readonly pointer: Pointer<State>;
    readonly prism: Prism<State>;
    constructor(initialState: State);
    /**
     * Sets the state of the atom.
     *
     * @param newState - The new state of the atom.
     */
    set(newState: State): void;
    get(): State;
    /**
     * Returns the value at the given pointer
     *
     * @param pointerOrFn - A pointer to the desired path. Could also be a function returning a pointer
     *
     * Example
     * ```ts
     * const atom = atom({ a: { b: 1 } })
     * atom.getByPointer(atom.pointer.a.b) // 1
     * atom.getByPointer((p) => p.a.b) // 1
     * ```
     */
    getByPointer<S>(pointerOrFn: Pointer<S> | ((p: Pointer<State>) => Pointer<S>)): S;
    /**
     * Gets the state of the atom at `path`.
     */
    private _getIn;
    reduce(fn: (state: State) => State): void;
    /**
     * Reduces the value at the given pointer
     *
     * @param pointerOrFn - A pointer to the desired path. Could also be a function returning a pointer
     *
     * Example
     * ```ts
     * const atom = atom({ a: { b: 1 } })
     * atom.reduceByPointer(atom.pointer.a.b, (b) => b + 1) // atom.get().a.b === 2
     * atom.reduceByPointer((p) => p.a.b, (b) => b + 1) // atom.get().a.b === 2
     * ```
     */
    reduceByPointer<S>(pointerOrFn: Pointer<S> | ((p: Pointer<State>) => Pointer<S>), reducer: (s: S) => S): void;
    /**
     * Sets the value at the given pointer
     *
     * @param pointerOrFn - A pointer to the desired path. Could also be a function returning a pointer
     *
     * Example
     * ```ts
     * const atom = atom({ a: { b: 1 } })
     * atom.setByPointer(atom.pointer.a.b, 2) // atom.get().a.b === 2
     * atom.setByPointer((p) => p.a.b, 2) // atom.get().a.b === 2
     * ```
     */
    setByPointer<S>(pointerOrFn: Pointer<S> | ((p: Pointer<State>) => Pointer<S>), val: S): void;
    private _checkUpdates;
    private _getOrCreateScopeForPath;
    private _onPointerValueChange;
    /**
     * Returns a new prism of the value at the provided path.
     *
     * @param pointer - The path to create the prism at.
     *
     * ```ts
     * const pr = atom({ a: { b: 1 } }).pointerToPrism(atom.pointer.a.b)
     * pr.getValue() // 1
     * ```
     */
    pointerToPrism<P>(pointer: Pointer<P>): Prism<P>;
}
//# sourceMappingURL=Atom.d.ts.map