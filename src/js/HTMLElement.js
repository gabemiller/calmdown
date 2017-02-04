export class HTMLElement{

	/**
	 * Represents a HTMLElement
	 *
	 * @constructor
	 * @param {String} type - the string value of the html tag
	 * @param {String} className - the name of the html element
	 * @param {Element} parent - the parent element of the created element
	 * @param {Object} params - additional parameters for the created element
	 */
	constructor(type, className, parent, params = {}){
		this.init(type, className, parent, params);
	}

	/**
	 * Initialize HTML element
	 * Get a type, a className and additional params to create a html element
	 * and append the created element to the parent
	 *
	 * @param {String} type - the string value of the html tag
	 * @param {String} className - the name of the html element
	 * @param {Element} parent - the parent element of the created element
	 * @param {Object} params - additional parameters for the created element
	 */
	init(type, className, parent, params){
		// Create element
		let element = HTMLElement.createElement(type,className,params);

		// Append element to parent
		HTMLElement.appendElementToParent(element,parent);

		// Get the element from the dom
		this.setElementByClassName(className);
	}

	/**
	 * Get the element
	 *
	 * @returns {Element} - the element
	 */
	get getElement(){
		return this._element;
	}

	/**
	 * Set the element
	 *
	 * @param {Element} element - the new value of the element
	 */
	set setElement(element){
		this._element = element;
	}

	/**
	 * Get the element by the class name with querySelector
	 *
	 * @param {String} className - the string value of the class name without dot
	 */
	setElementByClassName(className){
		this._element = document.querySelector(`.${className}`);
	}

	/**
	 * Create an eventListener for the html element
	 *
	 * @param {String} event - the string value of the event name
	 * @param {Function} callback - the function that should be run when the event is fired
	 */
	addEventListener(event,callback){
		this._element.addEventListener(event,callback);
	}

	/**
	 * Create a new element of given type with class name and parameters
	 *
	 * @param {String} type - the string value of type of the new element
	 * @param {String} className - the string value of the class attribute of the element without dot
	 * @param {Object} params - parameter object to set attribute of the element
	 * @returns {Element} - return a new element
	 */
	static createElement(type,className,params){
		let element = document.createElement(type);
		element.className = className;

		for(let key of Object.keys(params)) {
			element[key] = params[key];
		}

		return element;
	}

	/**
	 * Append the element to the parent element as a child
	 *
	 * @param {Element} element - the element that will be appended to the parent
	 * @param {Element} parent - the parent element that will contain the given element
	 */
	static appendElementToParent(element,parent){
		parent.appendChild(element);
	}

}