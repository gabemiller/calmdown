import type { HLJSApi } from 'highlight.js';
import { Marked } from 'marked';
import SyntaxHighlighter from './SyntaxHighlighter';

export default class MarkdownConverter {
	private readonly converter: Marked;
	private readonly codeHighlighter: HLJSApi;

	constructor() {
		// Own marked instance (GitHub-flavored markdown is on by default)
		// so global marked state is left untouched.
		this.converter = new Marked({ gfm: true });
		this.codeHighlighter = new SyntaxHighlighter().getHighlighter;
	}

	/**
	 * Get the markdown converter.
	 */
	get getConverter(): Marked {
		return this.converter;
	}

	/**
	 * Generate html from the markdown.
	 *
	 * @param markdown - markdown from the editor
	 * @returns the generated html
	 */
	makeHtml(markdown: string): string {
		// `async: false` selects marked's synchronous string overload.
		const html = this.converter.parse(markdown, { async: false });
		return this.addCodeHighlighting(html);
	}

	/**
	 * Syntax highlight the <code> tags within the given html.
	 *
	 * @param html - the generated html
	 * @returns the html with syntax highlight applied
	 */
	addCodeHighlighting(html: string): string {
		const div = document.createElement('div');
		div.innerHTML = html;
		const codeList = div.getElementsByTagName('code');
		for (let i = 0; i < codeList.length; i++) {
			this.codeHighlighter.highlightElement(codeList[i]);
		}
		return div.innerHTML;
	}
}
