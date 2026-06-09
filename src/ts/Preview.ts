import CdElement from './CdElement';

export default class Preview extends CdElement<HTMLElement> {
	constructor(className: string, parent: Node | null) {
		super('div', className, parent);
	}

	/**
	 * Get the preview element.
	 */
	get getPreview(): HTMLElement {
		return this.element;
	}
}
