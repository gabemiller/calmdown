import { CONFIG } from './Config';
import { ShowdownConverter } from './ShowdownConverter';
import { TextareaEditor } from './TextareaEditor';
import { Preview } from './Preview';
import { HTMLElement } from './HTMLElement';

export default class Calmdown{

	/**
	 * Represents Calmdown
	 *
	 * @constructor
	 * @param {Object} settings
	 */
	constructor(settings = {}){
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
	init(){
		this.initCodeHightlight();
		this.initConverter();
		this.initBody();
		this.initResize();
		this.initEditor();
		this.initPreview();
		this.initHiddenHtmlInput();
		this.initHiddenMarkdownInput();
		this.initEventListeners();
		this.triggerEvents();
	}

	/**
	 * Initialize code higlighting
	 */
	initCodeHightlight(){
		this.calmdown.className += ` ${this.settings.codeHighlightStyle}`;
	}

	/**
	 * Initialize toolbar
	 */
	initToolbar(){
		this.toolbar = new HTMLElement('div', this.settings.bodySelector, this.calmdown).getElement;
	}

	/**
	 * Initialize body
	 */
	initBody(){
		this.calmdownBody = new HTMLElement('div', this.settings.bodySelector, this.calmdown).getElement;
	}

	/**
	 * Initialize resizer div
	 */
	initResize(){
		this.resize = new HTMLElement('div', 'cd-resize', this.calmdown).getElement;
		new HTMLElement('span','cd-bars',this.resize);

		let isResizing = false;
		let startY;
		this.resize.addEventListener('mousedown',(e)=>{
			e.preventDefault();
			isResizing = true;
		});
		document.addEventListener('mousemove',(e)=>{
			e.preventDefault();
			if(isResizing) {
				this.calmdown.style.height = (e.clientY - this.calmdown.offsetTop + 5.25)+'px';
			}
		});
		this.resize.addEventListener('mouseup',(e)=>{
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
	initHiddenHtmlInput(){
		if(this.settings.htmlInputSelector != null ) {
			this.htmlInputElement = new HTMLElement('textarea',
				this.settings.htmlInputSelector,
				this.calmdown, {
					name: this.settings.htmlInputSelector,
					style: 'display: none;'
				}).getElement;
		}
	}

	/**
	 * Initialize hidden markdown input
	 *
	 * This textarea value can be sent through some http methods
	 * to the server for further processing.
	 */
	initHiddenMarkdownInput(){
		if(this.settings.markdownInputSelector != null ) {
			this.markdownInputElement = new HTMLElement('textarea',
				this.settings.markdownInputSelector,
				this.calmdown, {
					name: this.settings.markdownInputSelector,
					style: 'display: none;'
				}).getElement;
		}
	}

	/**
	 * Initialize markdown converter
	 */
	initConverter(){
		this.converter = new ShowdownConverter();
	}

	/**
	 * Initialize editor area
	 */
	initEditor(){
		this.editor = new TextareaEditor(this.settings.editorSelector,this.calmdownBody);
		this.editor.getEditor.value = this.settings.defaultContent;
	}

	/**
	 * Initialize preview area
	 */
	initPreview(){
		this.preview = new Preview(this.settings.previewSelector,this.calmdownBody);
	}

	/**
	 * Initialize event listeners
	 */
	initEventListeners(){
		this.editor.convertMarkdownToHtmlEventListener([this.preview.getPreview,this.htmlInputElement],this.converter);
		this.editor.copyMarkdownContentToHiddenInputEventListener(this.markdownInputElement);
		this.editor.addKeyCommandsEventListener();
	}

	/**
	 *
	 */
	triggerEvents(){
		this.editor.processContent();
	}

	/**
	 * Get the editor content
	 *
	 * @returns {String} -  the string value of the editor content
	 */
	getContent(){
		return this.editor.getContent();
	}

	/**
	 *  Set the editor content
	 *
	 * @param {String} content - the new value of the editor
	 */
	setContent(content){
		this.editor.setContent(content);
		this.editor.processContent();
	}

}
