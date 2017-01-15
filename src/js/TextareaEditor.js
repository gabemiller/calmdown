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
	 * @param {Element} element - the element that will contain the compiled html content
	 * @param {Converter} converter - the converter that converts the markdown to html
	 * @param {highlight} highlighter - the highlighter that highlights the syntax in the code tags
	 */
	convertMarkdownToHtmlEventListener(element, converter, highlighter){
		this.addEventListener('input',()=>{
			element.innerHTML = converter.makeHtml(this.getContent());
			let preList = element.getElementsByTagName('pre');
			for (let i=0; i < preList.length; i++) {
				highlighter.highlightBlock(preList[i]);
			}
		});
	}
}