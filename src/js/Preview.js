export class Preview{
	constructor(className,parent){
		this.init(className,parent);
	}

	init(className,parent){
		let cdPreview = document.createElement('div');
		cdPreview.className = className;
		parent.appendChild(cdPreview);
		this._preview = document.querySelector(`.${className}`);
	}

	get getPreview(){
		return this._preview;
	}
}