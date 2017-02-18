import HTMLElement from './HTMLElement';

export default class TextareaEditor extends HTMLElement {

	/**
	 * Represents TextareaEditor
	 *
	 * @constructor
	 * @param {String} className
	 * @param {Element} parent
	 */
	constructor(className, parent) {
		super('textarea', className, parent);
	}

	/**
	 * Get the initialized editor element
	 *
	 * @returns {Element} - element of the editor
	 */
	get getEditor() {
		return this.element;
	}

	/**
	 * Get the content of the editor
	 *
	 * @returns {String} - the content of editor
	 */
	getContent() {
		return this.element.value;
	}

	/**
	 * Set the content of the editor
	 *
	 * @param {String} content - content for the editor
	 */
	setContent(content) {
		this.element.value = content;
	}

	/**
	 * Alternative for getContent()
	 * @see getContent
	 *
	 * @returns {String} - the content of editor
	 */
	getMarkdown() {
		return this.getContent();
	}

	/**
	 * Alternative for setContent()
	 * @see setContent
	 *
	 * @param {String} markdown - content for the editor
	 */
	setMarkdown(markdown) {
		this.setContent(markdown);
	}

	/**
	 * Append the given value to the content of the editor
	 *
	 * @param {String} content - additional content for the editor
	 */
	appendContent(content) {
		this.element.value = this.editor.value + content;
	}

	/**
	 * Prepend the given value to the content of the editor
	 *
	 * @param {String} content - additional content for the editor
	 */
	prependContent(content) {
		this.element.value = content + this.editor.value;
	}

	/**
	 * Refresh preview automatically if the editor content is changed
	 *
	 * @param {Element|Array} element - contains the compiled html content
	 * @param {Converter} converter - converts the markdown to html
	 */
	convertMarkdownToHtmlEventListener(element, converter) {
		this.addEventListener('input', () => {
			const html = converter.makeHtml(this.getContent());
			if (element instanceof Array) {
				for (const e of element) {
					e.innerHTML = html;
				}
			} else {
				element.innerHTML = html;
			}
		});
	}

	/**
	 * Copy content of editor to hidden input automatically
	 *
	 * @param {Element} element - this element gets the content of the editor
	 */
	copyMarkdownContentToHiddenInputEventListener(element) {
		this.addEventListener('input', () => { element.innerHTML = this.getContent(); });
	}

	/**
	 *
	 * @returns {string}
	 */
	getSelectedContent() {
		const start = this.element.selectionStart;
		const end = this.element.selectionEnd;
		return this.element.value.substring(start, end);
	}

	/**
	 *
	 * @param content
	 */
	setSelectedContent(content) {
		const start = this.element.selectionStart;
		const end = this.element.selectionEnd;
		this.element.value =
			this.element.value.substring(0, start)
			+ content
			+ this.element.value.substring(end);
	}

	/**
	 *
	 * @returns {Number}
	 */
	getCursorPosition() {
		return this.element.selectionStart;
	}

	/**
	 *
	 * @param {Number} position
	 */
	setCursorPosition(position) {
		this.element.selectionStart = position;
		this.element.selectionEnd = position;
	}

	/**
	 * Process the content by triggering the input event
	 */
	processContent() {
		const e = new Event('input');
		this.element.dispatchEvent(e);
	}
}
