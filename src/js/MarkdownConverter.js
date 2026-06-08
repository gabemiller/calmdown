import { Marked } from 'marked';
import SyntaxHighlighter from './SyntaxHighlighter';

export default class MarkdownConverter {

	/**
	 * Represents MarkdownConverter
	 */
	constructor() {
		// Own marked instance (GitHub-flavored markdown is on by default)
		// so global marked state is left untouched.
		this.converter = new Marked({ gfm: true });
		this.codeHighlighter = new SyntaxHighlighter().getHighlighter;
	}

	/**
	 * Get the markdown converter
	 *
	 * @returns {Marked} - marked markdown converter
	 */
	get getConverter() {
		return this.converter;
	}

	/**
	 * Generate html from the markdown
	 *
	 * @param {String} markdown - markdown from the editor
	 * @returns {String} - the generated html
	 */
	makeHtml(markdown) {
		const html = this.converter.parse(markdown);
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