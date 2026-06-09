import CdElement from './CdElement';
import { type HelpCommand } from './lang/en';
export default class HelpDialog extends CdElement<HTMLElement> {
    constructor(className: string, parent: Node | null);
    /**
     * Get the help dialog element.
     */
    get getHelpDialog(): HTMLElement;
    /**
     * Initialize the help dialog contents.
     */
    initHelpDialogContent(): void;
    /**
     * Initialize the help dialog button.
     */
    initButton(button: string): void;
    /**
     * Initialize the help dialog title.
     */
    initTitle(title: string): void;
    /**
     * Initialize the help dialog command list.
     */
    initContent(content: HelpCommand[]): void;
}
