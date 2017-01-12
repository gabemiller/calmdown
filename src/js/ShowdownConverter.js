import * as showdown from 'showdown';

export class ShowdownConverter{

	constructor(flavor = 'github'){
		this._converter = new showdown.Converter();
		this.setFlavor(flavor);
	}

	get getConverter(){
		return this._converter;
	}

	setFlavor(flavor){
		this._converter.setFlavor(flavor);
	}
}