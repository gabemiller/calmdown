// Modifier token -> KeyboardEvent boolean property.
const MODIFIERS = {
	ctrl: 'ctrlKey',
	control: 'ctrlKey',
	shift: 'shiftKey',
	alt: 'altKey',
	option: 'altKey',
	meta: 'metaKey',
	cmd: 'metaKey',
	command: 'metaKey',
};

// Named (non-character) keys -> KeyboardEvent.code.
const NAMED_KEYS = {
	tab: 'Tab',
	enter: 'Enter',
	space: 'Space',
	esc: 'Escape',
	escape: 'Escape',
};

/**
 * Map a single key token to its layout-independent KeyboardEvent.code.
 *
 * @param {String} key - a single key token, e.g. 'b', '1', 'tab'
 * @returns {String} - the matching KeyboardEvent.code
 */
function keyToCode(key) {
	if (/^[a-z]$/.test(key)) {
		return `Key${key.toUpperCase()}`;
	}
	if (/^[0-9]$/.test(key)) {
		return `Digit${key}`;
	}
	return NAMED_KEYS[key] || key;
}

/**
 * Parse a combo string (e.g. 'ctrl+shift+i') into the modifier flags and
 * the target key code.
 *
 * @param {String} combo - the combo string
 * @returns {Object} - { ctrlKey, shiftKey, altKey, metaKey, code }
 */
function parseCombo(combo) {
	const result = { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false, code: null };
	combo.toLowerCase().split('+').forEach((rawPart) => {
		const part = rawPart.trim();
		if (MODIFIERS[part]) {
			result[MODIFIERS[part]] = true;
		} else if (part) {
			result.code = keyToCode(part);
		}
	});
	return result;
}

/**
 * Test whether a keydown event matches a parsed combo. Modifiers must match
 * exactly so e.g. ctrl+k and ctrl+shift+k stay distinct.
 *
 * @param {Object} combo - parsed combo
 * @param {KeyboardEvent} event - the keydown event
 * @returns {Boolean}
 */
function matches(combo, event) {
	return event.code === combo.code
		&& event.ctrlKey === combo.ctrlKey
		&& event.shiftKey === combo.shiftKey
		&& event.altKey === combo.altKey
		&& event.metaKey === combo.metaKey;
}

export default class UserInteraction {

	/**
	 * Represents UserInteraction
	 *
	 * @constructor
	 * @param {Element|null} element - element to scope key bindings to;
	 *   defaults to the whole document (global bindings)
	 */
	constructor(element = null) {
		this.target = element || document;
	}

	/**
	 * Bind a combo to a callback on the given target.
	 *
	 * @param {EventTarget} target
	 * @param {String} key - combo string, e.g. 'ctrl+b'
	 * @param {Function} callback - receives the KeyboardEvent
	 */
	bindKey(target, key, callback) {
		const combo = parseCombo(key);
		target.addEventListener('keydown', (event) => {
			if (matches(combo, event)) {
				callback(event);
			}
		});
	}

	/**
	 * Bind a combo scoped to this instance's element.
	 *
	 * @param {String} key
	 * @param {Function} callback
	 */
	keyboardEvent(key, callback) {
		this.bindKey(this.target, key, callback);
	}

	/**
	 * Bind a combo globally (document level), firing regardless of focus.
	 *
	 * @param {String} key
	 * @param {Function} callback
	 */
	keyboardEventGlobal(key, callback) {
		this.bindKey(document, key, callback);
	}

}