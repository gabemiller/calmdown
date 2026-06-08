// highlight.js "common" bundle: core + ~37 commonly used languages.
// Lighter than the full build and auto-detects languages, so there is no
// curated language list to maintain.
import hljs from 'highlight.js/lib/common';

export default class SyntaxHighlighter {
	/**
	 * @constructor
	 */
	constructor() {
		this.highlighter = hljs;
	}

	/**
	 *
	 * @returns {hljs} - syntax highlighter
	 */
	get getHighlighter() {
		return this.highlighter;
	}
}