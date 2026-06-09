/**
 * Thin wrapper around a DOM element: creates an element, appends it to a
 * parent, then looks it back up by class name. Generic over the concrete
 * element type so subclasses (e.g. TextareaEditor) get precise typing.
 *
 * NB: named CdElement to avoid colliding with the global DOM `HTMLElement`.
 */
export default class CdElement<T extends Element = HTMLElement> {
    element: T;
    /**
     * @param type - html tag name
     * @param className - class name of the element
     * @param parent - parent the created element is appended to (or null)
     * @param params - additional properties to set on the created element
     */
    constructor(type: string, className: string, parent: Node | null, params?: Record<string, unknown>);
    /**
     * Create the element, append it to the parent, then resolve it from the DOM.
     */
    init(type: string, className: string, parent: Node | null, params: Record<string, unknown>): void;
    /**
     * Get the element.
     */
    get getElement(): T;
    /**
     * Set the element.
     */
    set setElement(element: T);
    /**
     * Resolve the element from the DOM by its class name.
     *
     * @param className - class name without the leading dot
     */
    setElementByClassName(className: string): void;
    /**
     * Add an event listener to the wrapped element.
     */
    addEventListener(event: string, callback: EventListenerOrEventListenerObject): void;
    /**
     * Create a new element of the given type, with class name and properties.
     */
    static createElement(type: string, className: string, params: Record<string, unknown>): HTMLElement;
    /**
     * Append the element to the parent as a child.
     */
    static appendElementToParent(element: Element, parent: Node): void;
    /**
     * Convenience factory returning a wrapped element.
     */
    static create(type: string, className: string, parent?: Node | null, params?: Record<string, unknown>): CdElement;
}
