import type { Pointer } from '../pointer';
import type { Prism } from './Interface';
export default function iterateAndCountTicks<V>(pointerOrPrism: Prism<V> | Pointer<V>): Generator<{
    value: V;
    ticks: number;
}, void, void>;
//# sourceMappingURL=iterateAndCountTicks.d.ts.map