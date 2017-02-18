import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

export default class UserInteraction {

	/**
	 * Represents UserInteraction
	 *
	 * @constructor
	 * @param {Element} element
	 */
	constructor(element = null) {
		this.mousetrap = new Mousetrap(element);
	}

	/**
	 *
	 * @param key
	 * @param callback
	 */
	keyboardEvent(key, callback) {
		this.mousetrap.bind(key, callback);
	}

	/**
	 *
	 * @param key
	 * @param callback
	 */
	keyboardEventGlobal(key, callback) {
		this.mousetrap.bindGlobal(key, callback);
	}

}
