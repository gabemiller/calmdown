// Styles
import '../scss/calmdown.scss';

// Config
import CONFIG from './Config';

// Components
import ShowdownConverter from './ShowdownConverter';
import TextareaEditor from './TextareaEditor';
import Preview from './Preview';
import HTMLElement from './HTMLElement';
import UserInteraction from './UserInteraction';
import EditorUserInteraction from './EditorUserInteraction';
import HelpDialog from "./HelpDialog";

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
		this.initDefaultTheme();
		this.initDefaultLayout();
		this.initCodeHightlight();
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
	 * Initialize code higlighting
	 */
	initDefaultTheme() {
		this.calmdown.classList.add(this.settings.defaultThemeSelector);
	}

	/**
	 * Initialize code higlighting
	 */
	initDefaultLayout() {
		this.calmdown.classList.add(this.settings.defaultLayoutSelector);
	}

	/**
	 * Initialize code higlighting
	 */
	initCodeHightlight() {
		this.calmdown.classList.add(this.settings.codeHighlightStyle);
	}

	/**
	 * Initialize toolbar
	 */
	initToolbar() {
		this.toolbar = new HTMLElement('div', this.settings.bodySelector, this.calmdown).getElement;
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
				this.settings.height = `${(e.clientY - this.calmdown.offsetTop) + (this.resize.offsetHeight / 2)}px`;
				this.calmdown.style.height = this.settings.height;
			}
		});
		document.addEventListener('mouseup', (e) => {
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
	 * Initialize default value
	 */
	initDefaultContent(){
		const attributeContent = !this.calmdown.hasAttribute('data-cd-content') ? '' : this.calmdown.getAttribute('data-cd-content');
		const htmlContent = this.calmdown.textContent.length <= 0 ? '' : this.calmdown.textContent;
		const settingsContent = this.settings.defaultContent.length <= 0 ? '' : this.settings.defaultContent;

		if(htmlContent.length > 0){
			this.calmdown.textContent = '';
		}

		if(attributeContent.length > 0){
			this.content = attributeContent;
			if(htmlContent.length > 0){
				console.warn('Attribute data-cd-content is set. HTML content will be ignored!');
			}
			if(settingsContent.length > 0){
				console.warn('Attribute data-cd-content is set. Settings content will be ignored!');
			}
			return;
		}

		if(htmlContent.length > 0){
			this.content = htmlContent;
			if(settingsContent.length > 0){
				console.warn('HTML content is set. Settings content will be ignored!');
			}
			return;
		}

		this.content = settingsContent;
	}

	/**
	 * Initialize editor area
	 */
	initEditor() {
		this.editor = new TextareaEditor(this.settings.editorSelector, this.calmdown);
		this.editor.getEditor.value = this.content;
	}

	/**
	 * Initialize preview area
	 */
	initPreview() {
		this.preview = new Preview(this.settings.previewSelector, this.calmdown);
	}

	/**
	 * Initialize help dialog
	 */
	initHelpDialog(){
		this.helpDialog = new HelpDialog(this.settings.helpDialogSelector,this.calmdown);
	}

	/**
	 *
	 */
	initUserInteraction() {
		this.globalUserInteraction = new UserInteraction();
		this.editorUserInteraction = new EditorUserInteraction(this.editor);
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
			if(!this.calmdown.classList.contains(cdLayoutHelpDialog)){
				this.calmdown.classList.add(selectedLayout);
			}
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
