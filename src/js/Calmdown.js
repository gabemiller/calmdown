import { CONFIG } from './Config';
import { ShowdownConverter } from './ShowdownConverter';
import { TextareaEditor } from './TextareaEditor';
import { Preview } from './Preview';
import { HTMLElement } from './HTMLElement';
import * as Prism from 'prismjs';

export default class Calmdown{

	/**
	 * Represents Calmdown
	 *
	 * @constructor
	 * @param {Object} settings
	 */
	constructor(settings = {}){
		this.setDefaults();
		this.init();
	}

	/**
	 * Set the default values for the Calmdown properties
	 *
	 * @param {Object} settings
	 */
	setDefaults(settings){
		this.settings = Object.assign(CONFIG, settings);
		this.calmdown = document.querySelector(`.${this.settings.selector}`);
		//this.codeHighlighter = hljs;
		this.codeHighlighter = Prism;
	}

	/**
	 * Initialize Calmdown
	 */
	init(){
		this.initCodeHightlight();
		this.initConverter();
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
					name: this.settings.htmlInputSelector
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
					name: this.settings.markdownInputSelector
				}).getElement;
		}
	}

	/**
	 * Initialize markdown converter
	 */
	initConverter(){
		this.converter = new ShowdownConverter(this.codeHighlighter);
	}

	/**
	 * Initialize editor area
	 */
	initEditor(){
		this.editor = new TextareaEditor(this.settings.editorSelector,this.calmdown);
		this.editor.getEditor.value = `\`\`\`html 
<div class="hello">Hello, World!</div> 
\`\`\`
`;
		this.editor.getEditor.value += `\`\`\`javascript 
console.log("Hello, World!"); 
\`\`\`
`;
		this.editor.getEditor.value += `\`\`\`java 
public void static main(){		
	System.out.println("Hello, World!");
}
\`\`\`
`;
		this.editor.getEditor.value += `\`\`\`php
<?php		
	echo "Hello, World!";
\`\`\`
`;
		this.editor.getEditor.value += `\`\`\`css 
.hello {
	content: "world";
	font-size: 1rem;
	color: #000;
} 
\`\`\`
`;
	}

	/**
	 * Initialize preview area
	 */
	initPreview(){
		this.preview = new Preview(this.settings.previewSelector,this.calmdown);
	}

	/**
	 * Initialize event listeners
	 */
	initEventListeners(){
		this.editor.convertMarkdownToHtmlEventListener([this.preview.getPreview,this.htmlInputElement],this.converter);
	}

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
