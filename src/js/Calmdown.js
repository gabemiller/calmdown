import { Config } from './Config';
import { ShowdownConverter } from './ShowdownConverter';
import { TextareaEditor } from './TextareaEditor';
import { Preview } from './Preview';
import { HTMLElement } from './HTMLElement';

export default class Calmdown{

	constructor(settings = {}){
		this.setDefaults();
		this.init();
	}

	/**
	 *
	 * @param settings
	 */
	setDefaults(settings){
		this.settings = Object.assign(Config.settings(), settings);
		this.calmdown = document.querySelector(`.${this.settings.selector}`);
	}

	/**
	 *
	 */
	init(){
		this.initConverter();
		this.initEditor();
		this.initPreview();
		this.initHiddenHtmlInput();
		this.initHiddenMarkdownInput();
		this.addListeners();
	}

	/**
	 *
	 */
	initHiddenHtmlInput(){
		if(this.settings.htmlInputSelector != null ) {
			this.htmlInputElement = new HTMLElement('textarea',
				this.settings.htmlInputSelector,
				this.calmdown, {
					name: this.settings.htmlInputSelector
				}).getElement;
		} else {
			this.htmlInputElement = null;
		}
	}

	/**
	 *
	 */
	initHiddenMarkdownInput(){
		if(this.settings.markdownInputSelector != null ) {
			this.markdownInputElement = new HTMLElement('textarea',
				this.settings.markdownInputSelector,
				this.calmdown, {
					name: this.settings.markdownInputSelector
				}).getElement;
		} else {
			this.markdownInputElement = null;
		}
	}

	/**
	 *
	 */
	initConverter(){
		this.converter = new ShowdownConverter();
	}

	/**
	 *
	 */
	initEditor(){
		this.editor = new TextareaEditor(this.settings.editorSelector,this.calmdown);
	}

	/**
	 *
	 */
	initPreview(){
		this.preview = new Preview(this.settings.previewSelector,this.calmdown);
	}

	/**
	 *
	 */
	addListeners(){
		this.editor.previewEventListener(this.preview.getPreview,this.converter.getConverter);
	}
}
