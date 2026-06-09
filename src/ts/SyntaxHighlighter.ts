// highlight.js "common" bundle: core + ~37 commonly used languages.
// Lighter than the full build and auto-detects languages, so there is no
// curated language list to maintain.

import type { HLJSApi } from 'highlight.js';
import hljs from 'highlight.js/lib/common';

export default class SyntaxHighlighter {
	private readonly highlighter: HLJSApi;

	constructor() {
		this.highlighter = hljs;
	}

	/**
	 * @returns the highlight.js instance
	 */
	get getHighlighter(): HLJSApi {
		return this.highlighter;
	}
}
