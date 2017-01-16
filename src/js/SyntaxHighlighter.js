import * as Prism from 'prismjs';
import './SyntaxHighligherLanguages';

export class SyntaxHighlighter{
	/**
	 * @constructor
	 */
	constructor(){
		this._highlighter = Prism;
	}

	/**
	 *
	 * @returns {Prism} - syntax highlighter
	 */
	get getHighlighter(){
		return this._highlighter;
	}
}