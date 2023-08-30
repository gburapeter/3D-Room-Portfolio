interface Node<Data> {
    next: undefined | Node<Data>;
    data: Data;
}
/**
 * Just a simple LinkedList
 */
export default class Stack<Data> {
    _head: undefined | Node<Data>;
    constructor();
    peek(): Data | undefined;
    pop(): Data | undefined;
    push(data: Data): void;
}
export {};
//# sourceMappingURL=Stack.d.ts.map