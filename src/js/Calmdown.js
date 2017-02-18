import CONFIG from './Config';
import ShowdownConverter from './ShowdownConverter';
import TextareaEditor from './TextareaEditor';
import Preview from './Preview';
import HTMLElement from './HTMLElement';
import UserInteraction from './UserInteraction';
import EditorUserInteraction from './EditorUserInteraction';

export default class Calmdown {

	/**
	 * Represents Calmdown
	 *
	 * @constructor
	 * @param {Object} settings
	 */
	constructor(settings = {}) {
		this.setDefaults(settings);
		this.init();
	}

	/**
	 * Set the default values for the Calmdown properties
	 *
	 * @param {Object} settings
	 */
	setDefaults(settings) {
		this.settings = Object.assign(CONFIG, settings);
		this.calmdown = document.querySelector(`.${this.settings.selector}`);
		this.calmdown.style = `width: ${this.settings.width}; height: ${this.settings.height};`;
	}

	/**
	 * Initialize Calmdown
	 */
	init() {
		this.initCodeHightlight();
		this.initConverter();
		this.initBody();
		this.initResize();
		this.initEditor();
		this.initPreview();
		this.initHiddenHtmlInput();
		this.initHiddenMarkdownInput();
		this.initUserInteraction();
		this.initEventListeners();
		this.triggerEvents();
	}

	/**
	 * Initialize code higlighting
	 */
	initCodeHightlight() {
		this.calmdown.className += ` ${this.settings.codeHighlightStyle}`;
	}

	/**
	 * Initialize toolbar
	 */
	initToolbar() {
		this.toolbar = new HTMLElement('div', this.settings.bodySelector, this.calmdown).getElement;
	}

	/**
	 * Initialize body
	 */
	initBody() {
		this.calmdownBody = new HTMLElement('div', this.settings.bodySelector, this.calmdown).getElement;
	}

	/**
	 * Initialize resizer div
	 */
	initResize() {
		this.resize = new HTMLElement('div', 'cd-resize', this.calmdown).getElement;
		HTMLElement.create('span', 'cd-bars', this.resize);

		let isResizing = false;
		this.resize.addEventListener('mousedown', (e) => {
			e.preventDefault();
			isResizing = true;
		});
		document.addEventListener('mousemove', (e) => {
			if (isResizing) {
				this.calmdown.style.height = `${(e.clientY - this.calmdown.offsetTop) + (this.resize.offsetHeight / 2)}px`;
			}
		});
		this.resize.addEventListener('mouseup', (e) => {
			e.preventDefault();
			isResizing = false;
		});
	}

	/**
	 * Initialize hidden html input
	 *
	 * This textarea value can be sent through some http methods
	 * to the server for further processing.
	 */
	initHiddenHtmlInput() {
		if (this.settings.htmlInputSelector != null) {
			this.htmlInputElement = new HTMLElement('textarea',
				this.settings.htmlInputSelector,
				this.calmdown, {
					name: this.settings.htmlInputSelector,
					style: 'display: none;',
				}).getElement;
		}
	}

	/**
	 * Initialize hidden markdown input
	 *
	 * This textarea value can be sent through some http methods
	 * to the server for further processing.
	 */
	initHiddenMarkdownInput() {
		if (this.settings.markdownInputSelector != null) {
			this.markdownInputElement = new HTMLElement('textarea',
				this.settings.markdownInputSelector,
				this.calmdown, {
					name: this.settings.markdownInputSelector,
					style: 'display: none;',
				}).getElement;
		}
	}

	/**
	 * Initialize markdown converter
	 */
	initConverter() {
		this.converter = new ShowdownConverter();
	}

	/**
	 * Initialize editor area
	 */
	initEditor() {
		this.editor = new TextareaEditor(this.settings.editorSelector, this.calmdownBody);
		this.editor.getEditor.value = this.settings.defaultContent;
	}

	/**
	 *
	 */
	initUserInteraction() {
		this.globalUserInteraction = new UserInteraction();
		this.editorUserInteraction = new EditorUserInteraction(this.editor);
	}

	/**
	 * Initialize preview area
	 */
	initPreview() {
		this.preview = new Preview(this.settings.previewSelector, this.calmdownBody);
	}

	/**
	 * Initialize event listeners
	 */
	initEventListeners() {
		// Convert markdown to html
		this.editor.convertMarkdownToHtmlEventListener(
			[this.preview.getPreview, this.htmlInputElement],
			this.converter);

		// Copy markdown to hidden input
		// This is useful when you do not want to send data through AJAX
		this.editor.copyMarkdownContentToHiddenInputEventListener(this.markdownInputElement);

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
	 * Set the view to show editor or preview or both
	 */
	viewChangeEvents() {
		// Show editor and preview
		this.globalUserInteraction.keyboardEventGlobal('alt+1', (e) => {
			e.preventDefault();
			this.editor.getEditor.removeAttribute('style');
			this.preview.getPreview.removeAttribute('style');
			this.editor.getEditor.focus();
		});

		// Show only editor
		this.globalUserInteraction.keyboardEventGlobal('alt+2', (e) => {
			e.preventDefault();
			this.editor.getEditor.removeAttribute('style');
			this.preview.getPreview.removeAttribute('style');
			this.editor.getEditor.style.maxWidth = '100%';
			this.editor.getEditor.style.border = '0';
			this.editor.getEditor.focus();
			this.preview.getPreview.style.display = 'none';
		});

		// Show only preview
		this.globalUserInteraction.keyboardEventGlobal('alt+3', (e) => {
			e.preventDefault();
			this.editor.getEditor.removeAttribute('style');
			this.preview.getPreview.removeAttribute('style');
			this.editor.getEditor.style.display = 'none';
			this.preview.getPreview.style.maxWidth = '100%';
		});

		let fullsize = false;
		// Set calmdown full screen
		this.globalUserInteraction.keyboardEventGlobal('alt+enter', () => {
			if (!fullsize) {
				this.calmdown.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999';
				this.resize.style.display = 'none';
			} else {
				this.calmdown.style = `width: ${this.settings.width}; height: ${this.settings.height};`;
				this.resize.removeAttribute('style');
			}
			fullsize = !fullsize;
		});
	}

	/**
	 * Trigger the processing event
	 */
	triggerEvents() {
		this.editor.processContent();
	}

	/**
	 * Get the editor content
	 *
	 * @returns {String} -  the string value of the editor content
	 */
	getContent() {
		return this.editor.getContent();
	}

	/**
	 *  Set the editor content
	 *
	 * @param {String} content - the new value of the editor
	 */
	setContent(content) {
		this.editor.setContent(content);
		this.editor.processContent();
	}

}
