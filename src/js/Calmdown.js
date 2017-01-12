import { ShowdownConverter } from './ShowdownConverter';
import { TextareaEditor } from './TextareaEditor';
import { Preview } from './Preview';
/**
 *
 */
export default class Calmdown{

	/**
	 *
	 * @param settings
	 */
	constructor(settings = {}){
		this.setDefaults();
		this.init();
	}

	/**
	 *
	 * @param settings
	 */
	setDefaults(settings){
		this.settings = Object.assign({
			'selector' : 'calmdown',
			'editorSelector' : 'cd-editor',
			'previewSelector' : 'cd-preview',
			'markdownInputSelector' : 'cd-markdown-input',
			'htmlInputSelector' : 'cd-html-input',
			'editorType': 'textarea'
		}, settings);

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
		this.addListeners();
	}

	/**
	 *
	 */
	initHiddenHtmlInput(){

		let htmlInput = document.createElement('textarea');
		htmlInput.name = this.settings.htmlInputSelector;
		htmlInput.className = this.settings.htmlInputSelector;
		this.calmdown.appendChild(htmlInput);

		this.htmlInputElement = document.querySelector(`.${this.settings.htmlInputSelector}`);
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
		this.editor.addEventListener('input',()=>{
			this.preview.getPreview.innerHTML = this.converter.getConverter.makeHtml(this.editor.getEditor.value);
		});
	}
}
