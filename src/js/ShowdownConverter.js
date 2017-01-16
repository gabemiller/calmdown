import * as showdown from 'showdown';
import { SyntaxHighlighter } from './SyntaxHighlighter';

export class ShowdownConverter{

	/**
	 * Represents ShowdownConverter
	 *
	 * @param {String} flavor - flavor of the converter
 	 */
	constructor(flavor = 'github'){
		this._converter = new showdown.Converter();
		this.setFlavor(flavor);
		this._codeHighlighter = new SyntaxHighlighter().getHighlighter;
	}

	/**
	 * Get the showdown converter
	 *
	 * @returns {showdown.Converter} - showdown markdown converter
	 */
	get getConverter(){
		return this._converter;
	}

	/**
	 * Set the flavor of the showdown converter
	 *
	 * @param {String} flavor - flavor of the converter
	 */
	setFlavor(flavor){
		this._converter.setFlavor(flavor);
	}

	/**
	 * Generate html from the markdown
	 *
	 * @param {String} markdown - markdown from the editor
	 * @returns {String} - the generated html
	 */
	makeHtml(markdown){
		let html = this._converter.makeHtml(markdown);
		return this._codeHighlighter == null ? html : this.addCodeHighlighting(html);
	}

	/**
	 * Get a syntax highlighted version of the given html code tags
	 *
	 * @param {String} html - the generated html
	 * @returns {String} - the generated html with syntax highlight
	 */
	addCodeHighlighting(html){
		let div = document.createElement('div');
		div.innerHTML = html;
		let codeList = div.getElementsByTagName('code');
		for (let i = 0; i < codeList.length; i++) {
			this._codeHighlighter.highlightElement(codeList[i]);
		}
		return div.innerHTML;
	}
}