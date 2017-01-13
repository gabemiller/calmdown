export class HTMLElement{
	constructor(type, className, parent, params = {}){
		this.init(type, className, parent, params);
	}

	/**
	 * Initialize HTML element
	 * Get a type, a className and additional params to create a html element
	 * and append the created element to the parent
	 *
	 * @param type (String) - the string value of the html tag
	 * @param className (String) - the name of the html element
	 * @param parent (Element) - the parent element of the created element
	 * @param params (Object) - additional parameters for the created element
	 */
	init(type, className, parent, params){
		// Create element
		let element = HTMLElement.createElement(type,className,params);

		// Append element to parent
		HTMLElement.appendElementToParent(element,parent);

		// Get the element from the dom
		this.setDOMElement(className);
	}

	get getElement(){
		return this._element;
	}

	set setElement(element){
		this._element = element;
	}

	setDOMElement(className){
		this._element = document.querySelector(`.${className}`);
	}

	static createElement(type,className,params){
		let element = document.createElement(type);
		element.className = className;

		for(let key of Object.keys(params)) {
			element[key] = params[key];
		}

		return element;
	}

	static appendElementToParent(element,parent){
		parent.appendChild(element);
	}

}