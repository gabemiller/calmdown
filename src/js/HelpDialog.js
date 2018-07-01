import HTMLElement from './HTMLElement';
import {EN} from './lang/en';

export default class HelpDialog extends HTMLElement {

	/**
	 * Represents Preview
	 *
	 * @constructor
	 * @param className
	 * @param parent
	 */
	constructor(className, parent) {
		super('div', className, parent);
		this.initHelpDialogContent();
	}

	/**
	 * Get the help dialog element
	 *
	 * @returns {Element} - the help dialog element
	 */
	get getHelpDialog() {
		return this.element;
	}

	/**
	 * Initialize Help Dialog
	 */
	initHelpDialogContent() {
		const {title, content, button} = EN.helpDialog;
		this.initTitle(title);
		this.initContent(content);
		this.initButton(button);
	}

	/**
	 * Initialize help dialog button
	 *
	 * @param button {@type String}
	 */
	initButton(button){
		const div = HTMLElement.create('div', 'cd-help-dialog-button', this.element.parentNode);
		div.element.innerHTML = `<span>?</span><span>${button}</span>`;
	}

	/**
	 * Initialize help dialog title
	 *
	 * @param title {@type String}
	 */
	initTitle(title) {
		const h2 = HTMLElement.create('h2', 'cd-help-dialog__title', this.element);
		h2.element.innerText = title;
	}

	/**
	 * Initialize help dialog content
	 *
	 * @param content {@type Object}
	 */
	initContent(content) {
		const ul = HTMLElement.create('ul', 'cd-help-dialog__command-list', this.element);

		content
			.forEach(command => {
				const li = HTMLElement.create('li',
					'cd-help-dialog__command-item cd-help-dialog__command-item--'+command.code.replace(/\+/g,'-'),
					ul.element);
				li.element.innerHTML = '<strong>' + command.code + '</strong> - ' + command.description;
			});
	}
}
