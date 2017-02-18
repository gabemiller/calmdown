import UserInteraction from './UserInteraction';

export default class EditorUserInteraction extends UserInteraction {

	/**
	 * Represents EditorUserInteraction
	 *
	 * @constructor
	 * @param {TextareaEditor} editor
	 */
	constructor(editor) {
		super(editor.getEditor);
		this.editor = editor;
	}

	/**
	 *
	 * @param key
	 * @param prefix
	 * @param suffix
	 */
	insertKeyboardEvent(key, prefix = '', suffix = '') {
		this.keyboardEvent(key, (e) => {
			e.preventDefault();
			const actualPosition = this.editor.getCursorPosition();
			const value = this.editor.getSelectedContent();
			this.editor.setSelectedContent(prefix + value + suffix);

			const position =
				value.length === 0 ?
					actualPosition + prefix.length :
					actualPosition + (prefix + value + suffix).length;
			this.editor.setCursorPosition(position);

			this.editor.processContent();
		});
	}

}
