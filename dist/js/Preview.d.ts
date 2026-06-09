import CdElement from './CdElement';
export default class Preview extends CdElement<HTMLElement> {
    constructor(className: string, parent: Node | null);
    /**
     * Get the preview element.
     */
    get getPreview(): HTMLElement;
}
