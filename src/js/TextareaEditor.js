import { HTMLElement } from './HTMLElement';

export class TextareaEditor extends HTMLElement{

	constructor(className,parent){
		super('textarea',className,parent);
	}

	/**
	 * Get the initialized editor element
	 *
	 * @returns {Element|*} - element of the editor
	 */
	get getEditor(){
		return this._element;
	}

	/**
	 * Get the content of the editor
	 *
	 * @returns (String) - the content of editor
	 */
	getContent(){
		return this._element.value;
	}

	/**
	 * Set the content of the editor
	 *
	 * @param content (String) - content for the editor
	 */
	setContent(content){
		this._element.value = content;
	}

	/**
	 * Append the given value to the content of the editor
	 *
	 * @param content (String) - additional content for the editor
	 */
	appendContent(content){
		this._element.value = this._editor.value + content;
	}

	/**
	 * Prepend the given value to the content of the editor
	 *
	 * @param content (String) - additional content for the editor
	 */
	prependContent(content){
		this._element.value = content + this._editor.value;
	}

	/**
	 * Refresh preview automatically if the editor content is changed
	 *
	 * @param preview (Element) - the preview element that shows the compiled html content
	 * @param converter (Converter) - the converter that converts the markdown to html
	 */
	previewEventListener(preview, converter){
		this.addEventListener('input',()=>{
			preview.innerHTML = converter.makeHtml(this.getContent());
		});
	}
}