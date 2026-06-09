import { Marked } from 'marked';
export default class MarkdownConverter {
    private readonly converter;
    private readonly codeHighlighter;
    constructor();
    /**
     * Get the markdown converter.
     */
    get getConverter(): Marked;
    /**
     * Generate html from the markdown.
     *
     * @param markdown - markdown from the editor
     * @returns the generated html
     */
    makeHtml(markdown: string): string;
    /**
     * Syntax highlight the <code> tags within the given html.
     *
     * @param html - the generated html
     * @returns the html with syntax highlight applied
     */
    addCodeHighlighting(html: string): string;
}
