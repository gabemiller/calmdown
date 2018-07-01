const CONFIG = {

	/**
	 * Set the width of the editor
	 *
	 * It can be any css width value like px, pt, %, em, rem etc.
	 * @type {String}
	 */
	width: '100%',

	/**
	 * Set the height of the editor
	 *
	 * It can be any css height value like px, pt, %, em, rem etc.
	 * @type {String}
	 */
	height: '500px',

	/**
	 * Set the editor selector class name
	 *
	 * This name should be the same class name as the class of the div
	 * that we want to be an editor
	 * @type {String}
	 */
	selector: 'calmdown',

	/**
	 * Set the markdown editor (textarea) selector class name
	 *
	 * @type {String}
	 */
	editorSelector: 'cd-editor',

	/**
	 * Set the preview (div) selector class name
	 *
	 * @type {String}
	 */
	previewSelector: 'cd-preview',

	/**
	 * Set the help dialog (div) selector class name
	 *
	 * @type {String}
	 */
	helpDialogSelector: 'cd-help-dialog',

	/**
	 * Set the help dialog open button (button) selector class name
	 */
	helpDialogBtnOpenSelector: 'cd-help-dialog__btn-open',

	/**
	 * Set the help dialog close button (button) selector class name
	 */
	helpDialogBtnCloseSelector: 'cd-help-dialog__btn-close',

	/**
	 * Set the hidden markdown textarea selector class name
	 *
	 * This textarea should be used when the data sent through
	 * a synchronous way like a classic http post
	 * Can be null, then it won't be generated
	 * @type {String|null}
	 */
	markdownInputSelector: 'cd-markdown-input',

	/**
	 * Set the hidden html textarea selector class name
	 *
	 * This textarea should be used when the data sent through
	 * a synchronous way like a classic http post
	 * Can be null, then then it won't be generated
	 * @type {String|null}
	 */
	htmlInputSelector: 'cd-html-input',

	/**
	 * Set the default theme of the editor
	 *
	 * theme_name: cd-theme-default, cd-theme-dark
	 * @type {String}
	 */
	defaultThemeSelector: 'cd-theme-default',

	/**
	 * Set the default layout of the editor
	 *
	 * layout_name: cd-layout-both, cd-layout-editor, cd-layout-preview
	 * @type {String}
	 */
	defaultLayoutSelector: 'cd-layout-both',

	/**
	 * Based on the name of code highlight themes given by PrismJS
	 *
	 * theme_name: default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight
	 * @type {String} - cd-highlight-[theme_name]
	 */
	codeHighlightStyle: 'cd-highlight-default',

	/**
	 * Set the markdown editor type
	 *
	 * Supported types: textarea
	 * @type {String}
	 */
	editorType: 'textarea',

	/**
	 * Default content of the editor
	 * 
	 * @type {String}
	 */
	defaultContent: '',
};

export default CONFIG;
