import CdElement from './CdElement';
import type MarkdownConverter from './MarkdownConverter';

export default class TextareaEditor extends CdElement<HTMLTextAreaElement> {
	constructor(className: string, parent: Node | null) {
		super('textarea', className, parent);
	}

	/**
	 * Get the editor element.
	 */
	get getEditor(): HTMLTextAreaElement {
		return this.element;
	}

	/**
	 * Get the content of the editor.
	 */
	getContent(): string {
		return this.element.value;
	}

	/**
	 * Set the content of the editor.
	 */
	setContent(content: string): void {
		this.element.value = content;
	}

	/**
	 * Alternative for getContent().
	 * @see getContent
	 */
	getMarkdown(): string {
		return this.getContent();
	}

	/**
	 * Alternative for setContent().
	 * @see setContent
	 */
	setMarkdown(markdown: string): void {
		this.setContent(markdown);
	}

	/**
	 * Append the given value to the content of the editor.
	 */
	appendContent(content: string): void {
		this.element.value = this.element.value + content;
	}

	/**
	 * Prepend the given value to the content of the editor.
	 */
	prependContent(content: string): void {
		this.element.value = content + this.element.value;
	}

	/**
	 * Refresh the preview automatically when the editor content changes.
	 *
	 * @param element - element(s) that receive the compiled html
	 * @param converter - converts the markdown to html
	 */
	convertMarkdownToHtmlEventListener(
		element: Element | Element[],
		converter: MarkdownConverter,
	): void {
		this.addEventListener('input', () => {
			const html = converter.makeHtml(this.getContent());
			if (Array.isArray(element)) {
				for (const e of element) {
					e.innerHTML = html;
				}
			} else {
				element.innerHTML = html;
			}
		});
	}

	/**
	 * Copy the editor content to a hidden input automatically.
	 *
	 * @param element - element that receives the editor content
	 */
	copyMarkdownContentToHiddenInputEventListener(element: Element): void {
		this.addEventListener('input', () => {
			element.innerHTML = this.getContent();
		});
	}

	/**
	 * Get the currently selected text.
	 */
	getSelectedContent(): string {
		const start = this.element.selectionStart;
		const end = this.element.selectionEnd;
		return this.element.value.substring(start, end);
	}

	/**
	 * Replace the current selection with the given content.
	 */
	setSelectedContent(content: string): void {
		const start = this.element.selectionStart;
		const end = this.element.selectionEnd;
		this.element.value =
			this.element.value.substring(0, start) + content + this.element.value.substring(end);
	}

	/**
	 * Get the cursor position (selection start).
	 */
	getCursorPosition(): number {
		return this.element.selectionStart;
	}

	/**
	 * Set the cursor position (collapses the selection).
	 */
	setCursorPosition(position: number): void {
		this.element.selectionStart = position;
		this.element.selectionEnd = position;
	}

	/**
	 * Process the content by triggering the input event.
	 */
	processContent(): void {
		const e = new Event('input');
		this.element.dispatchEvent(e);
	}
}
