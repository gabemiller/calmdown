import { UserInteraction } from'./UserInteraction';

export class EditorUserInteraction extends UserInteraction{

	/**
	 * Represents EditorUserInteraction
	 *
	 * @constructor
	 * @param {TextareaEditor} editor
	 */
	constructor(editor){
		super(editor.getEditor);
		this._editor = editor;
	}

	/**
	 *
	 * @param key
	 * @param prefix
	 * @param suffix
	 */
	insertKeyboardEvent(key, prefix = '', suffix = ''){
		this.keyboardEvent(key, (e,combo) => {
			e.preventDefault();
			let actualPosition = this._editor.getCursorPosition();
			let value = this._editor.getSelectedContent();
			this._editor.setSelectedContent(prefix+value+suffix);

			let position = value.length == 0 ? actualPosition+prefix.length : actualPosition+(prefix+value+suffix).length;
			this._editor.setCursorPosition(position);

			this._editor.processContent();
		});
	}

}