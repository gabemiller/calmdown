import Prism from 'prismjs';
import './SyntaxHighligherLanguages';

export default class SyntaxHighlighter {
	/**
	 * @constructor
	 */
	constructor() {
		this.highlighter = Prism;
	}

	/**
	 *
	 * @returns {Prism} - syntax highlighter
	 */
	get getHighlighter() {
		return this.highlighter;
	}
}
