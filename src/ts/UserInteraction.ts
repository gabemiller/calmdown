type ModifierFlag = 'ctrlKey' | 'shiftKey' | 'altKey' | 'metaKey';

export type KeyboardCallback = (event: KeyboardEvent) => void;

interface ParsedCombo {
	ctrlKey: boolean;
	shiftKey: boolean;
	altKey: boolean;
	metaKey: boolean;
	code: string | null;
}

// Modifier token -> KeyboardEvent boolean property.
const MODIFIERS: Record<string, ModifierFlag> = {
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
const NAMED_KEYS: Record<string, string> = {
	tab: 'Tab',
	enter: 'Enter',
	space: 'Space',
	esc: 'Escape',
	escape: 'Escape',
};

/**
 * Map a single key token to its layout-independent KeyboardEvent.code.
 *
 * @param key - a single key token, e.g. 'b', '1', 'tab'
 * @returns the matching KeyboardEvent.code
 */
function keyToCode(key: string): string {
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
 * @param combo - the combo string
 */
function parseCombo(combo: string): ParsedCombo {
	const result: ParsedCombo = { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false, code: null };
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
 */
function matches(combo: ParsedCombo, event: KeyboardEvent): boolean {
	return event.code === combo.code
		&& event.ctrlKey === combo.ctrlKey
		&& event.shiftKey === combo.shiftKey
		&& event.altKey === combo.altKey
		&& event.metaKey === combo.metaKey;
}

export default class UserInteraction {

	private readonly target: Document | Element;

	/**
	 * @param element - element to scope key bindings to; defaults to the
	 *   whole document (global bindings)
	 */
	constructor(element: Element | null = null) {
		this.target = element || document;
	}

	/**
	 * Bind a combo to a callback on the given target.
	 *
	 * @param target - event target to bind on
	 * @param key - combo string, e.g. 'ctrl+b'
	 * @param callback - receives the KeyboardEvent
	 */
	bindKey(target: EventTarget, key: string, callback: KeyboardCallback): void {
		const combo = parseCombo(key);
		target.addEventListener('keydown', (event: Event) => {
			if (event instanceof KeyboardEvent && matches(combo, event)) {
				callback(event);
			}
		});
	}

	/**
	 * Bind a combo scoped to this instance's element.
	 */
	keyboardEvent(key: string, callback: KeyboardCallback): void {
		this.bindKey(this.target, key, callback);
	}

	/**
	 * Bind a combo globally (document level), firing regardless of focus.
	 */
	keyboardEventGlobal(key: string, callback: KeyboardCallback): void {
		this.bindKey(document, key, callback);
	}

}