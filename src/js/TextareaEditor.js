import { HTMLElement } from './HTMLElement';

export class TextareaEditor extends HTMLElement{

	/**
	 * Represents TextareaEditor
	 *
	 * @constructor
	 * @param {String} className
	 * @param {Element} parent
	 */
	constructor(className,parent){
		super('textarea',className,parent);
	}

	/**
	 * Get the initialized editor element
	 *
	 * @returns {Element} - element of the editor
	 */
	get getEditor(){
		return this._element;
	}

	/**
	 * Get the content of the editor
	 *
	 * @returns {String} - the content of editor
	 */
	getContent(){
		return this._element.value;
	}

	/**
	 * Set the content of the editor
	 *
	 * @param {String} content - content for the editor
	 */
	setContent(content){
		this._element.value = content;
	}

	/**
	 * Alternative for getContent()
	 * @see getContent
	 *
	 * @returns {String} - the content of editor
	 */
	getMarkdown(){
		return this.getContent();
	}

	/**
	 * Alternative for setContent()
	 * @see setContent
	 *
	 * @param {String} markdown - content for the editor
	 */
	setMarkdown(markdown){
		this.setContent(markdown);
	}

	/**
	 * Append the given value to the content of the editor
	 *
	 * @param {String} content - additional content for the editor
	 */
	appendContent(content){
		this._element.value = this._editor.value + content;
	}

	/**
	 * Prepend the given value to the content of the editor
	 *
	 * @param {String} content - additional content for the editor
	 */
	prependContent(content){
		this._element.value = content + this._editor.value;
	}

	/**
	 * Refresh preview automatically if the editor content is changed
	 *
	 * @param {Element|Array} element - the element or array of elements that will contain the compiled html content
	 * @param {Converter} converter - the converter that converts the markdown to html
	 */
	convertMarkdownToHtmlEventListener(element, converter){
		this.addEventListener('input',()=>{
			let html = converter.makeHtml(this.getContent());
			if(element instanceof Array) {
				for(let e of element) {
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
	copyMarkdownContentToHiddenInputEventListener(element){
		this.addEventListener('input',() => element.innerHTML = this.getContent());
	}

	/**
	 * Process the content by triggering the input event
	 */
	processContent(){
		let e = new Event('input');
		this._element.dispatchEvent(e);
	}
}