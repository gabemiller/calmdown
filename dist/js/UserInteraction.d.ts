export type KeyboardCallback = (event: KeyboardEvent) => void;
export default class UserInteraction {
    private readonly target;
    /**
     * @param element - element to scope key bindings to; defaults to the
     *   whole document (global bindings)
     */
    constructor(element?: Element | null);
    /**
     * Bind a combo to a callback on the given target.
     *
     * @param target - event target to bind on
     * @param key - combo string, e.g. 'ctrl+b'
     * @param callback - receives the KeyboardEvent
     */
    bindKey(target: EventTarget, key: string, callback: KeyboardCallback): void;
    /**
     * Bind a combo scoped to this instance's element.
     */
    keyboardEvent(key: string, callback: KeyboardCallback): void;
    /**
     * Bind a combo globally (document level), firing regardless of focus.
     */
    keyboardEventGlobal(key: string, callback: KeyboardCallback): void;
}
