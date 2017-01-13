import { HTMLElement } from './HTMLElement';

export class Preview extends HTMLElement{
	constructor(className,parent){
		super('div',className,parent);
	}

	get getPreview(){
		return this._element;
	}
}