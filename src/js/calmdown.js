import * as showdown from 'showdown';

/**
 *
 */
export default class Calmdown{

	/**
	 *
	 * @param settings
	 */
	constructor(settings = {}){

		this.settings = Object.assign({
			'selector' : 'calmdown',
			'editSelector' : 'cd-edit',
			'previewSelector' : 'cd-preview',
			'markdownInputSelector' : 'cd-markdown-input',
			'htmlInputSelector' : 'cd-html-input'
		}, settings);
		this.element = 	document.querySelector(`.${this.settings.selector}`);

	}

	/**
	 *
	 */
	init(){
		this.initMarkdownConverter();
		this.initEditableArea();
		this.initPreviewArea();
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
		this.element.appendChild(htmlInput);

		this.htmlInputElement = document.querySelector(`.${this.settings.htmlInputSelector}`);
	}

	/**
	 *
	 */
	initMarkdownConverter(){
		this.converter = new showdown.Converter();
		this.converter.setFlavor('github');
	}

	/**
	 *
	 */
	initEditableArea(){

		let cdEdit = document.createElement('textarea');
		cdEdit.className = this.settings.editSelector;
		cdEdit.innerHTML = '# Hello, CodeMirror!';
		this.element.appendChild(cdEdit);

		this.editElement = document.querySelector(`.${this.settings.editSelector}`);
	}

	/**
	 *
	 */
	initPreviewArea(){

		let cdPreview = document.createElement('div');
		cdPreview.className = this.settings.previewSelector;
		this.element.appendChild(cdPreview);

		this.previewElement = document.querySelector(`.${this.settings.previewSelector}`);
	}

	/**
	 *
	 */
	addListeners(){

		this.editElement.addEventListener('input',()=>{

			console.log(this.editElement.value);
			this.previewElement.innerHTML = this.converter.makeHtml(this.editElement.value);

		});

	}

}
