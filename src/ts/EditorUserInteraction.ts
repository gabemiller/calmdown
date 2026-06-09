import type TextareaEditor from './TextareaEditor';
import UserInteraction from './UserInteraction';

export default class EditorUserInteraction extends UserInteraction {
	private readonly editor: TextareaEditor;

	constructor(editor: TextareaEditor) {
		super(editor.getEditor);
		this.editor = editor;
	}

	/**
	 * Bind a combo that wraps the current selection with `prefix`/`suffix`
	 * (e.g. '**' … '**' for bold) and reprocesses the content.
	 */
	insertKeyboardEvent(key: string, prefix = '', suffix = ''): void {
		this.keyboardEvent(key, (e) => {
			e.preventDefault();
			const actualPosition = this.editor.getCursorPosition();
			const value = this.editor.getSelectedContent();
			this.editor.setSelectedContent(prefix + value + suffix);

			const position =
				value.length === 0
					? actualPosition + prefix.length
					: actualPosition + (prefix + value + suffix).length;
			this.editor.setCursorPosition(position);

			this.editor.processContent();
		});
	}
}
