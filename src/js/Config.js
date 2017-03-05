const CONFIG = {

	/**
	 * @type {String}
	 */
	width: '100%',

	/**
	 * @type {String}
	 */
	height: '500px',

	/**
	 * @type {String}
	 */
	selector: 'calmdown',

	/**
	 * @type {String}
	 */
	bodySelector: 'cd-body',

	/**
	 * @type {String}
	 */
	editorSelector: 'cd-editor',

	/**
	 * @type {String|null}
	 */
	previewSelector: 'cd-preview',

	/**
	 * @type {String|null}
	 */
	markdownInputSelector: 'cd-markdown-input',

	/**
	 * @type {String|null}
	 */
	htmlInputSelector: 'cd-html-input',

	/**
	 * Based on the name of code highlight themes given by PrismJS
	 * themes: default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight
	 * @type {String} - cd-highlight-[theme_name]
	 */
	codeHighlightStyle: 'cd-highlight-default',

	/**
	 * @type {String}
	 */
	editorType: 'textarea',

	/**
	 * @type {String}
	 */
	defaultContent: '',
};

export default CONFIG;
