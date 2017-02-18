import HTMLElement from './HTMLElement';

export default class Preview extends HTMLElement {

	/**
	 * Represents Preview
	 *
	 * @constructor
	 * @param className
	 * @param parent
	 */
	constructor(className, parent) {
		super('div', className, parent);
	}

	/**
	 * Get the preview element
	 *
	 * @returns {Element} - the preview element
	 */
	get getPreview() {
		return this.element;
	}
}
