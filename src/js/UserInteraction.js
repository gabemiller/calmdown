import * as Mousetrap from 'mousetrap';

export class UserInteraction{

	/**
	 * Represents UserInteraction
	 *
	 * @constructor
	 * @param {TextareaEditor} editor
	 */
	constructor(editor){
		this._editor = editor;
		this._mousetrap = new Mousetrap.default(this._editor.getEditor);
	}

	/**
	 *
	 * @param key
	 * @param prefix
	 * @param suffix
	 */
	addKeyDownInsertContent(key,prefix = '',suffix = ''){

		this._mousetrap.bind(key, () => console.log(key));

		/*this._editor.addEventListener('keydown',(e)=>{
			if(UserInteraction.pressKey(key,e)){
				e.preventDefault();
				let actualPosition = this._editor.getCursorPosition();
				let value = this._editor.getSelectedContent();
				this._editor.setSelectedContent(prefix+value+suffix);
				if(value.length == 0){
					this._editor.setCursorPosition(actualPosition+prefix.length);
				} else {
					this._editor.setCursorPosition(actualPosition+(prefix+value+suffix).length);
				}
				this._editor.processContent();
			}
		});*/
	}

}