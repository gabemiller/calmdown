import CdElement from './CdElement';
import type MarkdownConverter from './MarkdownConverter';
export default class TextareaEditor extends CdElement<HTMLTextAreaElement> {
    constructor(className: string, parent: Node | null);
    /**
     * Get the editor element.
     */
    get getEditor(): HTMLTextAreaElement;
    /**
     * Get the content of the editor.
     */
    getContent(): string;
    /**
     * Set the content of the editor.
     */
    setContent(content: string): void;
    /**
     * Alternative for getContent().
     * @see getContent
     */
    getMarkdown(): string;
    /**
     * Alternative for setContent().
     * @see setContent
     */
    setMarkdown(markdown: string): void;
    /**
     * Append the given value to the content of the editor.
     */
    appendContent(content: string): void;
    /**
     * Prepend the given value to the content of the editor.
     */
    prependContent(content: string): void;
    /**
     * Refresh the preview automatically when the editor content changes.
     *
     * @param element - element(s) that receive the compiled html
     * @param converter - converts the markdown to html
     */
    convertMarkdownToHtmlEventListener(element: Element | Element[], converter: MarkdownConverter): void;
    /**
     * Copy the editor content to a hidden input automatically.
     *
     * @param element - element that receives the editor content
     */
    copyMarkdownContentToHiddenInputEventListener(element: Element): void;
    /**
     * Get the currently selected text.
     */
    getSelectedContent(): string;
    /**
     * Replace the current selection with the given content.
     */
    setSelectedContent(content: string): void;
    /**
     * Get the cursor position (selection start).
     */
    getCursorPosition(): number;
    /**
     * Set the cursor position (collapses the selection).
     */
    setCursorPosition(position: number): void;
    /**
     * Process the content by triggering the input event.
     */
    processContent(): void;
}
