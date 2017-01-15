import * as showdown from 'showdown';

export class ShowdownConverter{

	/**
	 * Represents ShowdownConverter
	 *
	 * @param {String} flavor - flavor of the converter
	 * @default 'github'
 	 */
	constructor(flavor = 'github'){
		this._converter = new showdown.Converter();
		this.setFlavor(flavor);
	}

	/**
	 * Get the showdown converter
	 *
	 * @returns {showdown.Converter} - showdown markdown converter
	 */
	get getConverter(){
		return this._converter;
	}

	/**
	 * Set the flavor of the showdown converter
	 *
	 * @param {String} flavor - flavor of the converter
	 */
	setFlavor(flavor){
		this._converter.setFlavor(flavor);
	}
}