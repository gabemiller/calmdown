import * as Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

export class UserInteraction{

	/**
	 * Represents UserInteraction
	 *
	 * @constructor
	 * @param {Element} element
	 */
	constructor(element = null){
		this._mousetrap = new Mousetrap.default(element);
	}

	/**
	 *
	 * @param key
	 * @param callback
	 */
	keyboardEvent(key,callback){
		this._mousetrap.bind(key,callback);
	}

	/**
	 *
	 * @param key
	 * @param callback
	 */
	keyboardEventGlobal(key,callback){
		this._mousetrap.bindGlobal(key,callback);
	}

}