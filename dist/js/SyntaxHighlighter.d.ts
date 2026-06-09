import type { HLJSApi } from 'highlight.js';
export default class SyntaxHighlighter {
    private readonly highlighter;
    constructor();
    /**
     * @returns the highlight.js instance
     */
    get getHighlighter(): HLJSApi;
}
