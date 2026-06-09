// Config

import CdElement from './CdElement';
import CONFIG, { type CalmdownSettings } from './Config';
import EditorUserInteraction from './EditorUserInteraction';
import HelpDialog from './HelpDialog';
// Components
import MarkdownConverter from './MarkdownConverter';
import Preview from './Preview';
import TextareaEditor from './TextareaEditor';
import UserInteraction from './UserInteraction';

export type { CalmdownSettings } from './Config';

export default class Calmdown {
	private settings!: CalmdownSettings;
	private calmdown!: HTMLElement;
	private content!: string;
	private converter!: MarkdownConverter;
	private editor!: TextareaEditor;
	private preview!: Preview;
	private resize!: HTMLElement;
	private globalUserInteraction!: UserInteraction;
	private editorUserInteraction!: EditorUserInteraction;
	private htmlInputElement?: HTMLElement;
	private markdownInputElement?: HTMLElement;

	/**
	 * @param settings - partial configuration; missing keys fall back to CONFIG
	 */
	constructor(settings: Partial<CalmdownSettings> = {}) {
		this.setDefaults(settings);
		this.init();
	}

	/**
	 * Merge the given settings over the defaults and resolve the root element.
	 */
	setDefaults(settings: Partial<CalmdownSettings>): void {
		this.settings = Object.assign(CONFIG, settings);
		this.calmdown = document.querySelector<HTMLElement>(`.${this.settings.selector}`)!;
		this.calmdown.setAttribute(
			'style',
			`width: ${this.settings.width}; height: ${this.settings.height};`,
		);
	}

	/**
	 * Initialize Calmdown.
	 */
	init(): void {
		this.initDefaultTheme();
		this.initDefaultLayout();
		this.initConverter();
		this.initDefaultContent();
		this.initResize();
		this.initEditor();
		this.initPreview();
		this.initHiddenHtmlInput();
		this.initHiddenMarkdownInput();
		this.initHelpDialog();
		this.initUserInteraction();
		this.initEventListeners();
		this.triggerEvents();
	}

	/**
	 * Apply the default theme class.
	 */
	initDefaultTheme(): void {
		this.calmdown.classList.add(this.settings.defaultThemeSelector);
	}

	/**
	 * Apply the default layout class.
	 */
	initDefaultLayout(): void {
		this.calmdown.classList.add(this.settings.defaultLayoutSelector);
	}

	/**
	 * Initialize the resizer handle.
	 */
	initResize(): void {
		this.resize = new CdElement('div', 'cd-resize', this.calmdown).getElement;
		CdElement.create('span', 'cd-bars', this.resize);

		let isResizing = false;
		this.resize.addEventListener('mousedown', (e) => {
			e.preventDefault();
			isResizing = true;
		});
		document.addEventListener('mousemove', (e) => {
			if (isResizing) {
				this.settings.height = `${e.clientY - this.calmdown.offsetTop + this.resize.offsetHeight / 2}px`;
				this.calmdown.style.height = this.settings.height;
			}
		});
		document.addEventListener('mouseup', (e) => {
			e.preventDefault();
			isResizing = false;
		});
	}

	/**
	 * Initialize the hidden html input. Its value can be posted to the server.
	 */
	initHiddenHtmlInput(): void {
		if (this.settings.htmlInputSelector != null) {
			this.htmlInputElement = new CdElement(
				'textarea',
				this.settings.htmlInputSelector,
				this.calmdown,
				{
					name: this.settings.htmlInputSelector,
					style: 'display: none;',
				},
			).getElement;
		}
	}

	/**
	 * Initialize the hidden markdown input. Its value can be posted to the server.
	 */
	initHiddenMarkdownInput(): void {
		if (this.settings.markdownInputSelector != null) {
			this.markdownInputElement = new CdElement(
				'textarea',
				this.settings.markdownInputSelector,
				this.calmdown,
				{
					name: this.settings.markdownInputSelector,
					style: 'display: none;',
				},
			).getElement;
		}
	}

	/**
	 * Initialize the markdown converter.
	 */
	initConverter(): void {
		this.converter = new MarkdownConverter();
	}

	/**
	 * Resolve the initial editor content (data attribute > html > settings).
	 */
	initDefaultContent(): void {
		const attributeContent = this.calmdown.getAttribute('data-cd-content') ?? '';
		const text = this.calmdown.textContent ?? '';
		const htmlContent = text.length <= 0 ? '' : text;
		const settingsContent =
			this.settings.defaultContent.length <= 0 ? '' : this.settings.defaultContent;

		if (htmlContent.length > 0) {
			this.calmdown.textContent = '';
		}

		if (attributeContent.length > 0) {
			this.content = attributeContent;
			if (htmlContent.length > 0) {
				console.warn('Attribute data-cd-content is set. HTML content will be ignored!');
			}
			if (settingsContent.length > 0) {
				console.warn('Attribute data-cd-content is set. Settings content will be ignored!');
			}
			return;
		}

		if (htmlContent.length > 0) {
			this.content = htmlContent;
			if (settingsContent.length > 0) {
				console.warn('HTML content is set. Settings content will be ignored!');
			}
			return;
		}

		this.content = settingsContent;
	}

	/**
	 * Initialize the editor area.
	 */
	initEditor(): void {
		this.editor = new TextareaEditor(this.settings.editorSelector, this.calmdown);
		this.editor.getEditor.value = this.content;
	}

	/**
	 * Initialize the preview area.
	 */
	initPreview(): void {
		this.preview = new Preview(this.settings.previewSelector, this.calmdown);
	}

	/**
	 * Initialize the help dialog.
	 */
	initHelpDialog(): void {
		// Constructed for its DOM side effects; the instance is not retained.
		new HelpDialog(this.settings.helpDialogSelector, this.calmdown);
	}

	/**
	 * Initialize the user-interaction (keyboard) handlers.
	 */
	initUserInteraction(): void {
		this.globalUserInteraction = new UserInteraction();
		this.editorUserInteraction = new EditorUserInteraction(this.editor);
	}

	/**
	 * Wire up the editor and keyboard event listeners.
	 */
	initEventListeners(): void {
		// Convert markdown to html
		this.editor.convertMarkdownToHtmlEventListener(
			[this.preview.getPreview, this.htmlInputElement!],
			this.converter,
		);

		// Copy markdown to hidden input
		// This is useful when you do not want to send data through AJAX
		this.editor.copyMarkdownContentToHiddenInputEventListener(this.markdownInputElement!);

		// Initialize insert keyboard events
		this.editorUserInteraction.insertKeyboardEvent('ctrl+b', '**', '**');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+i', '_', '_');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+u', '~~', '~~');
		this.editorUserInteraction.insertKeyboardEvent('tab', '\t');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+shift+i', '![', ']()');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+l', '[', ']()');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+k', '```', '\n```');
		this.editorUserInteraction.insertKeyboardEvent('ctrl+shift+k', '`', '`');

		// Initialize view change events
		this.viewChangeEvents();
	}

	/**
	 * Bind the keyboard shortcuts that switch between editor/preview/both,
	 * full screen, and the help dialog.
	 */
	viewChangeEvents(): void {
		let selectedLayout = this.settings.defaultLayoutSelector;
		const cdLayoutEditor = 'cd-layout-editor';
		const cdLayoutPreview = 'cd-layout-preview';
		const cdLayoutBoth = 'cd-layout-both';
		const cdLayoutFull = 'cd-layout-full';
		const cdLayoutHelpDialog = 'cd-layout-help-dialog';

		// Show editor and preview
		this.globalUserInteraction.keyboardEventGlobal('alt+1', (e) => {
			e.preventDefault();
			this.calmdown.classList.remove(cdLayoutHelpDialog);
			this.calmdown.classList.remove(cdLayoutEditor);
			this.calmdown.classList.remove(cdLayoutPreview);
			this.calmdown.classList.add(cdLayoutBoth);
			selectedLayout = cdLayoutBoth;
			this.editor.getEditor.focus();
		});

		// Show only editor
		this.globalUserInteraction.keyboardEventGlobal('alt+2', (e) => {
			e.preventDefault();
			this.calmdown.classList.remove(cdLayoutHelpDialog);
			this.calmdown.classList.remove(cdLayoutPreview);
			this.calmdown.classList.remove(cdLayoutBoth);
			this.calmdown.classList.add(cdLayoutEditor);
			selectedLayout = cdLayoutEditor;
			this.editor.getEditor.focus();
		});

		// Show only preview
		this.globalUserInteraction.keyboardEventGlobal('alt+3', (e) => {
			e.preventDefault();
			this.calmdown.classList.remove(cdLayoutHelpDialog);
			this.calmdown.classList.remove(cdLayoutBoth);
			this.calmdown.classList.remove(cdLayoutEditor);
			this.calmdown.classList.add(cdLayoutPreview);
			selectedLayout = cdLayoutPreview;
		});

		// Set calmdown full screen
		this.globalUserInteraction.keyboardEventGlobal('alt+enter', (e) => {
			e.preventDefault();
			this.calmdown.classList.toggle(cdLayoutFull);
		});

		// Show help dialog
		this.globalUserInteraction.keyboardEventGlobal('ctrl+h', (e) => {
			e.preventDefault();
			this.calmdown.classList.remove(cdLayoutBoth);
			this.calmdown.classList.remove(cdLayoutEditor);
			this.calmdown.classList.remove(cdLayoutPreview);
			this.calmdown.classList.toggle(cdLayoutHelpDialog);
			if (!this.calmdown.classList.contains(cdLayoutHelpDialog)) {
				this.calmdown.classList.add(selectedLayout);
			}
		});
	}

	/**
	 * Trigger the processing event.
	 */
	triggerEvents(): void {
		this.editor.processContent();
	}

	/**
	 * Get the editor content.
	 */
	getContent(): string {
		return this.editor.getContent();
	}

	/**
	 * Set the editor content.
	 */
	setContent(content: string): void {
		this.editor.setContent(content);
		this.editor.processContent();
	}
}
