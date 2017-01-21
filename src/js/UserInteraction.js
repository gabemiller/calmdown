export class UserInteraction{

	/**
	 * Represents UserInteraction
	 *
	 * @constructor
	 * @param {TextareaEditor} editor
	 */
	constructor(editor){
		this._editor = editor;
	}

	/**
	 *
	 * @param key
	 * @param prefix
	 * @param value
	 * @param postfix
	 */
	addKeyDownInsertContent(key,prefix = '',postfix = ''){
		this._editor.addEventListener('keydown',(e)=>{
			if(UserInteraction.pressKey(key,e)){
				e.preventDefault();
				let actualPosition = this._editor.getCursorPosition();
				let value = this._editor.getSelectedContent();
				this._editor.setSelectedContent(prefix+value+postfix);
				if(value.length == 0){
					this._editor.setCursorPosition(actualPosition+prefix.length);
				} else {
					this._editor.setCursorPosition(actualPosition+(prefix+value+postfix).length);
				}
				this._editor.processContent();
			}
		});
	}

	/**
	 *
	 * @param keys
	 * @param event
	 * @returns {boolean}
	 */
	static pressKey(keys,event){
		let isPressed = true;
		for(let key of UserInteraction.parseKey(keys)){
			isPressed &= UserInteraction.isKeyPressed(key,event);
		}
		return isPressed;
	}

	/**
	 *
	 * @param key
	 * @returns {Array}
	 */
	static parseKey(key){
		return key.split('+');
	}

	/**
	 *
	 * @param key
	 * @param event
	 * @returns {boolean}
	 */
	static isKeyPressed(key,event){
		switch (key.toLowerCase()){
		case 'ctrl':
			return event.ctrlKey;
		case 'alt':
			return event.altKey;
		case 'shift':
			return event.shiftKey;
		case 'tab':
		case 'enter':
		case 'capslock':
		case 'backspace':
		case 'space':
			return event.code.toLowerCase() === key.toLowerCase();
		default:
			return event.code === 'Key'+key.toUpperCase();
		}
	}

}