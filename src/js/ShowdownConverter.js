import * as showdown from 'showdown';
import SyntaxHighlighter from './SyntaxHighlighter';

export default class ShowdownConverter {

	/**
	 * Represents ShowdownConverter
	 *
	 * @param {String} flavor - flavor of the converter
 	 */
	constructor(flavor = 'github') {
		this.converter = new showdown.Converter();
		this.setFlavor(flavor);
		this.codeHighlighter = new SyntaxHighlighter().getHighlighter;
	}

	/**
	 * Get the showdown converter
	 *
	 * @returns {showdown.Converter} - showdown markdown converter
	 */
	get getConverter() {
		return this.converter;
	}

	/**
	 * Set the flavor of the showdown converter
	 *
	 * @param {String} flavor - flavor of the converter
	 */
	setFlavor(flavor) {
		this.converter.setFlavor(flavor);
	}

	/**
	 * Generate html from the markdown
	 *
	 * @param {String} markdown - markdown from the editor
	 * @returns {String} - the generated html
	 */
	makeHtml(markdown) {
		const html = this.converter.makeHtml(markdown);
		return this.codeHighlighter == null ? html : this.addCodeHighlighting(html);
	}

	/**
	 * Get a syntax highlighted version of the given html code tags
	 *
	 * @param {String} html - the generated html
	 * @returns {String} - the generated html with syntax highlight
	 */
	addCodeHighlighting(html) {
		const div = document.createElement('div');
		div.innerHTML = html;
		const codeList = div.getElementsByTagName('code');
		for (let i = 0; i < codeList.length; i++) {
			this.codeHighlighter.highlightElement(codeList[i]);
		}
		return div.innerHTML;
	}
}
