import type Ticker from '../Ticker';
import type { VoidFn } from '../types';
/**
 * Common interface for prisms.
 */
export interface Prism<V> {
    /**
     * Whether the object is a prism.
     */
    isPrism: true;
    /**
     * Whether the prism is hot.
     */
    isHot: boolean;
    /**
     * Calls `listener` with a fresh value every time the prism _has_ a new value, throttled by Ticker.
     */
    onChange(ticker: Ticker, listener: (v: V) => void, immediate?: boolean): VoidFn;
    onStale(cb: () => void): VoidFn;
    /**
     * Keep the prism hot, even if there are no tappers (subscribers).
     */
    keepHot(): VoidFn;
    /**
     * Gets the current value of the prism. If the value is stale, it causes the prism to freshen.
     */
    getValue(): V;
}
/**
 * Returns whether `d` is a prism.
 */
export declare function isPrism(d: any): d is Prism<unknown>;
//# sourceMappingURL=Interface.d.ts.map