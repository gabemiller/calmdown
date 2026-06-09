import CdElement from './CdElement';
import { EN, type HelpCommand } from './lang/en';

export default class HelpDialog extends CdElement<HTMLElement> {
	constructor(className: string, parent: Node | null) {
		super('div', className, parent);
		this.initHelpDialogContent();
	}

	/**
	 * Get the help dialog element.
	 */
	get getHelpDialog(): HTMLElement {
		return this.element;
	}

	/**
	 * Initialize the help dialog contents.
	 */
	initHelpDialogContent(): void {
		const { title, content, button } = EN.helpDialog;
		this.initTitle(title);
		this.initContent(content);
		this.initButton(button);
	}

	/**
	 * Initialize the help dialog button.
	 */
	initButton(button: string): void {
		const div = CdElement.create('div', 'cd-help-dialog-button', this.element.parentNode);
		div.element.innerHTML = `<span>?</span><span>${button}</span>`;
	}

	/**
	 * Initialize the help dialog title.
	 */
	initTitle(title: string): void {
		const h2 = CdElement.create('h2', 'cd-help-dialog__title', this.element);
		h2.element.innerText = title;
	}

	/**
	 * Initialize the help dialog command list.
	 */
	initContent(content: HelpCommand[]): void {
		const ul = CdElement.create('ul', 'cd-help-dialog__command-list', this.element);

		content.forEach((command) => {
			const li = CdElement.create(
				'li',
				`cd-help-dialog__command-item cd-help-dialog__command-item--${command.code.replace(/\+/g, '-')}`,
				ul.element,
			);
			li.element.innerHTML = `<strong>${command.code}</strong> - ${command.description}`;
		});
	}
}
