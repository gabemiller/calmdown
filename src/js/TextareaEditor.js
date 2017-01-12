export class TextareaEditor{
	constructor(className,parent){
		this.init(className,parent);
	}

	init(className,parent){
		let editor = document.createElement('textarea');
		editor.className = className;
		parent.appendChild(editor);
		this._editor = document.querySelector(`.${className}`);
	}

	get getEditor(){
		return this._editor;
	}

	getContent(){
		return this._editor.value;
	}

	setContent(content){
		this._editor.value = content;
	}

	appendContent(content){
		this._editor.value = this._editor.value + content;
	}

	prependContent(content){
		this._editor.value = content + this._editor.value;
	}

	addEventListener(event,closure){
		this._editor.addEventListener(event,closure);
	}
}