var Calmdown =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Config = __webpack_require__(2);

	var _Config2 = _interopRequireDefault(_Config);

	var _ShowdownConverter = __webpack_require__(3);

	var _ShowdownConverter2 = _interopRequireDefault(_ShowdownConverter);

	var _TextareaEditor = __webpack_require__(35);

	var _TextareaEditor2 = _interopRequireDefault(_TextareaEditor);

	var _Preview = __webpack_require__(37);

	var _Preview2 = _interopRequireDefault(_Preview);

	var _HTMLElement = __webpack_require__(36);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _UserInteraction = __webpack_require__(38);

	var _UserInteraction2 = _interopRequireDefault(_UserInteraction);

	var _EditorUserInteraction = __webpack_require__(41);

	var _EditorUserInteraction2 = _interopRequireDefault(_EditorUserInteraction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Calmdown = function () {

		/**
	  * Represents Calmdown
	  *
	  * @constructor
	  * @param {Object} settings
	  */
		function Calmdown() {
			var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			_classCallCheck(this, Calmdown);

			this.setDefaults(settings);
			this.init();
		}

		/**
	  * Set the default values for the Calmdown properties
	  *
	  * @param {Object} settings
	  */


		_createClass(Calmdown, [{
			key: 'setDefaults',
			value: function setDefaults(settings) {
				this.settings = Object.assign(_Config2.default, settings);
				this.calmdown = document.querySelector('.' + this.settings.selector);
				this.calmdown.style = 'width: ' + this.settings.width + '; height: ' + this.settings.height + ';';
			}

			/**
	   * Initialize Calmdown
	   */

		}, {
			key: 'init',
			value: function init() {
				this.initCodeHightlight();
				this.initConverter();
				this.initResize();
				this.initEditor();
				this.initPreview();
				this.initHiddenHtmlInput();
				this.initHiddenMarkdownInput();
				this.initUserInteraction();
				this.initEventListeners();
				this.triggerEvents();
			}

			/**
	   * Initialize code higlighting
	   */

		}, {
			key: 'initCodeHightlight',
			value: function initCodeHightlight() {
				this.calmdown.className += ' ' + this.settings.codeHighlightStyle;
			}

			/**
	   * Initialize toolbar
	   */

		}, {
			key: 'initToolbar',
			value: function initToolbar() {
				this.toolbar = new _HTMLElement2.default('div', this.settings.bodySelector, this.calmdown).getElement;
			}

			/**
	   * Initialize resizer div
	   */

		}, {
			key: 'initResize',
			value: function initResize() {
				var _this = this;

				this.resize = new _HTMLElement2.default('div', 'cd-resize', this.calmdown).getElement;
				_HTMLElement2.default.create('span', 'cd-bars', this.resize);

				var isResizing = false;
				this.resize.addEventListener('mousedown', function (e) {
					e.preventDefault();
					isResizing = true;
				});
				document.addEventListener('mousemove', function (e) {
					if (isResizing) {
						_this.settings.height = e.clientY - _this.calmdown.offsetTop + _this.resize.offsetHeight / 2 + 'px';
						_this.calmdown.style.height = _this.settings.height;
					}
				});
				this.resize.addEventListener('mouseup', function (e) {
					e.preventDefault();
					isResizing = false;
				});
			}

			/**
	   * Initialize hidden html input
	   *
	   * This textarea value can be sent through some http methods
	   * to the server for further processing.
	   */

		}, {
			key: 'initHiddenHtmlInput',
			value: function initHiddenHtmlInput() {
				if (this.settings.htmlInputSelector != null) {
					this.htmlInputElement = new _HTMLElement2.default('textarea', this.settings.htmlInputSelector, this.calmdown, {
						name: this.settings.htmlInputSelector,
						style: 'display: none;'
					}).getElement;
				}
			}

			/**
	   * Initialize hidden markdown input
	   *
	   * This textarea value can be sent through some http methods
	   * to the server for further processing.
	   */

		}, {
			key: 'initHiddenMarkdownInput',
			value: function initHiddenMarkdownInput() {
				if (this.settings.markdownInputSelector != null) {
					this.markdownInputElement = new _HTMLElement2.default('textarea', this.settings.markdownInputSelector, this.calmdown, {
						name: this.settings.markdownInputSelector,
						style: 'display: none;'
					}).getElement;
				}
			}

			/**
	   * Initialize markdown converter
	   */

		}, {
			key: 'initConverter',
			value: function initConverter() {
				this.converter = new _ShowdownConverter2.default();
			}

			/**
	   * Initialize editor area
	   */

		}, {
			key: 'initEditor',
			value: function initEditor() {
				this.editor = new _TextareaEditor2.default(this.settings.editorSelector, this.calmdown);
				this.editor.getEditor.value = this.settings.defaultContent;
			}

			/**
	   *
	   */

		}, {
			key: 'initUserInteraction',
			value: function initUserInteraction() {
				this.globalUserInteraction = new _UserInteraction2.default();
				this.editorUserInteraction = new _EditorUserInteraction2.default(this.editor);
			}

			/**
	   * Initialize preview area
	   */

		}, {
			key: 'initPreview',
			value: function initPreview() {
				this.preview = new _Preview2.default(this.settings.previewSelector, this.calmdown);
			}

			/**
	   * Initialize event listeners
	   */

		}, {
			key: 'initEventListeners',
			value: function initEventListeners() {
				// Convert markdown to html
				this.editor.convertMarkdownToHtmlEventListener([this.preview.getPreview, this.htmlInputElement], this.converter);

				// Copy markdown to hidden input
				// This is useful when you do not want to send data through AJAX
				this.editor.copyMarkdownContentToHiddenInputEventListener(this.markdownInputElement);

				// Initialize insert keyboard events
				this.editorUserInteraction.insertKeyboardEvent('ctrl+b', '**', '**');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+i', '_', '_');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+u', '~~', '~~');
				this.editorUserInteraction.insertKeyboardEvent('tab', '\t');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+shift+i', '![', ']()');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+l', '[', ']()');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+k', '```', '\n```');
				this.editorUserInteraction.insertKeyboardEvent('ctrl+shift+k', '`', '`');

				// Initialize view change events
				this.viewChangeEvents();
			}

			/**
	   * Set the view to show editor or preview or both
	   */

		}, {
			key: 'viewChangeEvents',
			value: function viewChangeEvents() {
				var _this2 = this;

				// Show editor and preview
				this.globalUserInteraction.keyboardEventGlobal('alt+1', function (e) {
					e.preventDefault();
					_this2.editor.getEditor.removeAttribute('style');
					_this2.preview.getPreview.removeAttribute('style');
					_this2.editor.getEditor.focus();
				});

				// Show only editor
				this.globalUserInteraction.keyboardEventGlobal('alt+2', function (e) {
					e.preventDefault();
					_this2.editor.getEditor.removeAttribute('style');
					_this2.preview.getPreview.removeAttribute('style');
					_this2.editor.getEditor.style.maxWidth = '100%';
					_this2.editor.getEditor.style.border = '0';
					_this2.editor.getEditor.focus();
					_this2.preview.getPreview.style.display = 'none';
				});

				// Show only preview
				this.globalUserInteraction.keyboardEventGlobal('alt+3', function (e) {
					e.preventDefault();
					_this2.editor.getEditor.removeAttribute('style');
					_this2.preview.getPreview.removeAttribute('style');
					_this2.editor.getEditor.style.display = 'none';
					_this2.preview.getPreview.style.maxWidth = '100%';
				});

				var fullsize = false;
				// Set calmdown full screen
				this.globalUserInteraction.keyboardEventGlobal('alt+enter', function () {
					if (!fullsize) {
						_this2.calmdown.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999';
						_this2.resize.style.display = 'none';
					} else {
						_this2.calmdown.style = 'width: ' + _this2.settings.width + '; height: ' + _this2.settings.height + ';';
						_this2.resize.removeAttribute('style');
					}
					fullsize = !fullsize;
				});
			}

			/**
	   * Trigger the processing event
	   */

		}, {
			key: 'triggerEvents',
			value: function triggerEvents() {
				this.editor.processContent();
			}

			/**
	   * Get the editor content
	   *
	   * @returns {String} -  the string value of the editor content
	   */

		}, {
			key: 'getContent',
			value: function getContent() {
				return this.editor.getContent();
			}

			/**
	   *  Set the editor content
	   *
	   * @param {String} content - the new value of the editor
	   */

		}, {
			key: 'setContent',
			value: function setContent(content) {
				this.editor.setContent(content);
				this.editor.processContent();
			}
		}]);

		return Calmdown;
	}();

	exports.default = Calmdown;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var CONFIG = {

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
		defaultContent: ''
	};

	exports.default = CONFIG;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _showdown = __webpack_require__(4);

	var showdown = _interopRequireWildcard(_showdown);

	var _SyntaxHighlighter = __webpack_require__(5);

	var _SyntaxHighlighter2 = _interopRequireDefault(_SyntaxHighlighter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ShowdownConverter = function () {

		/**
	  * Represents ShowdownConverter
	  *
	  * @param {String} flavor - flavor of the converter
	 	 */
		function ShowdownConverter() {
			var flavor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'github';

			_classCallCheck(this, ShowdownConverter);

			this.converter = new showdown.Converter();
			this.setFlavor(flavor);
			this.codeHighlighter = new _SyntaxHighlighter2.default().getHighlighter;
		}

		/**
	  * Get the showdown converter
	  *
	  * @returns {showdown.Converter} - showdown markdown converter
	  */


		_createClass(ShowdownConverter, [{
			key: 'setFlavor',


			/**
	   * Set the flavor of the showdown converter
	   *
	   * @param {String} flavor - flavor of the converter
	   */
			value: function setFlavor(flavor) {
				this.converter.setFlavor(flavor);
			}

			/**
	   * Generate html from the markdown
	   *
	   * @param {String} markdown - markdown from the editor
	   * @returns {String} - the generated html
	   */

		}, {
			key: 'makeHtml',
			value: function makeHtml(markdown) {
				var html = this.converter.makeHtml(markdown);
				return this.codeHighlighter == null ? html : this.addCodeHighlighting(html);
			}

			/**
	   * Get a syntax highlighted version of the given html code tags
	   *
	   * @param {String} html - the generated html
	   * @returns {String} - the generated html with syntax highlight
	   */

		}, {
			key: 'addCodeHighlighting',
			value: function addCodeHighlighting(html) {
				var div = document.createElement('div');
				div.innerHTML = html;
				var codeList = div.getElementsByTagName('code');
				for (var i = 0; i < codeList.length; i++) {
					this.codeHighlighter.highlightElement(codeList[i]);
				}
				return div.innerHTML;
			}
		}, {
			key: 'getConverter',
			get: function get() {
				return this.converter;
			}
		}]);

		return ShowdownConverter;
	}();

	exports.default = ShowdownConverter;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	; /*! showdown 30-01-2017 */
	(function () {
	  /**
	   * Created by Tivie on 13-07-2015.
	   */

	  function getDefaultOpts(simple) {
	    'use strict';

	    var defaultOptions = {
	      omitExtraWLInCodeBlocks: {
	        defaultValue: false,
	        describe: 'Omit the default extra whiteline added to code blocks',
	        type: 'boolean'
	      },
	      noHeaderId: {
	        defaultValue: false,
	        describe: 'Turn on/off generated header id',
	        type: 'boolean'
	      },
	      prefixHeaderId: {
	        defaultValue: false,
	        describe: 'Specify a prefix to generated header ids',
	        type: 'string'
	      },
	      ghCompatibleHeaderId: {
	        defaultValue: false,
	        describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
	        type: 'boolean'
	      },
	      headerLevelStart: {
	        defaultValue: false,
	        describe: 'The header blocks level start',
	        type: 'integer'
	      },
	      parseImgDimensions: {
	        defaultValue: false,
	        describe: 'Turn on/off image dimension parsing',
	        type: 'boolean'
	      },
	      simplifiedAutoLink: {
	        defaultValue: false,
	        describe: 'Turn on/off GFM autolink style',
	        type: 'boolean'
	      },
	      excludeTrailingPunctuationFromURLs: {
	        defaultValue: false,
	        describe: 'Excludes trailing punctuation from links generated with autoLinking',
	        type: 'boolean'
	      },
	      literalMidWordUnderscores: {
	        defaultValue: false,
	        describe: 'Parse midword underscores as literal underscores',
	        type: 'boolean'
	      },
	      strikethrough: {
	        defaultValue: false,
	        describe: 'Turn on/off strikethrough support',
	        type: 'boolean'
	      },
	      tables: {
	        defaultValue: false,
	        describe: 'Turn on/off tables support',
	        type: 'boolean'
	      },
	      tablesHeaderId: {
	        defaultValue: false,
	        describe: 'Add an id to table headers',
	        type: 'boolean'
	      },
	      ghCodeBlocks: {
	        defaultValue: true,
	        describe: 'Turn on/off GFM fenced code blocks support',
	        type: 'boolean'
	      },
	      tasklists: {
	        defaultValue: false,
	        describe: 'Turn on/off GFM tasklist support',
	        type: 'boolean'
	      },
	      smoothLivePreview: {
	        defaultValue: false,
	        describe: 'Prevents weird effects in live previews due to incomplete input',
	        type: 'boolean'
	      },
	      smartIndentationFix: {
	        defaultValue: false,
	        description: 'Tries to smartly fix indentation in es6 strings',
	        type: 'boolean'
	      },
	      disableForced4SpacesIndentedSublists: {
	        defaultValue: false,
	        description: 'Disables the requirement of indenting nested sublists by 4 spaces',
	        type: 'boolean'
	      },
	      simpleLineBreaks: {
	        defaultValue: false,
	        description: 'Parses simple line breaks as <br> (GFM Style)',
	        type: 'boolean'
	      },
	      requireSpaceBeforeHeadingText: {
	        defaultValue: false,
	        description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
	        type: 'boolean'
	      },
	      ghMentions: {
	        defaultValue: false,
	        description: 'Enables github @mentions',
	        type: 'boolean'
	      },
	      ghMentionsLink: {
	        defaultValue: 'https://github.com/{u}',
	        description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
	        type: 'string'
	      },
	      encodeEmails: {
	        defaultValue: true,
	        description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
	        type: 'boolean'
	      }
	    };
	    if (simple === false) {
	      return JSON.parse(JSON.stringify(defaultOptions));
	    }
	    var ret = {};
	    for (var opt in defaultOptions) {
	      if (defaultOptions.hasOwnProperty(opt)) {
	        ret[opt] = defaultOptions[opt].defaultValue;
	      }
	    }
	    return ret;
	  }

	  function allOptionsOn() {
	    'use strict';

	    var options = getDefaultOpts(true),
	        ret = {};
	    for (var opt in options) {
	      if (options.hasOwnProperty(opt)) {
	        ret[opt] = true;
	      }
	    }
	    return ret;
	  }

	  /**
	   * Created by Tivie on 06-01-2015.
	   */

	  // Private properties
	  var showdown = {},
	      parsers = {},
	      extensions = {},
	      globalOptions = getDefaultOpts(true),
	      setFlavor = 'vanilla',
	      flavor = {
	    github: {
	      omitExtraWLInCodeBlocks: true,
	      prefixHeaderId: 'user-content-',
	      simplifiedAutoLink: true,
	      excludeTrailingPunctuationFromURLs: true,
	      literalMidWordUnderscores: true,
	      strikethrough: true,
	      tables: true,
	      tablesHeaderId: true,
	      ghCodeBlocks: true,
	      tasklists: true,
	      disableForced4SpacesIndentedSublists: true,
	      simpleLineBreaks: true,
	      requireSpaceBeforeHeadingText: true,
	      ghCompatibleHeaderId: true,
	      ghMentions: true
	    },
	    vanilla: getDefaultOpts(true),
	    allOn: allOptionsOn()
	  };

	  /**
	   * helper namespace
	   * @type {{}}
	   */
	  showdown.helper = {};

	  /**
	   * TODO LEGACY SUPPORT CODE
	   * @type {{}}
	   */
	  showdown.extensions = {};

	  /**
	   * Set a global option
	   * @static
	   * @param {string} key
	   * @param {*} value
	   * @returns {showdown}
	   */
	  showdown.setOption = function (key, value) {
	    'use strict';

	    globalOptions[key] = value;
	    return this;
	  };

	  /**
	   * Get a global option
	   * @static
	   * @param {string} key
	   * @returns {*}
	   */
	  showdown.getOption = function (key) {
	    'use strict';

	    return globalOptions[key];
	  };

	  /**
	   * Get the global options
	   * @static
	   * @returns {{}}
	   */
	  showdown.getOptions = function () {
	    'use strict';

	    return globalOptions;
	  };

	  /**
	   * Reset global options to the default values
	   * @static
	   */
	  showdown.resetOptions = function () {
	    'use strict';

	    globalOptions = getDefaultOpts(true);
	  };

	  /**
	   * Set the flavor showdown should use as default
	   * @param {string} name
	   */
	  showdown.setFlavor = function (name) {
	    'use strict';

	    if (!flavor.hasOwnProperty(name)) {
	      throw Error(name + ' flavor was not found');
	    }
	    var preset = flavor[name];
	    setFlavor = name;
	    for (var option in preset) {
	      if (preset.hasOwnProperty(option)) {
	        globalOptions[option] = preset[option];
	      }
	    }
	  };

	  /**
	   * Get the currently set flavor
	   * @returns {string}
	   */
	  showdown.getFlavor = function () {
	    'use strict';

	    return setFlavor;
	  };

	  /**
	   * Get the options of a specified flavor. Returns undefined if the flavor was not found
	   * @param {string} name Name of the flavor
	   * @returns {{}|undefined}
	   */
	  showdown.getFlavorOptions = function (name) {
	    'use strict';

	    if (flavor.hasOwnProperty(name)) {
	      return flavor[name];
	    }
	  };

	  /**
	   * Get the default options
	   * @static
	   * @param {boolean} [simple=true]
	   * @returns {{}}
	   */
	  showdown.getDefaultOptions = function (simple) {
	    'use strict';

	    return getDefaultOpts(simple);
	  };

	  /**
	   * Get or set a subParser
	   *
	   * subParser(name)       - Get a registered subParser
	   * subParser(name, func) - Register a subParser
	   * @static
	   * @param {string} name
	   * @param {function} [func]
	   * @returns {*}
	   */
	  showdown.subParser = function (name, func) {
	    'use strict';

	    if (showdown.helper.isString(name)) {
	      if (typeof func !== 'undefined') {
	        parsers[name] = func;
	      } else {
	        if (parsers.hasOwnProperty(name)) {
	          return parsers[name];
	        } else {
	          throw Error('SubParser named ' + name + ' not registered!');
	        }
	      }
	    }
	  };

	  /**
	   * Gets or registers an extension
	   * @static
	   * @param {string} name
	   * @param {object|function=} ext
	   * @returns {*}
	   */
	  showdown.extension = function (name, ext) {
	    'use strict';

	    if (!showdown.helper.isString(name)) {
	      throw Error('Extension \'name\' must be a string');
	    }

	    name = showdown.helper.stdExtName(name);

	    // Getter
	    if (showdown.helper.isUndefined(ext)) {
	      if (!extensions.hasOwnProperty(name)) {
	        throw Error('Extension named ' + name + ' is not registered!');
	      }
	      return extensions[name];

	      // Setter
	    } else {
	      // Expand extension if it's wrapped in a function
	      if (typeof ext === 'function') {
	        ext = ext();
	      }

	      // Ensure extension is an array
	      if (!showdown.helper.isArray(ext)) {
	        ext = [ext];
	      }

	      var validExtension = validate(ext, name);

	      if (validExtension.valid) {
	        extensions[name] = ext;
	      } else {
	        throw Error(validExtension.error);
	      }
	    }
	  };

	  /**
	   * Gets all extensions registered
	   * @returns {{}}
	   */
	  showdown.getAllExtensions = function () {
	    'use strict';

	    return extensions;
	  };

	  /**
	   * Remove an extension
	   * @param {string} name
	   */
	  showdown.removeExtension = function (name) {
	    'use strict';

	    delete extensions[name];
	  };

	  /**
	   * Removes all extensions
	   */
	  showdown.resetExtensions = function () {
	    'use strict';

	    extensions = {};
	  };

	  /**
	   * Validate extension
	   * @param {array} extension
	   * @param {string} name
	   * @returns {{valid: boolean, error: string}}
	   */
	  function validate(extension, name) {
	    'use strict';

	    var errMsg = name ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
	        ret = {
	      valid: true,
	      error: ''
	    };

	    if (!showdown.helper.isArray(extension)) {
	      extension = [extension];
	    }

	    for (var i = 0; i < extension.length; ++i) {
	      var baseMsg = errMsg + ' sub-extension ' + i + ': ',
	          ext = extension[i];
	      if ((typeof ext === 'undefined' ? 'undefined' : _typeof(ext)) !== 'object') {
	        ret.valid = false;
	        ret.error = baseMsg + 'must be an object, but ' + (typeof ext === 'undefined' ? 'undefined' : _typeof(ext)) + ' given';
	        return ret;
	      }

	      if (!showdown.helper.isString(ext.type)) {
	        ret.valid = false;
	        ret.error = baseMsg + 'property "type" must be a string, but ' + _typeof(ext.type) + ' given';
	        return ret;
	      }

	      var type = ext.type = ext.type.toLowerCase();

	      // normalize extension type
	      if (type === 'language') {
	        type = ext.type = 'lang';
	      }

	      if (type === 'html') {
	        type = ext.type = 'output';
	      }

	      if (type !== 'lang' && type !== 'output' && type !== 'listener') {
	        ret.valid = false;
	        ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
	        return ret;
	      }

	      if (type === 'listener') {
	        if (showdown.helper.isUndefined(ext.listeners)) {
	          ret.valid = false;
	          ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
	          return ret;
	        }
	      } else {
	        if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
	          ret.valid = false;
	          ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
	          return ret;
	        }
	      }

	      if (ext.listeners) {
	        if (_typeof(ext.listeners) !== 'object') {
	          ret.valid = false;
	          ret.error = baseMsg + '"listeners" property must be an object but ' + _typeof(ext.listeners) + ' given';
	          return ret;
	        }
	        for (var ln in ext.listeners) {
	          if (ext.listeners.hasOwnProperty(ln)) {
	            if (typeof ext.listeners[ln] !== 'function') {
	              ret.valid = false;
	              ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + ' must be a function but ' + _typeof(ext.listeners[ln]) + ' given';
	              return ret;
	            }
	          }
	        }
	      }

	      if (ext.filter) {
	        if (typeof ext.filter !== 'function') {
	          ret.valid = false;
	          ret.error = baseMsg + '"filter" must be a function, but ' + _typeof(ext.filter) + ' given';
	          return ret;
	        }
	      } else if (ext.regex) {
	        if (showdown.helper.isString(ext.regex)) {
	          ext.regex = new RegExp(ext.regex, 'g');
	        }
	        if (!ext.regex instanceof RegExp) {
	          ret.valid = false;
	          ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + _typeof(ext.regex) + ' given';
	          return ret;
	        }
	        if (showdown.helper.isUndefined(ext.replace)) {
	          ret.valid = false;
	          ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
	          return ret;
	        }
	      }
	    }
	    return ret;
	  }

	  /**
	   * Validate extension
	   * @param {object} ext
	   * @returns {boolean}
	   */
	  showdown.validateExtension = function (ext) {
	    'use strict';

	    var validateExtension = validate(ext, null);
	    if (!validateExtension.valid) {
	      console.warn(validateExtension.error);
	      return false;
	    }
	    return true;
	  };

	  /**
	   * showdownjs helper functions
	   */

	  if (!showdown.hasOwnProperty('helper')) {
	    showdown.helper = {};
	  }

	  /**
	   * Check if var is string
	   * @static
	   * @param {string} a
	   * @returns {boolean}
	   */
	  showdown.helper.isString = function (a) {
	    'use strict';

	    return typeof a === 'string' || a instanceof String;
	  };

	  /**
	   * Check if var is a function
	   * @static
	   * @param {*} a
	   * @returns {boolean}
	   */
	  showdown.helper.isFunction = function (a) {
	    'use strict';

	    var getType = {};
	    return a && getType.toString.call(a) === '[object Function]';
	  };

	  /**
	   * isArray helper function
	   * @static
	   * @param {*} a
	   * @returns {boolean}
	   */
	  showdown.helper.isArray = function (a) {
	    'use strict';

	    return a.constructor === Array;
	  };

	  /**
	   * Check if value is undefined
	   * @static
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	   */
	  showdown.helper.isUndefined = function (value) {
	    'use strict';

	    return typeof value === 'undefined';
	  };

	  /**
	   * ForEach helper function
	   * Iterates over Arrays and Objects (own properties only)
	   * @static
	   * @param {*} obj
	   * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
	   */
	  showdown.helper.forEach = function (obj, callback) {
	    'use strict';
	    // check if obj is defined

	    if (showdown.helper.isUndefined(obj)) {
	      throw new Error('obj param is required');
	    }

	    if (showdown.helper.isUndefined(callback)) {
	      throw new Error('callback param is required');
	    }

	    if (!showdown.helper.isFunction(callback)) {
	      throw new Error('callback param must be a function/closure');
	    }

	    if (typeof obj.forEach === 'function') {
	      obj.forEach(callback);
	    } else if (showdown.helper.isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        callback(obj[i], i, obj);
	      }
	    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      for (var prop in obj) {
	        if (obj.hasOwnProperty(prop)) {
	          callback(obj[prop], prop, obj);
	        }
	      }
	    } else {
	      throw new Error('obj does not seem to be an array or an iterable object');
	    }
	  };

	  /**
	   * Standardidize extension name
	   * @static
	   * @param {string} s extension name
	   * @returns {string}
	   */
	  showdown.helper.stdExtName = function (s) {
	    'use strict';

	    return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
	  };

	  function escapeCharactersCallback(wholeMatch, m1) {
	    'use strict';

	    var charCodeToEscape = m1.charCodeAt(0);
	    return '¨E' + charCodeToEscape + 'E';
	  }

	  /**
	   * Callback used to escape characters when passing through String.replace
	   * @static
	   * @param {string} wholeMatch
	   * @param {string} m1
	   * @returns {string}
	   */
	  showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

	  /**
	   * Escape characters in a string
	   * @static
	   * @param {string} text
	   * @param {string} charsToEscape
	   * @param {boolean} afterBackslash
	   * @returns {XML|string|void|*}
	   */
	  showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
	    'use strict';
	    // First we have to escape the escape characters so that
	    // we can build a character class out of them

	    var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

	    if (afterBackslash) {
	      regexString = '\\\\' + regexString;
	    }

	    var regex = new RegExp(regexString, 'g');
	    text = text.replace(regex, escapeCharactersCallback);

	    return text;
	  };

	  var rgxFindMatchPos = function rgxFindMatchPos(str, left, right, flags) {
	    'use strict';

	    var f = flags || '',
	        g = f.indexOf('g') > -1,
	        x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
	        l = new RegExp(left, f.replace(/g/g, '')),
	        pos = [],
	        t,
	        s,
	        m,
	        start,
	        end;

	    do {
	      t = 0;
	      while (m = x.exec(str)) {
	        if (l.test(m[0])) {
	          if (!t++) {
	            s = x.lastIndex;
	            start = s - m[0].length;
	          }
	        } else if (t) {
	          if (! --t) {
	            end = m.index + m[0].length;
	            var obj = {
	              left: { start: start, end: s },
	              match: { start: s, end: m.index },
	              right: { start: m.index, end: end },
	              wholeMatch: { start: start, end: end }
	            };
	            pos.push(obj);
	            if (!g) {
	              return pos;
	            }
	          }
	        }
	      }
	    } while (t && (x.lastIndex = s));

	    return pos;
	  };

	  /**
	   * matchRecursiveRegExp
	   *
	   * (c) 2007 Steven Levithan <stevenlevithan.com>
	   * MIT License
	   *
	   * Accepts a string to search, a left and right format delimiter
	   * as regex patterns, and optional regex flags. Returns an array
	   * of matches, allowing nested instances of left/right delimiters.
	   * Use the "g" flag to return all matches, otherwise only the
	   * first is returned. Be careful to ensure that the left and
	   * right format delimiters produce mutually exclusive matches.
	   * Backreferences are not supported within the right delimiter
	   * due to how it is internally combined with the left delimiter.
	   * When matching strings whose format delimiters are unbalanced
	   * to the left or right, the output is intentionally as a
	   * conventional regex library with recursion support would
	   * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
	   * "<" and ">" as the delimiters (both strings contain a single,
	   * balanced instance of "<x>").
	   *
	   * examples:
	   * matchRecursiveRegExp("test", "\\(", "\\)")
	   * returns: []
	   * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
	   * returns: ["t<<e>><s>", ""]
	   * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
	   * returns: ["test"]
	   */
	  showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
	    'use strict';

	    var matchPos = rgxFindMatchPos(str, left, right, flags),
	        results = [];

	    for (var i = 0; i < matchPos.length; ++i) {
	      results.push([str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)]);
	    }
	    return results;
	  };

	  /**
	   *
	   * @param {string} str
	   * @param {string|function} replacement
	   * @param {string} left
	   * @param {string} right
	   * @param {string} flags
	   * @returns {string}
	   */
	  showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
	    'use strict';

	    if (!showdown.helper.isFunction(replacement)) {
	      var repStr = replacement;
	      replacement = function replacement() {
	        return repStr;
	      };
	    }

	    var matchPos = rgxFindMatchPos(str, left, right, flags),
	        finalStr = str,
	        lng = matchPos.length;

	    if (lng > 0) {
	      var bits = [];
	      if (matchPos[0].wholeMatch.start !== 0) {
	        bits.push(str.slice(0, matchPos[0].wholeMatch.start));
	      }
	      for (var i = 0; i < lng; ++i) {
	        bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
	        if (i < lng - 1) {
	          bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
	        }
	      }
	      if (matchPos[lng - 1].wholeMatch.end < str.length) {
	        bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
	      }
	      finalStr = bits.join('');
	    }
	    return finalStr;
	  };

	  /**
	   * Obfuscate an e-mail address through the use of Character Entities,
	   * transforming ASCII characters into their equivalent decimal or hex entities.
	   *
	   * Since it has a random component, subsequent calls to this function produce different results
	   *
	   * @param {string} mail
	   * @returns {string}
	   */
	  showdown.helper.encodeEmailAddress = function (mail) {
	    'use strict';

	    var encode = [function (ch) {
	      return '&#' + ch.charCodeAt(0) + ';';
	    }, function (ch) {
	      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
	    }, function (ch) {
	      return ch;
	    }];

	    mail = mail.replace(/./g, function (ch) {
	      if (ch === '@') {
	        // this *must* be encoded. I insist.
	        ch = encode[Math.floor(Math.random() * 2)](ch);
	      } else {
	        var r = Math.random();
	        // roughly 10% raw, 45% hex, 45% dec
	        ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
	      }
	      return ch;
	    });

	    return mail;
	  };

	  /**
	   * POLYFILLS
	   */
	  // use this instead of builtin is undefined for IE8 compatibility
	  if (typeof console === 'undefined') {
	    console = {
	      warn: function warn(msg) {
	        'use strict';

	        alert(msg);
	      },
	      log: function log(msg) {
	        'use strict';

	        alert(msg);
	      },
	      error: function error(msg) {
	        'use strict';

	        throw msg;
	      }
	    };
	  }

	  /**
	   * Common regexes.
	   * We declare some common regexes to improve performance
	   */
	  showdown.helper.regexes = {
	    asteriskAndDash: /([*_])/g
	  };

	  /**
	   * Created by Estevao on 31-05-2015.
	   */

	  /**
	   * Showdown Converter class
	   * @class
	   * @param {object} [converterOptions]
	   * @returns {Converter}
	   */
	  showdown.Converter = function (converterOptions) {
	    'use strict';

	    var
	    /**
	     * Options used by this converter
	     * @private
	     * @type {{}}
	     */
	    options = {},


	    /**
	     * Language extensions used by this converter
	     * @private
	     * @type {Array}
	     */
	    langExtensions = [],


	    /**
	     * Output modifiers extensions used by this converter
	     * @private
	     * @type {Array}
	     */
	    outputModifiers = [],


	    /**
	     * Event listeners
	     * @private
	     * @type {{}}
	     */
	    listeners = {},


	    /**
	     * The flavor set in this converter
	     */
	    setConvFlavor = setFlavor;

	    _constructor();

	    /**
	     * Converter constructor
	     * @private
	     */
	    function _constructor() {
	      converterOptions = converterOptions || {};

	      for (var gOpt in globalOptions) {
	        if (globalOptions.hasOwnProperty(gOpt)) {
	          options[gOpt] = globalOptions[gOpt];
	        }
	      }

	      // Merge options
	      if ((typeof converterOptions === 'undefined' ? 'undefined' : _typeof(converterOptions)) === 'object') {
	        for (var opt in converterOptions) {
	          if (converterOptions.hasOwnProperty(opt)) {
	            options[opt] = converterOptions[opt];
	          }
	        }
	      } else {
	        throw Error('Converter expects the passed parameter to be an object, but ' + (typeof converterOptions === 'undefined' ? 'undefined' : _typeof(converterOptions)) + ' was passed instead.');
	      }

	      if (options.extensions) {
	        showdown.helper.forEach(options.extensions, _parseExtension);
	      }
	    }

	    /**
	     * Parse extension
	     * @param {*} ext
	     * @param {string} [name='']
	     * @private
	     */
	    function _parseExtension(ext, name) {

	      name = name || null;
	      // If it's a string, the extension was previously loaded
	      if (showdown.helper.isString(ext)) {
	        ext = showdown.helper.stdExtName(ext);
	        name = ext;

	        // LEGACY_SUPPORT CODE
	        if (showdown.extensions[ext]) {
	          console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' + 'Please inform the developer that the extension should be updated!');
	          legacyExtensionLoading(showdown.extensions[ext], ext);
	          return;
	          // END LEGACY SUPPORT CODE
	        } else if (!showdown.helper.isUndefined(extensions[ext])) {
	          ext = extensions[ext];
	        } else {
	          throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
	        }
	      }

	      if (typeof ext === 'function') {
	        ext = ext();
	      }

	      if (!showdown.helper.isArray(ext)) {
	        ext = [ext];
	      }

	      var validExt = validate(ext, name);
	      if (!validExt.valid) {
	        throw Error(validExt.error);
	      }

	      for (var i = 0; i < ext.length; ++i) {
	        switch (ext[i].type) {

	          case 'lang':
	            langExtensions.push(ext[i]);
	            break;

	          case 'output':
	            outputModifiers.push(ext[i]);
	            break;
	        }
	        if (ext[i].hasOwnProperty('listeners')) {
	          for (var ln in ext[i].listeners) {
	            if (ext[i].listeners.hasOwnProperty(ln)) {
	              listen(ln, ext[i].listeners[ln]);
	            }
	          }
	        }
	      }
	    }

	    /**
	     * LEGACY_SUPPORT
	     * @param {*} ext
	     * @param {string} name
	     */
	    function legacyExtensionLoading(ext, name) {
	      if (typeof ext === 'function') {
	        ext = ext(new showdown.Converter());
	      }
	      if (!showdown.helper.isArray(ext)) {
	        ext = [ext];
	      }
	      var valid = validate(ext, name);

	      if (!valid.valid) {
	        throw Error(valid.error);
	      }

	      for (var i = 0; i < ext.length; ++i) {
	        switch (ext[i].type) {
	          case 'lang':
	            langExtensions.push(ext[i]);
	            break;
	          case 'output':
	            outputModifiers.push(ext[i]);
	            break;
	          default:
	            // should never reach here
	            throw Error('Extension loader error: Type unrecognized!!!');
	        }
	      }
	    }

	    /**
	     * Listen to an event
	     * @param {string} name
	     * @param {function} callback
	     */
	    function listen(name, callback) {
	      if (!showdown.helper.isString(name)) {
	        throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)) + ' given');
	      }

	      if (typeof callback !== 'function') {
	        throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) + ' given');
	      }

	      if (!listeners.hasOwnProperty(name)) {
	        listeners[name] = [];
	      }
	      listeners[name].push(callback);
	    }

	    function rTrimInputText(text) {
	      var rsp = text.match(/^\s*/)[0].length,
	          rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
	      return text.replace(rgx, '');
	    }

	    /**
	     * Dispatch an event
	     * @private
	     * @param {string} evtName Event name
	     * @param {string} text Text
	     * @param {{}} options Converter Options
	     * @param {{}} globals
	     * @returns {string}
	     */
	    this._dispatch = function dispatch(evtName, text, options, globals) {
	      if (listeners.hasOwnProperty(evtName)) {
	        for (var ei = 0; ei < listeners[evtName].length; ++ei) {
	          var nText = listeners[evtName][ei](evtName, text, this, options, globals);
	          if (nText && typeof nText !== 'undefined') {
	            text = nText;
	          }
	        }
	      }
	      return text;
	    };

	    /**
	     * Listen to an event
	     * @param {string} name
	     * @param {function} callback
	     * @returns {showdown.Converter}
	     */
	    this.listen = function (name, callback) {
	      listen(name, callback);
	      return this;
	    };

	    /**
	     * Converts a markdown string into HTML
	     * @param {string} text
	     * @returns {*}
	     */
	    this.makeHtml = function (text) {
	      //check if text is not falsy
	      if (!text) {
	        return text;
	      }

	      var globals = {
	        gHtmlBlocks: [],
	        gHtmlMdBlocks: [],
	        gHtmlSpans: [],
	        gUrls: {},
	        gTitles: {},
	        gDimensions: {},
	        gListLevel: 0,
	        hashLinkCounts: {},
	        langExtensions: langExtensions,
	        outputModifiers: outputModifiers,
	        converter: this,
	        ghCodeBlocks: []
	      };

	      // This lets us use ¨ trema as an escape char to avoid md5 hashes
	      // The choice of character is arbitrary; anything that isn't
	      // magic in Markdown will work.
	      text = text.replace(/¨/g, '¨T');

	      // Replace $ with ¨D
	      // RegExp interprets $ as a special character
	      // when it's in a replacement string
	      text = text.replace(/\$/g, '¨D');

	      // Standardize line endings
	      text = text.replace(/\r\n/g, '\n'); // DOS to Unix
	      text = text.replace(/\r/g, '\n'); // Mac to Unix

	      // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
	      text = text.replace(/\u00A0/g, ' ');

	      if (options.smartIndentationFix) {
	        text = rTrimInputText(text);
	      }

	      // Make sure text begins and ends with a couple of newlines:
	      text = '\n\n' + text + '\n\n';

	      // detab
	      text = showdown.subParser('detab')(text, options, globals);

	      /**
	       * Strip any lines consisting only of spaces and tabs.
	       * This makes subsequent regexs easier to write, because we can
	       * match consecutive blank lines with /\n+/ instead of something
	       * contorted like /[ \t]*\n+/
	       */
	      text = text.replace(/^[ \t]+$/mg, '');

	      //run languageExtensions
	      showdown.helper.forEach(langExtensions, function (ext) {
	        text = showdown.subParser('runExtension')(ext, text, options, globals);
	      });

	      // run the sub parsers
	      text = showdown.subParser('hashPreCodeTags')(text, options, globals);
	      text = showdown.subParser('githubCodeBlocks')(text, options, globals);
	      text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	      text = showdown.subParser('hashHTMLSpans')(text, options, globals);
	      text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
	      text = showdown.subParser('blockGamut')(text, options, globals);
	      text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
	      text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

	      // attacklab: Restore dollar signs
	      text = text.replace(/¨D/g, '$$');

	      // attacklab: Restore tremas
	      text = text.replace(/¨T/g, '¨');

	      // Run output modifiers
	      showdown.helper.forEach(outputModifiers, function (ext) {
	        text = showdown.subParser('runExtension')(ext, text, options, globals);
	      });

	      return text;
	    };

	    /**
	     * Set an option of this Converter instance
	     * @param {string} key
	     * @param {*} value
	     */
	    this.setOption = function (key, value) {
	      options[key] = value;
	    };

	    /**
	     * Get the option of this Converter instance
	     * @param {string} key
	     * @returns {*}
	     */
	    this.getOption = function (key) {
	      return options[key];
	    };

	    /**
	     * Get the options of this Converter instance
	     * @returns {{}}
	     */
	    this.getOptions = function () {
	      return options;
	    };

	    /**
	     * Add extension to THIS converter
	     * @param {{}} extension
	     * @param {string} [name=null]
	     */
	    this.addExtension = function (extension, name) {
	      name = name || null;
	      _parseExtension(extension, name);
	    };

	    /**
	     * Use a global registered extension with THIS converter
	     * @param {string} extensionName Name of the previously registered extension
	     */
	    this.useExtension = function (extensionName) {
	      _parseExtension(extensionName);
	    };

	    /**
	     * Set the flavor THIS converter should use
	     * @param {string} name
	     */
	    this.setFlavor = function (name) {
	      if (!flavor.hasOwnProperty(name)) {
	        throw Error(name + ' flavor was not found');
	      }
	      var preset = flavor[name];
	      setConvFlavor = name;
	      for (var option in preset) {
	        if (preset.hasOwnProperty(option)) {
	          options[option] = preset[option];
	        }
	      }
	    };

	    /**
	     * Get the currently set flavor of this converter
	     * @returns {string}
	     */
	    this.getFlavor = function () {
	      return setConvFlavor;
	    };

	    /**
	     * Remove an extension from THIS converter.
	     * Note: This is a costly operation. It's better to initialize a new converter
	     * and specify the extensions you wish to use
	     * @param {Array} extension
	     */
	    this.removeExtension = function (extension) {
	      if (!showdown.helper.isArray(extension)) {
	        extension = [extension];
	      }
	      for (var a = 0; a < extension.length; ++a) {
	        var ext = extension[a];
	        for (var i = 0; i < langExtensions.length; ++i) {
	          if (langExtensions[i] === ext) {
	            langExtensions[i].splice(i, 1);
	          }
	        }
	        for (var ii = 0; ii < outputModifiers.length; ++i) {
	          if (outputModifiers[ii] === ext) {
	            outputModifiers[ii].splice(i, 1);
	          }
	        }
	      }
	    };

	    /**
	     * Get all extension of THIS converter
	     * @returns {{language: Array, output: Array}}
	     */
	    this.getAllExtensions = function () {
	      return {
	        language: langExtensions,
	        output: outputModifiers
	      };
	    };
	  };

	  /**
	   * Turn Markdown link shortcuts into XHTML <a> tags.
	   */
	  showdown.subParser('anchors', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('anchors.before', text, options, globals);

	    var writeAnchorTag = function writeAnchorTag(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
	      if (showdown.helper.isUndefined(m7)) {
	        m7 = '';
	      }
	      wholeMatch = m1;
	      var linkText = m2,
	          linkId = m3.toLowerCase(),
	          url = m4,
	          title = m7;

	      if (!url) {
	        if (!linkId) {
	          // lower-case and turn embedded newlines into spaces
	          linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
	        }
	        url = '#' + linkId;

	        if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
	          url = globals.gUrls[linkId];
	          if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
	            title = globals.gTitles[linkId];
	          }
	        } else {
	          if (wholeMatch.search(/\(\s*\)$/m) > -1) {
	            // Special case for explicit empty url
	            url = '';
	          } else {
	            return wholeMatch;
	          }
	        }
	      }

	      //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
	      url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);

	      var result = '<a href="' + url + '"';

	      if (title !== '' && title !== null) {
	        title = title.replace(/"/g, '&quot;');
	        //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
	        title = title.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	        result += ' title="' + title + '"';
	      }

	      result += '>' + linkText + '</a>';

	      return result;
	    };

	    // First, handle reference-style links: [link text] [id]
	    text = text.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, writeAnchorTag);

	    // Next, inline-style links: [link text](url "optional title")
	    text = text.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);

	    // handle reference-style shortcuts: [link text]
	    // These must come last in case you've also got [link test][1]
	    // or [link test](/foo)
	    text = text.replace(/(\[([^\[\]]+)])()()()()()/g, writeAnchorTag);

	    // Lastly handle GithubMentions if option is enabled
	    if (options.ghMentions) {
	      text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
	        if (escape === '\\') {
	          return st + mentions;
	        }

	        //check if options.ghMentionsLink is a string
	        if (!showdown.helper.isString(options.ghMentionsLink)) {
	          throw new Error('ghMentionsLink option must be a string');
	        }
	        var lnk = options.ghMentionsLink.replace(/\{u}/g, username);
	        return st + '<a href="' + lnk + '">' + mentions + '</a>';
	      });
	    }

	    text = globals.converter._dispatch('anchors.after', text, options, globals);
	    return text;
	  });

	  showdown.subParser('autoLinks', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('autoLinks.before', text, options, globals);

	    var simpleURLRegex = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,
	        simpleURLRegex2 = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,
	        delimUrlRegex = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,
	        simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
	        delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;

	    text = text.replace(delimUrlRegex, replaceLink);
	    text = text.replace(delimMailRegex, replaceMail);
	    // simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[-.+~:?#@!$&'()*,;=[\]\w]+)\b/gi,
	    // Email addresses: <address@domain.foo>

	    if (options.simplifiedAutoLink) {
	      if (options.excludeTrailingPunctuationFromURLs) {
	        text = text.replace(simpleURLRegex2, replaceLink);
	      } else {
	        text = text.replace(simpleURLRegex, replaceLink);
	      }
	      text = text.replace(simpleMailRegex, replaceMail);
	    }

	    function replaceLink(wm, link, m2, m3, trailingPunctuation) {
	      var lnkTxt = link,
	          append = '';
	      if (/^www\./i.test(link)) {
	        link = link.replace(/^www\./i, 'http://www.');
	      }
	      if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
	        append = trailingPunctuation;
	      }
	      return '<a href="' + link + '">' + lnkTxt + '</a>' + append;
	    }

	    function replaceMail(wholeMatch, b, mail) {
	      var href = 'mailto:';
	      b = b || '';
	      mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
	      if (options.encodeEmails) {
	        mail = showdown.helper.encodeEmailAddress(mail);
	        href = showdown.helper.encodeEmailAddress(href + mail);
	      } else {
	        href = href + mail;
	      }
	      return b + '<a href="' + href + '">' + mail + '</a>';
	    }

	    text = globals.converter._dispatch('autoLinks.after', text, options, globals);

	    return text;
	  });

	  /**
	   * These are all the transformations that form block-level
	   * tags like paragraphs, headers, and list items.
	   */
	  showdown.subParser('blockGamut', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('blockGamut.before', text, options, globals);

	    // we parse blockquotes first so that we can have headings and hrs
	    // inside blockquotes
	    text = showdown.subParser('blockQuotes')(text, options, globals);
	    text = showdown.subParser('headers')(text, options, globals);

	    // Do Horizontal Rules:
	    text = showdown.subParser('horizontalRule')(text, options, globals);

	    text = showdown.subParser('lists')(text, options, globals);
	    text = showdown.subParser('codeBlocks')(text, options, globals);
	    text = showdown.subParser('tables')(text, options, globals);

	    // We already ran _HashHTMLBlocks() before, in Markdown(), but that
	    // was to escape raw HTML in the original Markdown source. This time,
	    // we're escaping the markup we've just created, so that we don't wrap
	    // <p> tags around block-level tags.
	    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	    text = showdown.subParser('paragraphs')(text, options, globals);

	    text = globals.converter._dispatch('blockGamut.after', text, options, globals);

	    return text;
	  });

	  showdown.subParser('blockQuotes', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

	    text = text.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
	      var bq = m1;

	      // attacklab: hack around Konqueror 3.5.4 bug:
	      // "----------bug".replace(/^-/g,"") == "bug"
	      bq = bq.replace(/^[ \t]*>[ \t]?/gm, '¨0'); // trim one level of quoting

	      // attacklab: clean up hack
	      bq = bq.replace(/¨0/g, '');

	      bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
	      bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
	      bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

	      bq = bq.replace(/(^|\n)/g, '$1  ');
	      // These leading spaces screw with <pre> content, so we need to fix that:
	      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
	        var pre = m1;
	        // attacklab: hack around Konqueror 3.5.4 bug:
	        pre = pre.replace(/^  /mg, '¨0');
	        pre = pre.replace(/¨0/g, '');
	        return pre;
	      });

	      return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
	    });

	    text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Process Markdown `<pre><code>` blocks.
	   */
	  showdown.subParser('codeBlocks', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

	    // sentinel workarounds for lack of \A and \Z, safari\khtml bug
	    text += '¨0';

	    var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
	    text = text.replace(pattern, function (wholeMatch, m1, m2) {
	      var codeblock = m1,
	          nextChar = m2,
	          end = '\n';

	      codeblock = showdown.subParser('outdent')(codeblock, options, globals);
	      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	      codeblock = showdown.subParser('detab')(codeblock, options, globals);
	      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

	      if (options.omitExtraWLInCodeBlocks) {
	        end = '';
	      }

	      codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

	      return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
	    });

	    // strip sentinel
	    text = text.replace(/¨0/, '');

	    text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
	    return text;
	  });

	  /**
	   *
	   *   *  Backtick quotes are used for <code></code> spans.
	   *
	   *   *  You can use multiple backticks as the delimiters if you want to
	   *     include literal backticks in the code span. So, this input:
	   *
	   *         Just type ``foo `bar` baz`` at the prompt.
	   *
	   *       Will translate to:
	   *
	   *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
	   *
	   *    There's no arbitrary limit to the number of backticks you
	   *    can use as delimters. If you need three consecutive backticks
	   *    in your code, use four for delimiters, etc.
	   *
	   *  *  You can use spaces to get literal backticks at the edges:
	   *
	   *         ... type `` `bar` `` ...
	   *
	   *       Turns to:
	   *
	   *         ... type <code>`bar`</code> ...
	   */
	  showdown.subParser('codeSpans', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('codeSpans.before', text, options, globals);

	    if (typeof text === 'undefined') {
	      text = '';
	    }
	    text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (wholeMatch, m1, m2, m3) {
	      var c = m3;
	      c = c.replace(/^([ \t]*)/g, ''); // leading whitespace
	      c = c.replace(/[ \t]*$/g, ''); // trailing whitespace
	      c = showdown.subParser('encodeCode')(c, options, globals);
	      return m1 + '<code>' + c + '</code>';
	    });

	    text = globals.converter._dispatch('codeSpans.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Convert all tabs to spaces
	   */
	  showdown.subParser('detab', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('detab.before', text, options, globals);

	    // expand first n-1 tabs
	    text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

	    // replace the nth with two sentinels
	    text = text.replace(/\t/g, '¨A¨B');

	    // use the sentinel to anchor our regex so it doesn't explode
	    text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
	      var leadingText = m1,
	          numSpaces = 4 - leadingText.length % 4; // g_tab_width

	      // there *must* be a better way to do this:
	      for (var i = 0; i < numSpaces; i++) {
	        leadingText += ' ';
	      }

	      return leadingText;
	    });

	    // clean up sentinels
	    text = text.replace(/¨A/g, '    '); // g_tab_width
	    text = text.replace(/¨B/g, '');

	    text = globals.converter._dispatch('detab.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Smart processing for ampersands and angle brackets that need to be encoded.
	   */
	  showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

	    // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	    // http://bumppo.net/projects/amputator/
	    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

	    // Encode naked <'s
	    text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

	    text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Returns the string, with after processing the following backslash escape sequences.
	   *
	   * attacklab: The polite way to do this is with the new escapeCharacters() function:
	   *
	   *    text = escapeCharacters(text,"\\",true);
	   *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	   *
	   * ...but we're sidestepping its use of the (slow) RegExp constructor
	   * as an optimization for Firefox.  This function gets called a LOT.
	   */
	  showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

	    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
	    text = text.replace(/\\([`*_{}\[\]()>#+.!~=-])/g, showdown.helper.escapeCharactersCallback);

	    text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Encode/escape certain characters inside Markdown code runs.
	   * The point is that in code, these characters are literals,
	   * and lose their special Markdown meanings.
	   */
	  showdown.subParser('encodeCode', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('encodeCode.before', text, options, globals);

	    // Encode all ampersands; HTML entities are not
	    // entities within a Markdown code span.
	    text = text.replace(/&/g, '&amp;')
	    // Do the angle bracket song and dance:
	    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
	    // Now, escape characters that are magic in Markdown:
	    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

	    text = globals.converter._dispatch('encodeCode.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
	   * don't conflict with their use in Markdown for code, italics and strong.
	   */
	  showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

	    // Build a regex to find HTML tags and comments.  See Friedl's
	    // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	    var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

	    text = text.replace(regex, function (wholeMatch) {
	      return wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`').replace(/([\\`*_~=])/g, showdown.helper.escapeCharactersCallback);
	    });

	    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Handle github codeblocks prior to running HashHTML so that
	   * HTML contained within the codeblock gets escaped properly
	   * Example:
	   * ```ruby
	   *     def hello_world(x)
	   *       puts "Hello, #{x}"
	   *     end
	   * ```
	   */
	  showdown.subParser('githubCodeBlocks', function (text, options, globals) {
	    'use strict';

	    // early exit if option is not enabled

	    if (!options.ghCodeBlocks) {
	      return text;
	    }

	    text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

	    text += '¨0';

	    text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
	      var end = options.omitExtraWLInCodeBlocks ? '' : '\n';

	      // First parse the github code block
	      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	      codeblock = showdown.subParser('detab')(codeblock, options, globals);
	      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

	      codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

	      codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

	      // Since GHCodeblocks can be false positives, we need to
	      // store the primitive text and the parsed text in a global var,
	      // and then return a token
	      return '\n\n¨G' + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock: codeblock }) - 1) + 'G\n\n';
	    });

	    // attacklab: strip sentinel
	    text = text.replace(/¨0/, '');

	    return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
	  });

	  showdown.subParser('hashBlock', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('hashBlock.before', text, options, globals);
	    text = text.replace(/(^\n+|\n+$)/g, '');
	    text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
	    text = globals.converter._dispatch('hashBlock.after', text, options, globals);
	    return text;
	  });

	  showdown.subParser('hashElement', function (text, options, globals) {
	    'use strict';

	    return function (wholeMatch, m1) {
	      var blockText = m1;

	      // Undo double lines
	      blockText = blockText.replace(/\n\n/g, '\n');
	      blockText = blockText.replace(/^\n/, '');

	      // strip trailing blank lines
	      blockText = blockText.replace(/\n+$/g, '');

	      // Replace the element text with a marker ("¨KxK" where x is its key)
	      blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

	      return blockText;
	    };
	  });

	  showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

	    var blockTags = ['pre', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'table', 'dl', 'ol', 'ul', 'script', 'noscript', 'form', 'fieldset', 'iframe', 'math', 'style', 'section', 'header', 'footer', 'nav', 'article', 'aside', 'address', 'audio', 'canvas', 'figure', 'hgroup', 'output', 'video', 'p'],
	        repFunc = function repFunc(wholeMatch, match, left, right) {
	      var txt = wholeMatch;
	      // check if this html element is marked as markdown
	      // if so, it's contents should be parsed as markdown
	      if (left.search(/\bmarkdown\b/) !== -1) {
	        txt = left + globals.converter.makeHtml(match) + right;
	      }
	      return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	    };

	    for (var i = 0; i < blockTags.length; ++i) {
	      text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<' + blockTags[i] + '\\b[^>]*>', '</' + blockTags[i] + '>', 'gim');
	    }

	    // HR SPECIAL CASE
	    text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));

	    // Special case for standalone HTML comments
	    text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
	      return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	    }, '^ {0,3}<!--', '-->', 'gm');

	    // PHP and ASP-style processor instructions (<?...?> and <%...%>)
	    text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));

	    text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Hash span elements that should not be parsed as markdown
	   */
	  showdown.subParser('hashHTMLSpans', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

	    var matches = showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');

	    for (var i = 0; i < matches.length; ++i) {
	      text = text.replace(matches[i][0], '¨C' + (globals.gHtmlSpans.push(matches[i][0]) - 1) + 'C');
	    }

	    text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Unhash HTML spans
	   */
	  showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

	    for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
	      text = text.replace('¨C' + i + 'C', globals.gHtmlSpans[i]);
	    }

	    text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Hash span elements that should not be parsed as markdown
	   */
	  showdown.subParser('hashPreCodeTags', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

	    var repFunc = function repFunc(wholeMatch, match, left, right) {
	      // encode html entities
	      var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
	      return '\n\n¨G' + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock: codeblock }) - 1) + 'G\n\n';
	    };

	    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

	    text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
	    return text;
	  });

	  showdown.subParser('headers', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('headers.before', text, options, globals);

	    var prefixHeader = options.prefixHeaderId,
	        headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart),
	        ghHeaderId = options.ghCompatibleHeaderId,


	    // Set text-style headers:
	    //	Header 1
	    //	========
	    //
	    //	Header 2
	    //	--------
	    //
	    setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
	        setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

	    text = text.replace(setextRegexH1, function (wholeMatch, m1) {

	      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	          hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
	          hLevel = headerLevelStart,
	          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	      return showdown.subParser('hashBlock')(hashBlock, options, globals);
	    });

	    text = text.replace(setextRegexH2, function (matchFound, m1) {
	      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	          hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
	          hLevel = headerLevelStart + 1,
	          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	      return showdown.subParser('hashBlock')(hashBlock, options, globals);
	    });

	    // atx-style headers:
	    //  # Header 1
	    //  ## Header 2
	    //  ## Header 2 with closing hashes ##
	    //  ...
	    //  ###### Header 6
	    //
	    var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

	    text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
	      var span = showdown.subParser('spanGamut')(m2, options, globals),
	          hID = options.noHeaderId ? '' : ' id="' + headerId(m2) + '"',
	          hLevel = headerLevelStart - 1 + m1.length,
	          header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

	      return showdown.subParser('hashBlock')(header, options, globals);
	    });

	    function headerId(m) {
	      var title, escapedId;

	      if (ghHeaderId) {
	        escapedId = m.replace(/ /g, '-')
	        // replace previously escaped chars (&, ¨ and $)
	        .replace(/&amp;/g, '').replace(/¨T/g, '').replace(/¨D/g, '')
	        // replace rest of the chars (&~$ are repeated as they might have been escaped)
	        // borrowed from github's redcarpet (some they should produce similar results)
	        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '').toLowerCase();
	      } else {
	        escapedId = m.replace(/[^\w]/g, '').toLowerCase();
	      }

	      if (globals.hashLinkCounts[escapedId]) {
	        title = escapedId + '-' + globals.hashLinkCounts[escapedId]++;
	      } else {
	        title = escapedId;
	        globals.hashLinkCounts[escapedId] = 1;
	      }

	      // Prefix id to prevent causing inadvertent pre-existing style matches.
	      if (prefixHeader === true) {
	        prefixHeader = 'section';
	      }

	      if (showdown.helper.isString(prefixHeader)) {
	        return prefixHeader + title;
	      }
	      return title;
	    }

	    text = globals.converter._dispatch('headers.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Turn Markdown link shortcuts into XHTML <a> tags.
	   */
	  showdown.subParser('horizontalRule', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

	    var key = showdown.subParser('hashBlock')('<hr />', options, globals);
	    text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
	    text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
	    text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

	    text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Turn Markdown image shortcuts into <img> tags.
	   */
	  showdown.subParser('images', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('images.before', text, options, globals);

	    var inlineRegExp = /!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,
	        referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;

	    function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {

	      var gUrls = globals.gUrls,
	          gTitles = globals.gTitles,
	          gDims = globals.gDimensions;

	      linkId = linkId.toLowerCase();

	      if (!title) {
	        title = '';
	      }

	      if (url === '' || url === null) {
	        if (linkId === '' || linkId === null) {
	          // lower-case and turn embedded newlines into spaces
	          linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
	        }
	        url = '#' + linkId;

	        if (!showdown.helper.isUndefined(gUrls[linkId])) {
	          url = gUrls[linkId];
	          if (!showdown.helper.isUndefined(gTitles[linkId])) {
	            title = gTitles[linkId];
	          }
	          if (!showdown.helper.isUndefined(gDims[linkId])) {
	            width = gDims[linkId].width;
	            height = gDims[linkId].height;
	          }
	        } else {
	          return wholeMatch;
	        }
	      }

	      altText = altText.replace(/"/g, '&quot;')
	      //altText = showdown.helper.escapeCharacters(altText, '*_', false);
	      .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      //url = showdown.helper.escapeCharacters(url, '*_', false);
	      url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      var result = '<img src="' + url + '" alt="' + altText + '"';

	      if (title) {
	        title = title.replace(/"/g, '&quot;')
	        //title = showdown.helper.escapeCharacters(title, '*_', false);
	        .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	        result += ' title="' + title + '"';
	      }

	      if (width && height) {
	        width = width === '*' ? 'auto' : width;
	        height = height === '*' ? 'auto' : height;

	        result += ' width="' + width + '"';
	        result += ' height="' + height + '"';
	      }

	      result += ' />';

	      return result;
	    }

	    // First, handle reference-style labeled images: ![alt text][id]
	    text = text.replace(referenceRegExp, writeImageTag);

	    // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
	    text = text.replace(inlineRegExp, writeImageTag);

	    text = globals.converter._dispatch('images.after', text, options, globals);
	    return text;
	  });

	  showdown.subParser('italicsAndBold', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

	    // it's faster to have 2 separate regexes for each case than have just one
	    // because of backtracing, in some cases, it could lead to an exponential effect
	    // called "catastrophic backtrace". Ominous!

	    // Parse underscores
	    if (options.literalMidWordUnderscores) {
	      text = text.replace(/\b__(\S[\s\S]*?)__\b/gm, '<strong>$1</strong>');
	      text = text.replace(/\b_(\S[\s\S]*?)_\b/gm, '<em>$1</em>');
	    } else {
	      text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
	        return (/\S$/.test(m) ? '<strong>' + m + '</strong>' : wm
	        );
	      });
	      text = text.replace(/_(\S[\s\S]*?)_/g, function (wm, m) {
	        // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
	        return (/\S$/.test(m) ? '<em>' + m + '</em>' : wm
	        );
	      });
	    }

	    // Now parse asterisks
	    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
	      return (/\S$/.test(m) ? '<strong>' + m + '</strong>' : wm
	      );
	    });

	    text = text.replace(/\*(\S[\s\S]*?)\*/g, function (wm, m) {
	      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
	      return (/\S$/.test(m) ? '<em>' + m + '</em>' : wm
	      );
	    });

	    text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Form HTML ordered (numbered) and unordered (bulleted) lists.
	   */
	  showdown.subParser('lists', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('lists.before', text, options, globals);

	    /**
	     * Process the contents of a single ordered or unordered list, splitting it
	     * into individual list items.
	     * @param {string} listStr
	     * @param {boolean} trimTrailing
	     * @returns {string}
	     */
	    function processListItems(listStr, trimTrailing) {
	      // The $g_list_level global keeps track of when we're inside a list.
	      // Each time we enter a list, we increment it; when we leave a list,
	      // we decrement. If it's zero, we're not in a list anymore.
	      //
	      // We do this because when we're not inside a list, we want to treat
	      // something like this:
	      //
	      //    I recommend upgrading to version
	      //    8. Oops, now this line is treated
	      //    as a sub-list.
	      //
	      // As a single paragraph, despite the fact that the second line starts
	      // with a digit-period-space sequence.
	      //
	      // Whereas when we're inside a list (or sub-list), that line will be
	      // treated as the start of a sub-list. What a kludge, huh? This is
	      // an aspect of Markdown's syntax that's hard to parse perfectly
	      // without resorting to mind-reading. Perhaps the solution is to
	      // change the syntax rules such that sub-lists must start with a
	      // starting cardinal number; e.g. "1." or "a.".
	      globals.gListLevel++;

	      // trim trailing blank lines:
	      listStr = listStr.replace(/\n{2,}$/, '\n');

	      // attacklab: add sentinel to emulate \z
	      listStr += '¨0';

	      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
	          isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);

	      // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
	      // which is a syntax breaking change
	      // activating this option reverts to old behavior
	      if (options.disableForced4SpacesIndentedSublists) {
	        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
	      }

	      listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
	        checked = checked && checked.trim() !== '';

	        var item = showdown.subParser('outdent')(m4, options, globals),
	            bulletStyle = '';

	        // Support for github tasklists
	        if (taskbtn && options.tasklists) {
	          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
	          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
	            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
	            if (checked) {
	              otp += ' checked';
	            }
	            otp += '>';
	            return otp;
	          });
	        }

	        // ISSUE #312
	        // This input: - - - a
	        // causes trouble to the parser, since it interprets it as:
	        // <ul><li><li><li>a</li></li></li></ul>
	        // instead of:
	        // <ul><li>- - a</li></ul>
	        // So, to prevent it, we will put a marker (¨A)in the beginning of the line
	        // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
	        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
	          return '¨A' + wm2;
	        });

	        // m1 - Leading line or
	        // Has a double return (multi paragraph) or
	        // Has sublist
	        if (m1 || item.search(/\n{2,}/) > -1) {
	          item = showdown.subParser('githubCodeBlocks')(item, options, globals);
	          item = showdown.subParser('blockGamut')(item, options, globals);
	        } else {
	          // Recursion for sub-lists:
	          item = showdown.subParser('lists')(item, options, globals);
	          item = item.replace(/\n$/, ''); // chomp(item)
	          item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
	          // Colapse double linebreaks
	          item = item.replace(/\n\n+/g, '\n\n');
	          // replace double linebreaks with a placeholder
	          item = item.replace(/\n\n/g, '¨B');
	          if (isParagraphed) {
	            item = showdown.subParser('paragraphs')(item, options, globals);
	          } else {
	            item = showdown.subParser('spanGamut')(item, options, globals);
	          }
	          item = item.replace(/¨B/g, '\n\n');
	        }

	        // now we need to remove the marker (¨A)
	        item = item.replace('¨A', '');
	        // we can finally wrap the line in list item tags
	        item = '<li' + bulletStyle + '>' + item + '</li>\n';

	        return item;
	      });

	      // attacklab: strip sentinel
	      listStr = listStr.replace(/¨0/g, '');

	      globals.gListLevel--;

	      if (trimTrailing) {
	        listStr = listStr.replace(/\s+$/, '');
	      }

	      return listStr;
	    }

	    /**
	     * Check and parse consecutive lists (better fix for issue #142)
	     * @param {string} list
	     * @param {string} listType
	     * @param {boolean} trimTrailing
	     * @returns {string}
	     */
	    function parseConsecutiveLists(list, listType, trimTrailing) {
	      // check if we caught 2 or more consecutive lists by mistake
	      // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
	      var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
	          ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
	          counterRxg = listType === 'ul' ? olRgx : ulRgx,
	          result = '';

	      if (list.search(counterRxg) !== -1) {
	        (function parseCL(txt) {
	          var pos = txt.search(counterRxg);
	          if (pos !== -1) {
	            // slice
	            result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

	            // invert counterType and listType
	            listType = listType === 'ul' ? 'ol' : 'ul';
	            counterRxg = listType === 'ul' ? olRgx : ulRgx;

	            //recurse
	            parseCL(txt.slice(pos));
	          } else {
	            result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
	          }
	        })(list);
	      } else {
	        result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
	      }

	      return result;
	    }

	    // add sentinel to hack around khtml/safari bug:
	    // http://bugs.webkit.org/show_bug.cgi?id=11231
	    text += '¨0';

	    if (globals.gListLevel) {
	      text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, list, m2) {
	        var listType = m2.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, true);
	      });
	    } else {
	      text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, m1, list, m3) {
	        var listType = m3.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, false);
	      });
	    }

	    // strip sentinel
	    text = text.replace(/¨0/, '');
	    text = globals.converter._dispatch('lists.after', text, options, globals);
	    return text;
	  });

	  /**
	   * Remove one level of line-leading tabs or spaces
	   */
	  showdown.subParser('outdent', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('outdent.before', text, options, globals);

	    // attacklab: hack around Konqueror 3.5.4 bug:
	    // "----------bug".replace(/^-/g,"") == "bug"
	    text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

	    // attacklab: clean up hack
	    text = text.replace(/¨0/g, '');

	    text = globals.converter._dispatch('outdent.after', text, options, globals);
	    return text;
	  });

	  /**
	   *
	   */
	  showdown.subParser('paragraphs', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('paragraphs.before', text, options, globals);
	    // Strip leading and trailing lines:
	    text = text.replace(/^\n+/g, '');
	    text = text.replace(/\n+$/g, '');

	    var grafs = text.split(/\n{2,}/g),
	        grafsOut = [],
	        end = grafs.length; // Wrap <p> tags

	    for (var i = 0; i < end; i++) {
	      var str = grafs[i];
	      // if this is an HTML marker, copy it
	      if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
	        grafsOut.push(str);

	        // test for presence of characters to prevent empty lines being parsed
	        // as paragraphs (resulting in undesired extra empty paragraphs)
	      } else if (str.search(/\S/) >= 0) {
	        str = showdown.subParser('spanGamut')(str, options, globals);
	        str = str.replace(/^([ \t]*)/g, '<p>');
	        str += '</p>';
	        grafsOut.push(str);
	      }
	    }

	    /** Unhashify HTML blocks */
	    end = grafsOut.length;
	    for (i = 0; i < end; i++) {
	      var blockText = '',
	          grafsOutIt = grafsOut[i],
	          codeFlag = false;
	      // if this is a marker for an html block...
	      while (grafsOutIt.search(/¨(K|G)(\d+)\1/) >= 0) {
	        var delim = RegExp.$1,
	            num = RegExp.$2;

	        if (delim === 'K') {
	          blockText = globals.gHtmlBlocks[num];
	        } else {
	          // we need to check if ghBlock is a false positive
	          if (codeFlag) {
	            // use encoded version of all text
	            blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
	          } else {
	            blockText = globals.ghCodeBlocks[num].codeblock;
	          }
	        }
	        blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

	        grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
	        // Check if grafsOutIt is a pre->code
	        if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
	          codeFlag = true;
	        }
	      }
	      grafsOut[i] = grafsOutIt;
	    }
	    text = grafsOut.join('\n');
	    // Strip leading and trailing lines:
	    text = text.replace(/^\n+/g, '');
	    text = text.replace(/\n+$/g, '');
	    return globals.converter._dispatch('paragraphs.after', text, options, globals);
	  });

	  /**
	   * Run extension
	   */
	  showdown.subParser('runExtension', function (ext, text, options, globals) {
	    'use strict';

	    if (ext.filter) {
	      text = ext.filter(text, globals.converter, options);
	    } else if (ext.regex) {
	      // TODO remove this when old extension loading mechanism is deprecated
	      var re = ext.regex;
	      if (!re instanceof RegExp) {
	        re = new RegExp(re, 'g');
	      }
	      text = text.replace(re, ext.replace);
	    }

	    return text;
	  });

	  /**
	   * These are all the transformations that occur *within* block-level
	   * tags like paragraphs, headers, and list items.
	   */
	  showdown.subParser('spanGamut', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('spanGamut.before', text, options, globals);
	    text = showdown.subParser('codeSpans')(text, options, globals);
	    text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
	    text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

	    // Process anchor and image tags. Images must come first,
	    // because ![foo][f] looks like an anchor.
	    text = showdown.subParser('images')(text, options, globals);
	    text = showdown.subParser('anchors')(text, options, globals);

	    // Make links out of things like `<http://example.com/>`
	    // Must come after _DoAnchors(), because you can use < and >
	    // delimiters in inline links like [this](<url>).
	    text = showdown.subParser('autoLinks')(text, options, globals);
	    text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
	    text = showdown.subParser('italicsAndBold')(text, options, globals);
	    text = showdown.subParser('strikethrough')(text, options, globals);

	    // Do hard breaks
	    if (options.simpleLineBreaks) {
	      // GFM style hard breaks
	      text = text.replace(/\n/g, '<br />\n');
	    } else {
	      // Vanilla hard breaks
	      text = text.replace(/  +\n/g, '<br />\n');
	    }

	    text = globals.converter._dispatch('spanGamut.after', text, options, globals);
	    return text;
	  });

	  showdown.subParser('strikethrough', function (text, options, globals) {
	    'use strict';

	    if (options.strikethrough) {
	      text = globals.converter._dispatch('strikethrough.before', text, options, globals);
	      text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, '<del>$1</del>');
	      text = globals.converter._dispatch('strikethrough.after', text, options, globals);
	    }

	    return text;
	  });

	  /**
	   * Strips link definitions from text, stores the URLs and titles in
	   * hash references.
	   * Link defs are in the form: ^[id]: url "optional title"
	   */
	  showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
	    'use strict';

	    var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;

	    // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	    text += '¨0';

	    text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
	      linkId = linkId.toLowerCase();
	      globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals); // Link IDs are case-insensitive

	      if (blankLines) {
	        // Oops, found blank lines, so it's not a title.
	        // Put back the parenthetical statement we stole.
	        return blankLines + title;
	      } else {
	        if (title) {
	          globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
	        }
	        if (options.parseImgDimensions && width && height) {
	          globals.gDimensions[linkId] = {
	            width: width,
	            height: height
	          };
	        }
	      }
	      // Completely remove the definition from the text
	      return '';
	    });

	    // attacklab: strip sentinel
	    text = text.replace(/¨0/, '');

	    return text;
	  });

	  showdown.subParser('tables', function (text, options, globals) {
	    'use strict';

	    if (!options.tables) {
	      return text;
	    }

	    var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;

	    function parseStyles(sLine) {
	      if (/^:[ \t]*--*$/.test(sLine)) {
	        return ' style="text-align:left;"';
	      } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
	        return ' style="text-align:right;"';
	      } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
	        return ' style="text-align:center;"';
	      } else {
	        return '';
	      }
	    }

	    function parseHeaders(header, style) {
	      var id = '';
	      header = header.trim();
	      if (options.tableHeaderId) {
	        id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
	      }
	      header = showdown.subParser('spanGamut')(header, options, globals);

	      return '<th' + id + style + '>' + header + '</th>\n';
	    }

	    function parseCells(cell, style) {
	      var subText = showdown.subParser('spanGamut')(cell, options, globals);
	      return '<td' + style + '>' + subText + '</td>\n';
	    }

	    function buildTable(headers, cells) {
	      var tb = '<table>\n<thead>\n<tr>\n',
	          tblLgn = headers.length;

	      for (var i = 0; i < tblLgn; ++i) {
	        tb += headers[i];
	      }
	      tb += '</tr>\n</thead>\n<tbody>\n';

	      for (i = 0; i < cells.length; ++i) {
	        tb += '<tr>\n';
	        for (var ii = 0; ii < tblLgn; ++ii) {
	          tb += cells[i][ii];
	        }
	        tb += '</tr>\n';
	      }
	      tb += '</tbody>\n</table>\n';
	      return tb;
	    }

	    text = globals.converter._dispatch('tables.before', text, options, globals);

	    text = text.replace(tableRgx, function (rawTable) {

	      var i,
	          tableLines = rawTable.split('\n');

	      // strip wrong first and last column if wrapped tables are used
	      for (i = 0; i < tableLines.length; ++i) {
	        if (/^ {0,3}\|/.test(tableLines[i])) {
	          tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
	        }
	        if (/\|[ \t]*$/.test(tableLines[i])) {
	          tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
	        }
	      }

	      var rawHeaders = tableLines[0].split('|').map(function (s) {
	        return s.trim();
	      }),
	          rawStyles = tableLines[1].split('|').map(function (s) {
	        return s.trim();
	      }),
	          rawCells = [],
	          headers = [],
	          styles = [],
	          cells = [];

	      tableLines.shift();
	      tableLines.shift();

	      for (i = 0; i < tableLines.length; ++i) {
	        if (tableLines[i].trim() === '') {
	          continue;
	        }
	        rawCells.push(tableLines[i].split('|').map(function (s) {
	          return s.trim();
	        }));
	      }

	      if (rawHeaders.length < rawStyles.length) {
	        return rawTable;
	      }

	      for (i = 0; i < rawStyles.length; ++i) {
	        styles.push(parseStyles(rawStyles[i]));
	      }

	      for (i = 0; i < rawHeaders.length; ++i) {
	        if (showdown.helper.isUndefined(styles[i])) {
	          styles[i] = '';
	        }
	        headers.push(parseHeaders(rawHeaders[i], styles[i]));
	      }

	      for (i = 0; i < rawCells.length; ++i) {
	        var row = [];
	        for (var ii = 0; ii < headers.length; ++ii) {
	          if (showdown.helper.isUndefined(rawCells[i][ii])) {}
	          row.push(parseCells(rawCells[i][ii], styles[ii]));
	        }
	        cells.push(row);
	      }

	      return buildTable(headers, cells);
	    });

	    text = globals.converter._dispatch('tables.after', text, options, globals);

	    return text;
	  });

	  /**
	   * Swap back in all the special characters we've hidden.
	   */
	  showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
	    'use strict';

	    text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

	    text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
	      var charCodeToReplace = parseInt(m1);
	      return String.fromCharCode(charCodeToReplace);
	    });

	    text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
	    return text;
	  });

	  var root = this;

	  // CommonJS/nodeJS Loader
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = showdown;

	    // AMD Loader
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      'use strict';

	      return showdown;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    // Regular Browser loader
	  } else {
	    root.showdown = showdown;
	  }
	}).call(undefined);

	//# sourceMappingURL=showdown.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _prismjs = __webpack_require__(6);

	var _prismjs2 = _interopRequireDefault(_prismjs);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SyntaxHighlighter = function () {
		/**
	  * @constructor
	  */
		function SyntaxHighlighter() {
			_classCallCheck(this, SyntaxHighlighter);

			this.highlighter = _prismjs2.default;
		}

		/**
	  *
	  * @returns {Prism} - syntax highlighter
	  */


		_createClass(SyntaxHighlighter, [{
			key: 'getHighlighter',
			get: function get() {
				return this.highlighter;
			}
		}]);

		return SyntaxHighlighter;
	}();

	exports.default = SyntaxHighlighter;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/* **********************************************
	     Begin prism-core.js
	********************************************** */

	var _self = typeof window !== 'undefined' ? window // if in browser
	: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
	: {} // if in node js
	;

	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */

	var Prism = function () {

		// Private helper vars
		var lang = /\blang(?:uage)?-(\w+)\b/i;
		var uniqueId = 0;

		var _ = _self.Prism = {
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) {
						return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
					} else if (_.util.type(tokens) === 'Array') {
						return tokens.map(_.util.encode);
					} else {
						return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
					}
				},

				type: function type(o) {
					return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
				},

				objId: function objId(obj) {
					if (!obj['__id']) {
						Object.defineProperty(obj, '__id', { value: ++uniqueId });
					}
					return obj['__id'];
				},

				// Deep clone a language definition (e.g. to extend it)
				clone: function clone(o) {
					var type = _.util.type(o);

					switch (type) {
						case 'Object':
							var clone = {};

							for (var key in o) {
								if (o.hasOwnProperty(key)) {
									clone[key] = _.util.clone(o[key]);
								}
							}

							return clone;

						case 'Array':
							// Check for existence for IE8
							return o.map && o.map(function (v) {
								return _.util.clone(v);
							});
					}

					return o;
				}
			},

			languages: {
				extend: function extend(id, redef) {
					var lang = _.util.clone(_.languages[id]);

					for (var key in redef) {
						lang[key] = redef[key];
					}

					return lang;
				},

				/**
	    * Insert a token before another token in a language literal
	    * As this needs to recreate the object (we cannot actually insert before keys in object literals),
	    * we cannot just provide an object, we need anobject and a key.
	    * @param inside The key (or language id) of the parent
	    * @param before The key to insert before. If not provided, the function appends instead.
	    * @param insert Object with the key/value pairs to insert
	    * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
	    */
				insertBefore: function insertBefore(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];

					if (arguments.length == 2) {
						insert = arguments[1];

						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								grammar[newToken] = insert[newToken];
							}
						}

						return grammar;
					}

					var ret = {};

					for (var token in grammar) {

						if (grammar.hasOwnProperty(token)) {

							if (token == before) {

								for (var newToken in insert) {

									if (insert.hasOwnProperty(newToken)) {
										ret[newToken] = insert[newToken];
									}
								}
							}

							ret[token] = grammar[token];
						}
					}

					// Update references in other language definitions
					_.languages.DFS(_.languages, function (key, value) {
						if (value === root[inside] && key != inside) {
							this[key] = ret;
						}
					});

					return root[inside] = ret;
				},

				// Traverse a language definition with Depth First Search
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					for (var i in o) {
						if (o.hasOwnProperty(i)) {
							callback.call(o, i, o[i], type || i);

							if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, null, visited);
							} else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
								visited[_.util.objId(o[i])] = true;
								_.languages.DFS(o[i], callback, i, visited);
							}
						}
					}
				}
			},
			plugins: {},

			highlightAll: function highlightAll(async, callback) {
				var env = {
					callback: callback,
					selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
				};

				_.hooks.run("before-highlightall", env);

				var elements = env.elements || document.querySelectorAll(env.selector);

				for (var i = 0, element; element = elements[i++];) {
					_.highlightElement(element, async === true, env.callback);
				}
			},

			highlightElement: function highlightElement(element, async, callback) {
				// Find language
				var language,
				    grammar,
				    parent = element;

				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
					grammar = _.languages[language];
				}

				// Set language on the element, if not present
				element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

				// Set language on the parent, for styling
				parent = element.parentNode;

				if (/pre/i.test(parent.nodeName)) {
					parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
				}

				var code = element.textContent;

				var env = {
					element: element,
					language: language,
					grammar: grammar,
					code: code
				};

				_.hooks.run('before-sanity-check', env);

				if (!env.code || !env.grammar) {
					if (env.code) {
						env.element.textContent = env.code;
					}
					_.hooks.run('complete', env);
					return;
				}

				_.hooks.run('before-highlight', env);

				if (async && _self.Worker) {
					var worker = new Worker(_.filename);

					worker.onmessage = function (evt) {
						env.highlightedCode = evt.data;

						_.hooks.run('before-insert', env);

						env.element.innerHTML = env.highlightedCode;

						callback && callback.call(env.element);
						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
					};

					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else {
					env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

					_.hooks.run('before-insert', env);

					env.element.innerHTML = env.highlightedCode;

					callback && callback.call(element);

					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				}
			},

			highlight: function highlight(text, grammar, language) {
				var tokens = _.tokenize(text, grammar);
				return Token.stringify(_.util.encode(tokens), language);
			},

			tokenize: function tokenize(text, grammar, language) {
				var Token = _.Token;

				var strarr = [text];

				var rest = grammar.rest;

				if (rest) {
					for (var token in rest) {
						grammar[token] = rest[token];
					}

					delete grammar.rest;
				}

				tokenloop: for (var token in grammar) {
					if (!grammar.hasOwnProperty(token) || !grammar[token]) {
						continue;
					}

					var patterns = grammar[token];
					patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

					for (var j = 0; j < patterns.length; ++j) {
						var pattern = patterns[j],
						    inside = pattern.inside,
						    lookbehind = !!pattern.lookbehind,
						    greedy = !!pattern.greedy,
						    lookbehindLength = 0,
						    alias = pattern.alias;

						if (greedy && !pattern.pattern.global) {
							// Without the global flag, lastIndex won't work
							var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
							pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
						}

						pattern = pattern.pattern || pattern;

						// Don’t cache length as it changes during the loop
						for (var i = 0, pos = 0; i < strarr.length; pos += strarr[i].length, ++i) {

							var str = strarr[i];

							if (strarr.length > text.length) {
								// Something went terribly wrong, ABORT, ABORT!
								break tokenloop;
							}

							if (str instanceof Token) {
								continue;
							}

							pattern.lastIndex = 0;

							var match = pattern.exec(str),
							    delNum = 1;

							// Greedy patterns can override/remove up to two previously matched tokens
							if (!match && greedy && i != strarr.length - 1) {
								pattern.lastIndex = pos;
								match = pattern.exec(text);
								if (!match) {
									break;
								}

								var from = match.index + (lookbehind ? match[1].length : 0),
								    to = match.index + match[0].length,
								    k = i,
								    p = pos;

								for (var len = strarr.length; k < len && p < to; ++k) {
									p += strarr[k].length;
									// Move the index i to the element in strarr that is closest to from
									if (from >= p) {
										++i;
										pos = p;
									}
								}

								/*
	        * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
	        * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
	        */
								if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
									continue;
								}

								// Number of tokens to delete and replace with the new match
								delNum = k - i;
								str = text.slice(pos, p);
								match.index -= pos;
							}

							if (!match) {
								continue;
							}

							if (lookbehind) {
								lookbehindLength = match[1].length;
							}

							var from = match.index + lookbehindLength,
							    match = match[0].slice(lookbehindLength),
							    to = from + match.length,
							    before = str.slice(0, from),
							    after = str.slice(to);

							var args = [i, delNum];

							if (before) {
								args.push(before);
							}

							var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

							args.push(wrapped);

							if (after) {
								args.push(after);
							}

							Array.prototype.splice.apply(strarr, args);
						}
					}
				}

				return strarr;
			},

			hooks: {
				all: {},

				add: function add(name, callback) {
					var hooks = _.hooks.all;

					hooks[name] = hooks[name] || [];

					hooks[name].push(callback);
				},

				run: function run(name, env) {
					var callbacks = _.hooks.all[name];

					if (!callbacks || !callbacks.length) {
						return;
					}

					for (var i = 0, callback; callback = callbacks[i++];) {
						callback(env);
					}
				}
			}
		};

		var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
			this.type = type;
			this.content = content;
			this.alias = alias;
			// Copy of the full string this token was created from
			this.length = (matchedStr || "").length | 0;
			this.greedy = !!greedy;
		};

		Token.stringify = function (o, language, parent) {
			if (typeof o == 'string') {
				return o;
			}

			if (_.util.type(o) === 'Array') {
				return o.map(function (element) {
					return Token.stringify(element, language, o);
				}).join('');
			}

			var env = {
				type: o.type,
				content: Token.stringify(o.content, language, parent),
				tag: 'span',
				classes: ['token', o.type],
				attributes: {},
				language: language,
				parent: parent
			};

			if (env.type == 'comment') {
				env.attributes['spellcheck'] = 'true';
			}

			if (o.alias) {
				var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
				Array.prototype.push.apply(env.classes, aliases);
			}

			_.hooks.run('wrap', env);

			var attributes = Object.keys(env.attributes).map(function (name) {
				return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
			}).join(' ');

			return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
		};

		if (!_self.document) {
			if (!_self.addEventListener) {
				// in Node.js
				return _self.Prism;
			}
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data),
				    lang = message.language,
				    code = message.code,
				    immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);

			return _self.Prism;
		}

		//Get current script and highlight
		var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

		if (script) {
			_.filename = script.src;

			if (document.addEventListener && !script.hasAttribute('data-manual')) {
				if (document.readyState !== "loading") {
					if (window.requestAnimationFrame) {
						window.requestAnimationFrame(_.highlightAll);
					} else {
						window.setTimeout(_.highlightAll, 16);
					}
				} else {
					document.addEventListener('DOMContentLoaded', _.highlightAll);
				}
			}
		}

		return _self.Prism;
	}();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}

	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}

	/* **********************************************
	     Begin prism-markup.js
	********************************************** */

	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/i,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}

			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};

	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function (env) {

		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});

	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;

	/* **********************************************
	     Begin prism-css.js
	********************************************** */

	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': {
			pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}

	/* **********************************************
	     Begin prism-clike.js
	********************************************** */

	Prism.languages.clike = {
		'comment': [{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};

	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */

	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	});

	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});

	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}

	Prism.languages.js = Prism.languages.javascript;

	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */

	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}

		self.Prism.fileHighlight = function () {

			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};

			if (Array.prototype.forEach) {
				// Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');

					var language,
					    parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}

					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}

					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}

					var code = document.createElement('code');
					code.className = 'language-' + language;

					pre.textContent = '';

					code.textContent = 'Loading…';

					pre.appendChild(code);

					var xhr = new XMLHttpRequest();

					xhr.open('GET', src, true);

					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {

							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;

								Prism.highlightElement(code);
							} else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							} else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};

					xhr.send(null);
				});
			}
		};

		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(14);

	__webpack_require__(15);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	__webpack_require__(21);

	__webpack_require__(22);

	__webpack_require__(23);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(29);

	__webpack_require__(30);

	__webpack_require__(31);

	__webpack_require__(32);

	__webpack_require__(33);

	__webpack_require__(34);

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.apacheconf = {
		'comment': /#.*/,
		'directive-inline': {
			pattern: /^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/mi,
			lookbehind: true,
			alias: 'property'
		},
		'directive-block': {
			pattern: /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
			inside: {
				'directive-block': {
					pattern: /^<\/?\w+/,
					inside: {
						'punctuation': /^<\/?/
					},
					alias: 'tag'
				},
				'directive-block-parameter': {
					pattern: /.*[^>]/,
					inside: {
						'punctuation': /:/,
						'string': {
							pattern: /("|').*\1/,
							inside: {
								'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
							}
						}
					},
					alias: 'attr-value'
				},
				'punctuation': />/
			},
			alias: 'tag'
		},
		'directive-flags': {
			pattern: /\[(\w,?)+\]/,
			alias: 'keyword'
		},
		'string': {
			pattern: /("|').*\1/,
			inside: {
				'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
			}
		},
		'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
		'regex': /\^?.*\$|\^.*\$?/
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	(function (Prism) {
		var insideString = {
			variable: [
			// Arithmetic Environment
			{
				pattern: /\$?\(\([\w\W]+?\)\)/,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					variable: [{
						pattern: /(^\$\(\([\w\W]+)\)\)/,
						lookbehind: true
					}, /^\$\(\(/],
					number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					punctuation: /\(\(?|\)\)?|,|;/
				}
			},
			// Command Substitution
			{
				pattern: /\$\([^)]+\)|`[^`]+`/,
				inside: {
					variable: /^\$\(|^`|\)$|`$/
				}
			}, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
		};

		Prism.languages.bash = {
			'shebang': {
				pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
				alias: 'important'
			},
			'comment': {
				pattern: /(^|[^"{\\])#.*/,
				lookbehind: true
			},
			'string': [
			//Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
				lookbehind: true,
				greedy: true,
				inside: insideString
			}, {
				pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
				greedy: true,
				inside: insideString
			}],
			'variable': insideString.variable,
			// Originally based on http://ss64.com/bash/
			'function': {
				pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'keyword': {
				pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'boolean': {
				pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
				lookbehind: true
			},
			'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
			'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
		};

		var inside = insideString.variable[1].inside;
		inside['function'] = Prism.languages.bash['function'];
		inside.keyword = Prism.languages.bash.keyword;
		inside.boolean = Prism.languages.bash.boolean;
		inside.operator = Prism.languages.bash.operator;
		inside.punctuation = Prism.languages.bash.punctuation;
	})(Prism);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.c = Prism.languages.extend('clike', {
		'keyword': /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
		'operator': /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
	});

	Prism.languages.insertBefore('c', 'string', {
		'macro': {
			// allow for multiline macro definitions
			// spaces after the # character compile fine with gcc
			pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight the path of the include statement as a string
				'string': {
					pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
					lookbehind: true
				},
				// highlight macro directives as keywords
				'directive': {
					pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		},
		// highlight predefined macros as constants
		'constant': /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
	});

	delete Prism.languages.c['class-name'];
	delete Prism.languages.c['boolean'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	(function (Prism) {

		// Ignore comments starting with { to privilege string interpolation highlighting
		var comment = /#(?!\{).+/,
		    interpolation = {
			pattern: /#\{[^}]+\}/,
			alias: 'variable'
		};

		Prism.languages.coffeescript = Prism.languages.extend('javascript', {
			'comment': comment,
			'string': [

			// Strings are multiline
			{
				pattern: /'(?:\\?[^\\])*?'/,
				greedy: true
			}, {
				// Strings are multiline
				pattern: /"(?:\\?[^\\])*?"/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			}],
			'keyword': /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
			'class-member': {
				pattern: /@(?!\d)\w+/,
				alias: 'variable'
			}
		});

		Prism.languages.insertBefore('coffeescript', 'comment', {
			'multiline-comment': {
				pattern: /###[\s\S]+?###/,
				alias: 'comment'
			},

			// Block regexp can contain comments and interpolation
			'block-regex': {
				pattern: /\/{3}[\s\S]*?\/{3}/,
				alias: 'regex',
				inside: {
					'comment': comment,
					'interpolation': interpolation
				}
			}
		});

		Prism.languages.insertBefore('coffeescript', 'string', {
			'inline-javascript': {
				pattern: /`(?:\\?[\s\S])*?`/,
				inside: {
					'delimiter': {
						pattern: /^`|`$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},

			// Block strings
			'multiline-string': [{
				pattern: /'''[\s\S]*?'''/,
				greedy: true,
				alias: 'string'
			}, {
				pattern: /"""[\s\S]*?"""/,
				greedy: true,
				alias: 'string',
				inside: {
					interpolation: interpolation
				}
			}]

		});

		Prism.languages.insertBefore('coffeescript', 'keyword', {
			// Object property
			'property': /(?!\d)\w+(?=\s*:(?!:))/
		});

		delete Prism.languages.coffeescript['template-string'];
	})(Prism);

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.cpp = Prism.languages.extend('c', {
		'keyword': /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
		'boolean': /\b(true|false)\b/,
		'operator': /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
	});

	Prism.languages.insertBefore('cpp', 'keyword', {
		'class-name': {
			pattern: /(class\s+)[a-z0-9_]+/i,
			lookbehind: true
		}
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.csharp = Prism.languages.extend('clike', {
		'keyword': /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
		'string': [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
		'number': /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
	});

	Prism.languages.insertBefore('csharp', 'keyword', {
		'generic-method': {
			pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
			alias: 'function',
			inside: {
				keyword: Prism.languages.csharp.keyword,
				punctuation: /[<>(),.:]/
			}
		},
		'preprocessor': {
			pattern: /(^\s*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': {
			pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.git = {
		/*
	  * A simple one line comment like in a git status command
	  * For instance:
	  * $ git status
	  * # On branch infinite-scroll
	  * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
	  * # and have 1 and 2 different commits each, respectively.
	  * nothing to commit (working directory clean)
	  */
		'comment': /^#.*/m,

		/*
	  * Regexp to match the changed lines in a git diff output. Check the example below.
	  */
		'deleted': /^[-–].*/m,
		'inserted': /^\+.*/m,

		/*
	  * a string (double and simple quote)
	  */
		'string': /("|')(\\?.)*?\1/m,

		/*
	  * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
	  * For instance:
	  * $ git add file.txt
	  */
		'command': {
			pattern: /^.*\$ git .*$/m,
			inside: {
				/*
	    * A git command can contain a parameter starting by a single or a double dash followed by a string
	    * For instance:
	    * $ git diff --cached
	    * $ git log -p
	    */
				'parameter': /\s(--|-)\w+/m
			}
		},

		/*
	  * Coordinates displayed in a git diff command
	  * For instance:
	  * $ git diff
	  * diff --git file.txt file.txt
	  * index 6214953..1d54a52 100644
	  * --- file.txt
	  * +++ file.txt
	  * @@ -1 +1,2 @@
	  * -Here's my tetx file
	  * +Here's my text file
	  * +And this is the second line
	  */
		'coord': /^@@.*@@$/m,

		/*
	  * Match a "commit [SHA1]" line in a git log output.
	  * For instance:
	  * $ git log
	  * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
	  * Author: lgiraudel
	  * Date:   Mon Feb 17 11:18:34 2014 +0100
	  *
	  *     Add of a new line
	  */
		'commit_sha1': /^commit \w{40}$/m
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.groovy = Prism.languages.extend('clike', {
		'keyword': /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
		'string': [{
			pattern: /("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,
			greedy: true
		}, {
			pattern: /("|'|\/)(?:\\?.)*?\1/,
			greedy: true
		}],
		'number': /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
		'operator': {
			pattern: /(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
			lookbehind: true
		},
		'punctuation': /\.+|[{}[\];(),:$]/
	});

	Prism.languages.insertBefore('groovy', 'string', {
		'shebang': {
			pattern: /#!.+/,
			alias: 'comment'
		}
	});

	Prism.languages.insertBefore('groovy', 'punctuation', {
		'spock-block': /\b(setup|given|when|then|and|cleanup|expect|where):/
	});

	Prism.languages.insertBefore('groovy', 'function', {
		'annotation': {
			alias: 'punctuation',
			pattern: /(^|[^.])@\w+/,
			lookbehind: true
		}
	});

	// Handle string interpolation
	Prism.hooks.add('wrap', function (env) {
		if (env.language === 'groovy' && env.type === 'string') {
			var delimiter = env.content[0];

			if (delimiter != "'") {
				var pattern = /([^\\])(\$(\{.*?\}|[\w\.]+))/;
				if (delimiter === '$') {
					pattern = /([^\$])(\$(\{.*?\}|[\w\.]+))/;
				}

				// To prevent double HTML-encoding we have to decode env.content first
				env.content = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');

				env.content = Prism.highlight(env.content, {
					'expression': {
						pattern: pattern,
						lookbehind: true,
						inside: Prism.languages.groovy
					}
				});

				env.classes.push(delimiter === '/' ? 'regex' : 'gstring');
			}
		}
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.http = {
		'request-line': {
			pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
			inside: {
				// HTTP Verb
				property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
				// Path or query argument
				'attr-name': /:\w+/
			}
		},
		'response-status': {
			pattern: /^HTTP\/1.[01] [0-9]+.*/m,
			inside: {
				// Status, e.g. 200 OK
				property: {
					pattern: /(^HTTP\/1.[01] )[0-9]+.*/i,
					lookbehind: true
				}
			}
		},
		// HTTP header name
		'header-name': {
			pattern: /^[\w-]+:(?=.)/m,
			alias: 'keyword'
		}
	};

	// Create a mapping of Content-Type headers to language definitions
	var httpLanguages = {
		'application/json': Prism.languages.javascript,
		'application/xml': Prism.languages.markup,
		'text/xml': Prism.languages.markup,
		'text/html': Prism.languages.markup
	};

	// Insert each content type parser that has its associated language
	// currently loaded.
	for (var contentType in httpLanguages) {
		if (httpLanguages[contentType]) {
			var options = {};
			options[contentType] = {
				pattern: new RegExp('(content-type:\\s*' + contentType + '[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*', 'i'),
				lookbehind: true,
				inside: {
					rest: httpLanguages[contentType]
				}
			};
			Prism.languages.insertBefore('http', 'header-name', options);
		}
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	(function (Prism) {
		// TODO:
		// - Add CSS highlighting inside <style> tags
		// - Add support for multi-line code blocks
		// - Add support for interpolation #{} and !{}
		// - Add support for tag interpolation #[]
		// - Add explicit support for plain text using |
		// - Add support for markup embedded in plain text

		Prism.languages.jade = {

			// Multiline stuff should appear before the rest

			// This handles both single-line and multi-line comments
			'comment': {
				pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
				lookbehind: true
			},

			// All the tag-related part is in lookbehind
			// so that it can be highlighted by the "tag" pattern
			'multiline-script': {
				pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
				lookbehind: true,
				inside: {
					rest: Prism.languages.javascript
				}
			},

			// See at the end of the file for known filters
			'filter': {
				pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
				lookbehind: true,
				inside: {
					'filter-name': {
						pattern: /^:[\w-]+/,
						alias: 'variable'
					}
				}
			},

			'multiline-plain-text': {
				pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
				lookbehind: true
			},
			'markup': {
				pattern: /(^[\t ]*)<.+/m,
				lookbehind: true,
				inside: {
					rest: Prism.languages.markup
				}
			},
			'doctype': {
				pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
				lookbehind: true
			},

			// This handle all conditional and loop keywords
			'flow-control': {
				pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
				lookbehind: true,
				inside: {
					'each': {
						pattern: /^each .+? in\b/,
						inside: {
							'keyword': /\b(?:each|in)\b/,
							'punctuation': /,/
						}
					},
					'branch': {
						pattern: /^(?:if|unless|else|case|when|default|while)\b/,
						alias: 'keyword'
					},
					rest: Prism.languages.javascript
				}
			},
			'keyword': {
				pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
				lookbehind: true
			},
			'mixin': [
			// Declaration
			{
				pattern: /(^[\t ]*)mixin .+/m,
				lookbehind: true,
				inside: {
					'keyword': /^mixin/,
					'function': /\w+(?=\s*\(|\s*$)/,
					'punctuation': /[(),.]/
				}
			},
			// Usage
			{
				pattern: /(^[\t ]*)\+.+/m,
				lookbehind: true,
				inside: {
					'name': {
						pattern: /^\+\w+/,
						alias: 'function'
					},
					'rest': Prism.languages.javascript
				}
			}],
			'script': {
				pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
				lookbehind: true,
				inside: {
					rest: Prism.languages.javascript
				}
			},

			'plain-text': {
				pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
				lookbehind: true
			},
			'tag': {
				pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
				lookbehind: true,
				inside: {
					'attributes': [{
						pattern: /&[^(]+\([^)]+\)/,
						inside: {
							rest: Prism.languages.javascript
						}
					}, {
						pattern: /\([^)]+\)/,
						inside: {
							'attr-value': {
								pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
								lookbehind: true,
								inside: {
									rest: Prism.languages.javascript
								}
							},
							'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
							'punctuation': /[!=(),]+/
						}
					}],
					'punctuation': /:/
				}
			},
			'code': [{
				pattern: /(^[\t ]*(?:-|!?=)).+/m,
				lookbehind: true,
				inside: {
					rest: Prism.languages.javascript
				}
			}],
			'punctuation': /[.\-!=|]+/
		};

		var filter_pattern = '(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+';

		// Non exhaustive list of available filters and associated languages
		var filters = [{ filter: 'atpl', language: 'twig' }, { filter: 'coffee', language: 'coffeescript' }, 'ejs', 'handlebars', 'hogan', 'less', 'livescript', 'markdown', 'mustache', 'plates', { filter: 'sass', language: 'scss' }, 'stylus', 'swig'];
		var all_filters = {};
		for (var i = 0, l = filters.length; i < l; i++) {
			var filter = filters[i];
			filter = typeof filter === 'string' ? { filter: filter, language: filter } : filter;
			if (Prism.languages[filter.language]) {
				all_filters['filter-' + filter.filter] = {
					pattern: RegExp(filter_pattern.replace('{{filter_name}}', filter.filter), 'm'),
					lookbehind: true,
					inside: {
						'filter-name': {
							pattern: /^:[\w-]+/,
							alias: 'variable'
						},
						rest: Prism.languages[filter.language]
					}
				};
			}
		}

		Prism.languages.insertBefore('jade', 'filter', all_filters);
	})(Prism);

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.java = Prism.languages.extend('clike', {
		'keyword': /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
		'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
		'operator': {
			pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('java', 'function', {
		'annotation': {
			alias: 'punctuation',
			pattern: /(^|[^.])@\w+/,
			lookbehind: true
		}
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	});

	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});

	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}

	Prism.languages.js = Prism.languages.javascript;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.json = {
	    'property': /"(?:\\.|[^|"])*"(?=\s*:)/ig,
	    'string': /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
	    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
	    'punctuation': /[{}[\]);,]/g,
	    'operator': /:/g,
	    'boolean': /\b(true|false)\b/gi,
	    'null': /\bnull\b/gi
	};

	Prism.languages.jsonp = Prism.languages.json;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	(function (Prism) {
		var funcPattern = /\\([^a-z()[\]]|[a-z\*]+)/i,
		    insideEqu = {
			'equation-command': {
				pattern: funcPattern,
				alias: 'regex'
			}
		};

		Prism.languages.latex = {
			'comment': /%.*/m,
			// the verbatim environment prints whitespace to the document
			'cdata': {
				pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
				lookbehind: true
			},
			/*
	   * equations can be between $ $ or \( \) or \[ \]
	   * (all are multiline)
	   */
			'equation': [{
				pattern: /\$(?:\\?[\w\W])*?\$|\\\((?:\\?[\w\W])*?\\\)|\\\[(?:\\?[\w\W])*?\\\]/,
				inside: insideEqu,
				alias: 'string'
			}, {
				pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
				lookbehind: true,
				inside: insideEqu,
				alias: 'string'
			}],
			/*
	   * arguments which are keywords or references are highlighted
	   * as keywords
	   */
			'keyword': {
				pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
				lookbehind: true
			},
			'url': {
				pattern: /(\\url\{)[^}]+(?=\})/,
				lookbehind: true
			},
			/*
	   * section or chapter headlines are highlighted as bold so that
	   * they stand out more
	   */
			'headline': {
				pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
				lookbehind: true,
				alias: 'class-name'
			},
			'function': {
				pattern: funcPattern,
				alias: 'selector'
			},
			'punctuation': /[[\]{}&]/
		};
	})(Prism);

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	/* FIXME :
	 :extend() is not handled specifically : its highlighting is buggy.
	 Mixin usage must be inside a ruleset to be highlighted.
	 At-rules (e.g. import) containing interpolations are buggy.
	 Detached rulesets are highlighted as at-rules.
	 A comment before a mixin usage prevents the latter to be properly highlighted.
	 */

	Prism.languages.less = Prism.languages.extend('css', {
		'comment': [/\/\*[\w\W]*?\*\//, {
			pattern: /(^|[^\\])\/\/.*/,
			lookbehind: true
		}],
		'atrule': {
			pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
			inside: {
				'punctuation': /[:()]/
			}
		},
		// selectors and mixins are considered the same
		'selector': {
			pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
			inside: {
				// mixin parameters
				'variable': /@+[\w-]+/
			}
		},

		'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
		'punctuation': /[{}();:,]/,
		'operator': /[+\-*\/]/
	});

	// Invert function and punctuation positions
	Prism.languages.insertBefore('less', 'punctuation', {
		'function': Prism.languages.less.function
	});

	Prism.languages.insertBefore('less', 'property', {
		'variable': [
		// Variable declaration (the colon must be consumed!)
		{
			pattern: /@[\w-]+\s*:/,
			inside: {
				"punctuation": /:/
			}
		},

		// Variable usage
		/@@?[\w-]+/],
		'mixin-usage': {
			pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
			lookbehind: true,
			alias: 'function'
		}
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.markdown = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('markdown', 'prolog', {
		'blockquote': {
			// > ...
			pattern: /^>(?:[\t ]*>)*/m,
			alias: 'punctuation'
		},
		'code': [{
			// Prefixed by 4 spaces or 1 tab
			pattern: /^(?: {4}|\t).+/m,
			alias: 'keyword'
		}, {
			// `code`
			// ``code``
			pattern: /``.+?``|`[^`\n]+`/,
			alias: 'keyword'
		}],
		'title': [{
			// title 1
			// =======

			// title 2
			// -------
			pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
			alias: 'important',
			inside: {
				punctuation: /==+$|--+$/
			}
		}, {
			// # title 1
			// ###### title 6
			pattern: /(^\s*)#+.+/m,
			lookbehind: true,
			alias: 'important',
			inside: {
				punctuation: /^#+|#+$/
			}
		}],
		'hr': {
			// ***
			// ---
			// * * *
			// -----------
			pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'list': {
			// * item
			// + item
			// - item
			// 1. item
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: true,
			alias: 'punctuation'
		},
		'url-reference': {
			// [id]: http://example.com "Optional title"
			// [id]: http://example.com 'Optional title'
			// [id]: http://example.com (Optional title)
			// [id]: <http://example.com> "Optional title"
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				'variable': {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: true
				},
				'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				'punctuation': /^[\[\]!:]|[<>]/
			},
			alias: 'url'
		},
		'bold': {
			// **strong**
			// __strong__

			// Allow only one line break
			pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^\*\*|^__|\*\*$|__$/
			}
		},
		'italic': {
			// *em*
			// _em_

			// Allow only one line break
			pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
			lookbehind: true,
			inside: {
				'punctuation': /^[*_]|[*_]$/
			}
		},
		'url': {
			// [example](http://example.com "Optional title")
			// [example] [id]
			pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
			inside: {
				'variable': {
					pattern: /(!?\[)[^\]]+(?=\]$)/,
					lookbehind: true
				},
				'string': {
					pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
				}
			}
		}
	});

	Prism.languages.markdown['bold'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['italic'].inside['url'] = Prism.util.clone(Prism.languages.markdown['url']);
	Prism.languages.markdown['bold'].inside['italic'] = Prism.util.clone(Prism.languages.markdown['italic']);
	Prism.languages.markdown['italic'].inside['bold'] = Prism.util.clone(Prism.languages.markdown['bold']);

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/i,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}

			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};

	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function (env) {

		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});

	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.nginx = Prism.languages.extend('clike', {
	        'comment': {
	                pattern: /(^|[^"{\\])#.*/,
	                lookbehind: true
	        },
	        'keyword': /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
	});

	Prism.languages.insertBefore('nginx', 'keyword', {
	        'variable': /\$[a-z_]+/i
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
	 * Modified by Miles Johnson: http://milesj.me
	 *
	 * Supports the following:
	 * 		- Extends clike syntax
	 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
	 * 		- Smarter constant and function matching
	 *
	 * Adds the following new token classes:
	 * 		constant, delimiter, variable, function, package
	 */

	Prism.languages.php = Prism.languages.extend('clike', {
		'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
		'constant': /\b[A-Z0-9_]{2,}\b/,
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
			lookbehind: true,
			greedy: true
		}
	});

	// Shell-like comments are matched after strings, because they are less
	// common than strings containing hashes...
	Prism.languages.insertBefore('php', 'class-name', {
		'shell-comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true,
			alias: 'comment'
		}
	});

	Prism.languages.insertBefore('php', 'keyword', {
		'delimiter': /\?>|<\?(?:php)?/i,
		'variable': /\$\w+\b/i,
		'package': {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: true,
			inside: {
				punctuation: /\\/
			}
		}
	});

	// Must be defined after the function pattern
	Prism.languages.insertBefore('php', 'operator', {
		'property': {
			pattern: /(->)[\w]+/,
			lookbehind: true
		}
	});

	// Add HTML support of the markup language exists
	if (Prism.languages.markup) {

		// Tokenize all inline PHP blocks that are wrapped in <?php ?>
		// This allows for easy PHP + markup highlighting
		Prism.hooks.add('before-highlight', function (env) {
			if (env.language !== 'php') {
				return;
			}

			env.tokenStack = [];

			env.backupCode = env.code;
			env.code = env.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/ig, function (match) {
				env.tokenStack.push(match);

				return '{{{PHP' + env.tokenStack.length + '}}}';
			});
		});

		// Restore env.code for other plugins (e.g. line-numbers)
		Prism.hooks.add('before-insert', function (env) {
			if (env.language === 'php') {
				env.code = env.backupCode;
				delete env.backupCode;
			}
		});

		// Re-insert the tokens after highlighting
		Prism.hooks.add('after-highlight', function (env) {
			if (env.language !== 'php') {
				return;
			}

			for (var i = 0, t; t = env.tokenStack[i]; i++) {
				// The replace prevents $$, $&, $`, $', $n, $nn from being interpreted as special patterns
				env.highlightedCode = env.highlightedCode.replace('{{{PHP' + (i + 1) + '}}}', Prism.highlight(t, env.grammar, 'php').replace(/\$/g, '$$$$'));
			}

			env.element.innerHTML = env.highlightedCode;
		});

		// Wrap tokens in classes that are missing them
		Prism.hooks.add('wrap', function (env) {
			if (env.language === 'php' && env.type === 'markup') {
				env.content = env.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, "<span class=\"token php\">$1</span>");
			}
		});

		// Add the rules before all others
		Prism.languages.insertBefore('php', 'comment', {
			'markup': {
				pattern: /<[^?]\/?(.*?)>/,
				inside: Prism.languages.markup
			},
			'php': /\{\{\{PHP[0-9]+\}\}\}/
		});
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.properties = {
		'comment': /^[ \t]*[#!].*$/m,
		'attr-value': {
			pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|.)+/m,
			lookbehind: true
		},
		'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[ =:]| )/m,
		'punctuation': /[=:]/
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.python = {
		'triple-quoted-string': {
			pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
			alias: 'string'
		},
		'comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true
		},
		'string': {
			pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
			greedy: true
		},
		'function': {
			pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
			lookbehind: true
		},
		'class-name': {
			pattern: /(\bclass\s+)[a-z0-9_]+/i,
			lookbehind: true
		},
		'keyword': /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
		'boolean': /\b(?:True|False)\b/,
		'number': /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
		'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
		'punctuation': /[{}[\];(),.:]/
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.scss = Prism.languages.extend('css', {
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
			lookbehind: true
		},
		'atrule': {
			pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		// url, compassified
		'url': /(?:[-a-z]+-)*url(?=\()/i,
		// CSS selector regex is not appropriate for Sass
		// since there can be lot more things (var, @ directive, nesting..)
		// a selector must start at the end of a property or after a brace (end of other rules or nesting)
		// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
		// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
		// can "pass" as a selector- e.g: proper#{$erty})
		// this one was hard to do, so please be careful if you edit this one :)
		'selector': {
			// Initial look-ahead is used to prevent matching of blank selectors
			pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
			inside: {
				'parent': {
					pattern: /&/,
					alias: 'important'
				},
				'placeholder': /%[-_\w]+/,
				'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
			}
		}
	});

	Prism.languages.insertBefore('scss', 'atrule', {
		'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
			pattern: /( +)(?:from|through)(?= )/,
			lookbehind: true
		}]
	});

	Prism.languages.scss.property = {
		pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
		inside: {
			'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
		}
	};

	Prism.languages.insertBefore('scss', 'important', {
		// var and interpolated vars
		'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
	});

	Prism.languages.insertBefore('scss', 'function', {
		'placeholder': {
			pattern: /%[-_\w]+/,
			alias: 'selector'
		},
		'statement': {
			pattern: /\B!(?:default|optional)\b/i,
			alias: 'keyword'
		},
		'boolean': /\b(?:true|false)\b/,
		'null': /\bnull\b/,
		'operator': {
			pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
			lookbehind: true
		}
	});

	Prism.languages.scss['atrule'].inside.rest = Prism.util.clone(Prism.languages.scss);

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	(function (Prism) {
		var inside = {
			'url': /url\((["']?).*?\1\)/i,
			'string': /("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,
			'interpolation': null, // See below
			'func': null, // See below
			'important': /\B!(?:important|optional)\b/i,
			'keyword': {
				pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
				lookbehind: true
			},
			'hexcode': /#[\da-f]{3,6}/i,
			'number': /\b\d+(?:\.\d+)?%?/,
			'boolean': /\b(?:true|false)\b/,
			'operator': [
			// We want non-word chars around "-" because it is
			// accepted in property names.
			/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
			'punctuation': /[{}()\[\];:,]/
		};

		inside['interpolation'] = {
			pattern: /\{[^\r\n}:]+\}/,
			alias: 'variable',
			inside: Prism.util.clone(inside)
		};
		inside['func'] = {
			pattern: /[\w-]+\([^)]*\).*/,
			inside: {
				'function': /^[^(]+/,
				rest: Prism.util.clone(inside)
			}
		};

		Prism.languages.stylus = {
			'comment': {
				pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*)/,
				lookbehind: true
			},
			'atrule-declaration': {
				pattern: /(^\s*)@.+/m,
				lookbehind: true,
				inside: {
					'atrule': /^@[\w-]+/,
					rest: inside
				}
			},
			'variable-declaration': {
				pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
				lookbehind: true,
				inside: {
					'variable': /^\S+/,
					rest: inside
				}
			},

			'statement': {
				pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
				lookbehind: true,
				inside: {
					keyword: /^\S+/,
					rest: inside
				}
			},

			// A property/value pair cannot end with a comma or a brace
			// It cannot have indented content unless it ended with a semicolon
			'property-declaration': {
				pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
				lookbehind: true,
				inside: {
					'property': {
						pattern: /^[^\s:]+/,
						inside: {
							'interpolation': inside.interpolation
						}
					},
					rest: inside
				}
			},

			// A selector can contain parentheses only as part of a pseudo-element
			// It can span multiple lines.
			// It must end with a comma or an accolade or have indented content.
			'selector': {
				pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
				lookbehind: true,
				inside: {
					'interpolation': inside.interpolation,
					'punctuation': /[{},]/
				}
			},

			'func': inside.func,
			'string': inside.string,
			'interpolation': inside.interpolation,
			'punctuation': /[{}()\[\];:.]/
		};
	})(Prism);

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.typescript = Prism.languages.extend('javascript', {
		'keyword': /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
	});

	Prism.languages.ts = Prism.languages.typescript;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.wiki = Prism.languages.extend('markup', {
		'block-comment': {
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true,
			alias: 'comment'
		},
		'heading': {
			pattern: /^(=+).+?\1/m,
			inside: {
				'punctuation': /^=+|=+$/,
				'important': /.+/
			}
		},
		'emphasis': {
			// TODO Multi-line
			pattern: /('{2,5}).+?\1/,
			inside: {
				'bold italic': {
					pattern: /(''''').+?(?=\1)/,
					lookbehind: true
				},
				'bold': {
					pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
					lookbehind: true
				},
				'italic': {
					pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
					lookbehind: true
				},
				'punctuation': /^''+|''+$/
			}
		},
		'hr': {
			pattern: /^-{4,}/m,
			alias: 'punctuation'
		},
		'url': [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
		'variable': [/__[A-Z]+__/,
		// FIXME Nested structures should be handled
		// {{formatnum:{{#expr:{{{3}}}}}}}
		/\{{3}.+?\}{3}/, /\{\{.+?}}/],
		'symbol': [/^#redirect/im, /~{3,5}/],
		// Handle table attrs:
		// {|
		// ! style="text-align:left;"| Item
		// |}
		'table-tag': {
			pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
			lookbehind: true,
			inside: {
				'table-bar': {
					pattern: /\|$/,
					alias: 'punctuation'
				},
				rest: Prism.languages.markup['tag'].inside
			}
		},
		'punctuation': /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
	});

	Prism.languages.insertBefore('wiki', 'tag', {
		// Prevent highlighting inside <nowiki>, <source> and <pre> tags
		'nowiki': {
			pattern: /<(nowiki|pre|source)\b[\w\W]*?>[\w\W]*?<\/\1>/i,
			inside: {
				'tag': {
					pattern: /<(?:nowiki|pre|source)\b[\w\W]*?>|<\/(?:nowiki|pre|source)>/i,
					inside: Prism.languages.markup['tag'].inside
				}
			}
		}
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Prism.languages.yaml = {
		'scalar': {
			pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
			lookbehind: true,
			alias: 'string'
		},
		'comment': /#.*/,
		'key': {
			pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
			lookbehind: true,
			alias: 'atrule'
		},
		'directive': {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: true,
			alias: 'important'
		},
		'datetime': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
			lookbehind: true,
			alias: 'number'
		},
		'boolean': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
			lookbehind: true,
			alias: 'important'
		},
		'null': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
			lookbehind: true,
			alias: 'important'
		},
		'string': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
			lookbehind: true
		},
		'number': {
			pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
			lookbehind: true
		},
		'tag': /![^\s]+/,
		'important': /[&*][\w]+/,
		'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLElement2 = __webpack_require__(36);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextareaEditor = function (_HTMLElement) {
		_inherits(TextareaEditor, _HTMLElement);

		/**
	  * Represents TextareaEditor
	  *
	  * @constructor
	  * @param {String} className
	  * @param {Element} parent
	  */
		function TextareaEditor(className, parent) {
			_classCallCheck(this, TextareaEditor);

			return _possibleConstructorReturn(this, (TextareaEditor.__proto__ || Object.getPrototypeOf(TextareaEditor)).call(this, 'textarea', className, parent));
		}

		/**
	  * Get the initialized editor element
	  *
	  * @returns {Element} - element of the editor
	  */


		_createClass(TextareaEditor, [{
			key: 'getContent',


			/**
	   * Get the content of the editor
	   *
	   * @returns {String} - the content of editor
	   */
			value: function getContent() {
				return this.element.value;
			}

			/**
	   * Set the content of the editor
	   *
	   * @param {String} content - content for the editor
	   */

		}, {
			key: 'setContent',
			value: function setContent(content) {
				this.element.value = content;
			}

			/**
	   * Alternative for getContent()
	   * @see getContent
	   *
	   * @returns {String} - the content of editor
	   */

		}, {
			key: 'getMarkdown',
			value: function getMarkdown() {
				return this.getContent();
			}

			/**
	   * Alternative for setContent()
	   * @see setContent
	   *
	   * @param {String} markdown - content for the editor
	   */

		}, {
			key: 'setMarkdown',
			value: function setMarkdown(markdown) {
				this.setContent(markdown);
			}

			/**
	   * Append the given value to the content of the editor
	   *
	   * @param {String} content - additional content for the editor
	   */

		}, {
			key: 'appendContent',
			value: function appendContent(content) {
				this.element.value = this.editor.value + content;
			}

			/**
	   * Prepend the given value to the content of the editor
	   *
	   * @param {String} content - additional content for the editor
	   */

		}, {
			key: 'prependContent',
			value: function prependContent(content) {
				this.element.value = content + this.editor.value;
			}

			/**
	   * Refresh preview automatically if the editor content is changed
	   *
	   * @param {Element|Array} element - contains the compiled html content
	   * @param {Converter} converter - converts the markdown to html
	   */

		}, {
			key: 'convertMarkdownToHtmlEventListener',
			value: function convertMarkdownToHtmlEventListener(element, converter) {
				var _this2 = this;

				this.addEventListener('input', function () {
					var html = converter.makeHtml(_this2.getContent());
					if (element instanceof Array) {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
							for (var _iterator = element[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var e = _step.value;

								e.innerHTML = html;
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					} else {
						element.innerHTML = html;
					}
				});
			}

			/**
	   * Copy content of editor to hidden input automatically
	   *
	   * @param {Element} element - this element gets the content of the editor
	   */

		}, {
			key: 'copyMarkdownContentToHiddenInputEventListener',
			value: function copyMarkdownContentToHiddenInputEventListener(element) {
				var _this3 = this;

				this.addEventListener('input', function () {
					element.innerHTML = _this3.getContent();
				});
			}

			/**
	   *
	   * @returns {string}
	   */

		}, {
			key: 'getSelectedContent',
			value: function getSelectedContent() {
				var start = this.element.selectionStart;
				var end = this.element.selectionEnd;
				return this.element.value.substring(start, end);
			}

			/**
	   *
	   * @param content
	   */

		}, {
			key: 'setSelectedContent',
			value: function setSelectedContent(content) {
				var start = this.element.selectionStart;
				var end = this.element.selectionEnd;
				this.element.value = this.element.value.substring(0, start) + content + this.element.value.substring(end);
			}

			/**
	   *
	   * @returns {Number}
	   */

		}, {
			key: 'getCursorPosition',
			value: function getCursorPosition() {
				return this.element.selectionStart;
			}

			/**
	   *
	   * @param {Number} position
	   */

		}, {
			key: 'setCursorPosition',
			value: function setCursorPosition(position) {
				this.element.selectionStart = position;
				this.element.selectionEnd = position;
			}

			/**
	   * Process the content by triggering the input event
	   */

		}, {
			key: 'processContent',
			value: function processContent() {
				var e = new Event('input');
				this.element.dispatchEvent(e);
			}
		}, {
			key: 'getEditor',
			get: function get() {
				return this.element;
			}
		}]);

		return TextareaEditor;
	}(_HTMLElement3.default);

	exports.default = TextareaEditor;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HTMLElement = function () {

		/**
	  * Represents a HTMLElement
	  *
	  * @constructor
	  * @param {String} type - the string value of the html tag
	  * @param {String} className - the name of the html element
	  * @param {Element} parent - the parent element of the created element
	  * @param {Object} params - additional parameters for the created element
	  */
		function HTMLElement(type, className, parent) {
			var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

			_classCallCheck(this, HTMLElement);

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


		_createClass(HTMLElement, [{
			key: "init",
			value: function init(type, className, parent, params) {
				// Create element
				var element = HTMLElement.createElement(type, className, params);

				// Append element to parent
				HTMLElement.appendElementToParent(element, parent);

				// Get the element from the dom
				this.setElementByClassName(className);
			}

			/**
	   * Get the element
	   *
	   * @returns {Element} - the element
	   */

		}, {
			key: "setElementByClassName",


			/**
	   * Get the element by the class name with querySelector
	   *
	   * @param {String} className - the string value of the class name without dot
	   */
			value: function setElementByClassName(className) {
				this.element = document.querySelector("." + className);
			}

			/**
	   * Create an eventListener for the html element
	   *
	   * @param {String} event - the string value of the event name
	   * @param {Function} callback - the function that should be run when the event is fired
	   */

		}, {
			key: "addEventListener",
			value: function addEventListener(event, callback) {
				this.element.addEventListener(event, callback);
			}

			/**
	   * Create a new element of given type with class name and parameters
	   *
	   * @param {String} type - the string value of type of the new element
	   * @param {String} className - the string value of the class attribute of the element without dot
	   * @param {Object} params - parameter object to set attribute of the element
	   * @returns {Element} - return a new element
	   */

		}, {
			key: "getElement",
			get: function get() {
				return this.element;
			}

			/**
	   * Set the element
	   *
	   * @param {Element} element - the new value of the element
	   */

		}, {
			key: "setElement",
			set: function set(element) {
				this.element = element;
			}
		}], [{
			key: "createElement",
			value: function createElement(type, className, params) {
				var element = document.createElement(type);
				element.className = className;

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = Object.keys(params)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var key = _step.value;

						element[key] = params[key];
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return element;
			}

			/**
	   * Append the element to the parent element as a child
	   *
	   * @param {Element} element - the element that will be appended to the parent
	   * @param {Element} parent - the parent element that will contain the given element
	   */

		}, {
			key: "appendElementToParent",
			value: function appendElementToParent(element, parent) {
				parent.appendChild(element);
			}

			/**
	   *
	   * @param type
	   * @param className
	   * @param parent
	   * @param params
	   * @returns {HTMLElement}
	   */

		}, {
			key: "create",
			value: function create(type, className, parent) {
				var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

				return new HTMLElement(type, className, parent, params);
			}
		}]);

		return HTMLElement;
	}();

	exports.default = HTMLElement;
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLElement2 = __webpack_require__(36);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preview = function (_HTMLElement) {
		_inherits(Preview, _HTMLElement);

		/**
	  * Represents Preview
	  *
	  * @constructor
	  * @param className
	  * @param parent
	  */
		function Preview(className, parent) {
			_classCallCheck(this, Preview);

			return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, 'div', className, parent));
		}

		/**
	  * Get the preview element
	  *
	  * @returns {Element} - the preview element
	  */


		_createClass(Preview, [{
			key: 'getPreview',
			get: function get() {
				return this.element;
			}
		}]);

		return Preview;
	}(_HTMLElement3.default);

	exports.default = Preview;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mousetrap = __webpack_require__(39);

	var _mousetrap2 = _interopRequireDefault(_mousetrap);

	__webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserInteraction = function () {

		/**
	  * Represents UserInteraction
	  *
	  * @constructor
	  * @param {Element} element
	  */
		function UserInteraction() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			_classCallCheck(this, UserInteraction);

			this.mousetrap = new _mousetrap2.default(element);
		}

		/**
	  *
	  * @param key
	  * @param callback
	  */


		_createClass(UserInteraction, [{
			key: 'keyboardEvent',
			value: function keyboardEvent(key, callback) {
				this.mousetrap.bind(key, callback);
			}

			/**
	   *
	   * @param key
	   * @param callback
	   */

		}, {
			key: 'keyboardEventGlobal',
			value: function keyboardEventGlobal(key, callback) {
				this.mousetrap.bindGlobal(key, callback);
			}
		}]);

		return UserInteraction;
	}();

	exports.default = UserInteraction;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*global define:false */
	/**
	 * Copyright 2016 Craig Campbell
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * Mousetrap is a simple keyboard shortcut library for Javascript with
	 * no external dependencies
	 *
	 * @version 1.6.0
	 * @url craig.is/killing/mice
	 */
	(function (window, document, undefined) {

	    // Check if mousetrap is used inside browser, if not, return
	    if (!window) {
	        return;
	    }

	    /**
	     * mapping of special keycodes to their corresponding keys
	     *
	     * everything in this dictionary cannot use keypress events
	     * so it has to be here to map to the correct keycodes for
	     * keyup/keydown events
	     *
	     * @type {Object}
	     */
	    var _MAP = {
	        8: 'backspace',
	        9: 'tab',
	        13: 'enter',
	        16: 'shift',
	        17: 'ctrl',
	        18: 'alt',
	        20: 'capslock',
	        27: 'esc',
	        32: 'space',
	        33: 'pageup',
	        34: 'pagedown',
	        35: 'end',
	        36: 'home',
	        37: 'left',
	        38: 'up',
	        39: 'right',
	        40: 'down',
	        45: 'ins',
	        46: 'del',
	        91: 'meta',
	        93: 'meta',
	        224: 'meta'
	    };

	    /**
	     * mapping for special characters so they can support
	     *
	     * this dictionary is only used incase you want to bind a
	     * keyup or keydown event to one of these keys
	     *
	     * @type {Object}
	     */
	    var _KEYCODE_MAP = {
	        106: '*',
	        107: '+',
	        109: '-',
	        110: '.',
	        111: '/',
	        186: ';',
	        187: '=',
	        188: ',',
	        189: '-',
	        190: '.',
	        191: '/',
	        192: '`',
	        219: '[',
	        220: '\\',
	        221: ']',
	        222: '\''
	    };

	    /**
	     * this is a mapping of keys that require shift on a US keypad
	     * back to the non shift equivelents
	     *
	     * this is so you can use keyup events with these keys
	     *
	     * note that this will only work reliably on US keyboards
	     *
	     * @type {Object}
	     */
	    var _SHIFT_MAP = {
	        '~': '`',
	        '!': '1',
	        '@': '2',
	        '#': '3',
	        '$': '4',
	        '%': '5',
	        '^': '6',
	        '&': '7',
	        '*': '8',
	        '(': '9',
	        ')': '0',
	        '_': '-',
	        '+': '=',
	        ':': ';',
	        '\"': '\'',
	        '<': ',',
	        '>': '.',
	        '?': '/',
	        '|': '\\'
	    };

	    /**
	     * this is a list of special strings you can use to map
	     * to modifier keys when you specify your keyboard shortcuts
	     *
	     * @type {Object}
	     */
	    var _SPECIAL_ALIASES = {
	        'option': 'alt',
	        'command': 'meta',
	        'return': 'enter',
	        'escape': 'esc',
	        'plus': '+',
	        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
	    };

	    /**
	     * variable to store the flipped version of _MAP from above
	     * needed to check if we should use keypress or not when no action
	     * is specified
	     *
	     * @type {Object|undefined}
	     */
	    var _REVERSE_MAP;

	    /**
	     * loop through the f keys, f1 to f19 and add them to the map
	     * programatically
	     */
	    for (var i = 1; i < 20; ++i) {
	        _MAP[111 + i] = 'f' + i;
	    }

	    /**
	     * loop through to map numbers on the numeric keypad
	     */
	    for (i = 0; i <= 9; ++i) {
	        _MAP[i + 96] = i;
	    }

	    /**
	     * cross browser add event method
	     *
	     * @param {Element|HTMLDocument} object
	     * @param {string} type
	     * @param {Function} callback
	     * @returns void
	     */
	    function _addEvent(object, type, callback) {
	        if (object.addEventListener) {
	            object.addEventListener(type, callback, false);
	            return;
	        }

	        object.attachEvent('on' + type, callback);
	    }

	    /**
	     * takes the event and returns the key character
	     *
	     * @param {Event} e
	     * @return {string}
	     */
	    function _characterFromEvent(e) {

	        // for keypress events we should return the character as is
	        if (e.type == 'keypress') {
	            var character = String.fromCharCode(e.which);

	            // if the shift key is not pressed then it is safe to assume
	            // that we want the character to be lowercase.  this means if
	            // you accidentally have caps lock on then your key bindings
	            // will continue to work
	            //
	            // the only side effect that might not be desired is if you
	            // bind something like 'A' cause you want to trigger an
	            // event when capital A is pressed caps lock will no longer
	            // trigger the event.  shift+a will though.
	            if (!e.shiftKey) {
	                character = character.toLowerCase();
	            }

	            return character;
	        }

	        // for non keypress events the special maps are needed
	        if (_MAP[e.which]) {
	            return _MAP[e.which];
	        }

	        if (_KEYCODE_MAP[e.which]) {
	            return _KEYCODE_MAP[e.which];
	        }

	        // if it is not in the special map

	        // with keydown and keyup events the character seems to always
	        // come in as an uppercase character whether you are pressing shift
	        // or not.  we should make sure it is always lowercase for comparisons
	        return String.fromCharCode(e.which).toLowerCase();
	    }

	    /**
	     * checks if two arrays are equal
	     *
	     * @param {Array} modifiers1
	     * @param {Array} modifiers2
	     * @returns {boolean}
	     */
	    function _modifiersMatch(modifiers1, modifiers2) {
	        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
	    }

	    /**
	     * takes a key event and figures out what the modifiers are
	     *
	     * @param {Event} e
	     * @returns {Array}
	     */
	    function _eventModifiers(e) {
	        var modifiers = [];

	        if (e.shiftKey) {
	            modifiers.push('shift');
	        }

	        if (e.altKey) {
	            modifiers.push('alt');
	        }

	        if (e.ctrlKey) {
	            modifiers.push('ctrl');
	        }

	        if (e.metaKey) {
	            modifiers.push('meta');
	        }

	        return modifiers;
	    }

	    /**
	     * prevents default for this event
	     *
	     * @param {Event} e
	     * @returns void
	     */
	    function _preventDefault(e) {
	        if (e.preventDefault) {
	            e.preventDefault();
	            return;
	        }

	        e.returnValue = false;
	    }

	    /**
	     * stops propogation for this event
	     *
	     * @param {Event} e
	     * @returns void
	     */
	    function _stopPropagation(e) {
	        if (e.stopPropagation) {
	            e.stopPropagation();
	            return;
	        }

	        e.cancelBubble = true;
	    }

	    /**
	     * determines if the keycode specified is a modifier key or not
	     *
	     * @param {string} key
	     * @returns {boolean}
	     */
	    function _isModifier(key) {
	        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
	    }

	    /**
	     * reverses the map lookup so that we can look for specific keys
	     * to see what can and can't use keypress
	     *
	     * @return {Object}
	     */
	    function _getReverseMap() {
	        if (!_REVERSE_MAP) {
	            _REVERSE_MAP = {};
	            for (var key in _MAP) {

	                // pull out the numeric keypad from here cause keypress should
	                // be able to detect the keys from the character
	                if (key > 95 && key < 112) {
	                    continue;
	                }

	                if (_MAP.hasOwnProperty(key)) {
	                    _REVERSE_MAP[_MAP[key]] = key;
	                }
	            }
	        }
	        return _REVERSE_MAP;
	    }

	    /**
	     * picks the best action based on the key combination
	     *
	     * @param {string} key - character for key
	     * @param {Array} modifiers
	     * @param {string=} action passed in
	     */
	    function _pickBestAction(key, modifiers, action) {

	        // if no action was picked in we should try to pick the one
	        // that we think would work best for this key
	        if (!action) {
	            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
	        }

	        // modifier keys don't work as expected with keypress,
	        // switch to keydown
	        if (action == 'keypress' && modifiers.length) {
	            action = 'keydown';
	        }

	        return action;
	    }

	    /**
	     * Converts from a string key combination to an array
	     *
	     * @param  {string} combination like "command+shift+l"
	     * @return {Array}
	     */
	    function _keysFromString(combination) {
	        if (combination === '+') {
	            return ['+'];
	        }

	        combination = combination.replace(/\+{2}/g, '+plus');
	        return combination.split('+');
	    }

	    /**
	     * Gets info for a specific key combination
	     *
	     * @param  {string} combination key combination ("command+s" or "a" or "*")
	     * @param  {string=} action
	     * @returns {Object}
	     */
	    function _getKeyInfo(combination, action) {
	        var keys;
	        var key;
	        var i;
	        var modifiers = [];

	        // take the keys from this pattern and figure out what the actual
	        // pattern is all about
	        keys = _keysFromString(combination);

	        for (i = 0; i < keys.length; ++i) {
	            key = keys[i];

	            // normalize key names
	            if (_SPECIAL_ALIASES[key]) {
	                key = _SPECIAL_ALIASES[key];
	            }

	            // if this is not a keypress event then we should
	            // be smart about using shift keys
	            // this will only work for US keyboards however
	            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
	                key = _SHIFT_MAP[key];
	                modifiers.push('shift');
	            }

	            // if this key is a modifier then add it to the list of modifiers
	            if (_isModifier(key)) {
	                modifiers.push(key);
	            }
	        }

	        // depending on what the key combination is
	        // we will try to pick the best event for it
	        action = _pickBestAction(key, modifiers, action);

	        return {
	            key: key,
	            modifiers: modifiers,
	            action: action
	        };
	    }

	    function _belongsTo(element, ancestor) {
	        if (element === null || element === document) {
	            return false;
	        }

	        if (element === ancestor) {
	            return true;
	        }

	        return _belongsTo(element.parentNode, ancestor);
	    }

	    function Mousetrap(targetElement) {
	        var self = this;

	        targetElement = targetElement || document;

	        if (!(self instanceof Mousetrap)) {
	            return new Mousetrap(targetElement);
	        }

	        /**
	         * element to attach key events to
	         *
	         * @type {Element}
	         */
	        self.target = targetElement;

	        /**
	         * a list of all the callbacks setup via Mousetrap.bind()
	         *
	         * @type {Object}
	         */
	        self._callbacks = {};

	        /**
	         * direct map of string combinations to callbacks used for trigger()
	         *
	         * @type {Object}
	         */
	        self._directMap = {};

	        /**
	         * keeps track of what level each sequence is at since multiple
	         * sequences can start out with the same sequence
	         *
	         * @type {Object}
	         */
	        var _sequenceLevels = {};

	        /**
	         * variable to store the setTimeout call
	         *
	         * @type {null|number}
	         */
	        var _resetTimer;

	        /**
	         * temporary state where we will ignore the next keyup
	         *
	         * @type {boolean|string}
	         */
	        var _ignoreNextKeyup = false;

	        /**
	         * temporary state where we will ignore the next keypress
	         *
	         * @type {boolean}
	         */
	        var _ignoreNextKeypress = false;

	        /**
	         * are we currently inside of a sequence?
	         * type of action ("keyup" or "keydown" or "keypress") or false
	         *
	         * @type {boolean|string}
	         */
	        var _nextExpectedAction = false;

	        /**
	         * resets all sequence counters except for the ones passed in
	         *
	         * @param {Object} doNotReset
	         * @returns void
	         */
	        function _resetSequences(doNotReset) {
	            doNotReset = doNotReset || {};

	            var activeSequences = false,
	                key;

	            for (key in _sequenceLevels) {
	                if (doNotReset[key]) {
	                    activeSequences = true;
	                    continue;
	                }
	                _sequenceLevels[key] = 0;
	            }

	            if (!activeSequences) {
	                _nextExpectedAction = false;
	            }
	        }

	        /**
	         * finds all callbacks that match based on the keycode, modifiers,
	         * and action
	         *
	         * @param {string} character
	         * @param {Array} modifiers
	         * @param {Event|Object} e
	         * @param {string=} sequenceName - name of the sequence we are looking for
	         * @param {string=} combination
	         * @param {number=} level
	         * @returns {Array}
	         */
	        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
	            var i;
	            var callback;
	            var matches = [];
	            var action = e.type;

	            // if there are no events related to this keycode
	            if (!self._callbacks[character]) {
	                return [];
	            }

	            // if a modifier key is coming up on its own we should allow it
	            if (action == 'keyup' && _isModifier(character)) {
	                modifiers = [character];
	            }

	            // loop through all callbacks for the key that was pressed
	            // and see if any of them match
	            for (i = 0; i < self._callbacks[character].length; ++i) {
	                callback = self._callbacks[character][i];

	                // if a sequence name is not specified, but this is a sequence at
	                // the wrong level then move onto the next match
	                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
	                    continue;
	                }

	                // if the action we are looking for doesn't match the action we got
	                // then we should keep going
	                if (action != callback.action) {
	                    continue;
	                }

	                // if this is a keypress event and the meta key and control key
	                // are not pressed that means that we need to only look at the
	                // character, otherwise check the modifiers as well
	                //
	                // chrome will not fire a keypress if meta or control is down
	                // safari will fire a keypress if meta or meta+shift is down
	                // firefox will fire a keypress if meta or control is down
	                if (action == 'keypress' && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {

	                    // when you bind a combination or sequence a second time it
	                    // should overwrite the first one.  if a sequenceName or
	                    // combination is specified in this call it does just that
	                    //
	                    // @todo make deleting its own method?
	                    var deleteCombo = !sequenceName && callback.combo == combination;
	                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
	                    if (deleteCombo || deleteSequence) {
	                        self._callbacks[character].splice(i, 1);
	                    }

	                    matches.push(callback);
	                }
	            }

	            return matches;
	        }

	        /**
	         * actually calls the callback function
	         *
	         * if your callback function returns false this will use the jquery
	         * convention - prevent default and stop propogation on the event
	         *
	         * @param {Function} callback
	         * @param {Event} e
	         * @returns void
	         */
	        function _fireCallback(callback, e, combo, sequence) {

	            // if this event should not happen stop here
	            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
	                return;
	            }

	            if (callback(e, combo) === false) {
	                _preventDefault(e);
	                _stopPropagation(e);
	            }
	        }

	        /**
	         * handles a character key event
	         *
	         * @param {string} character
	         * @param {Array} modifiers
	         * @param {Event} e
	         * @returns void
	         */
	        self._handleKey = function (character, modifiers, e) {
	            var callbacks = _getMatches(character, modifiers, e);
	            var i;
	            var doNotReset = {};
	            var maxLevel = 0;
	            var processedSequenceCallback = false;

	            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
	            for (i = 0; i < callbacks.length; ++i) {
	                if (callbacks[i].seq) {
	                    maxLevel = Math.max(maxLevel, callbacks[i].level);
	                }
	            }

	            // loop through matching callbacks for this key event
	            for (i = 0; i < callbacks.length; ++i) {

	                // fire for all sequence callbacks
	                // this is because if for example you have multiple sequences
	                // bound such as "g i" and "g t" they both need to fire the
	                // callback for matching g cause otherwise you can only ever
	                // match the first one
	                if (callbacks[i].seq) {

	                    // only fire callbacks for the maxLevel to prevent
	                    // subsequences from also firing
	                    //
	                    // for example 'a option b' should not cause 'option b' to fire
	                    // even though 'option b' is part of the other sequence
	                    //
	                    // any sequences that do not match here will be discarded
	                    // below by the _resetSequences call
	                    if (callbacks[i].level != maxLevel) {
	                        continue;
	                    }

	                    processedSequenceCallback = true;

	                    // keep a list of which sequences were matches for later
	                    doNotReset[callbacks[i].seq] = 1;
	                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
	                    continue;
	                }

	                // if there were no sequence matches but we are still here
	                // that means this is a regular match so we should fire that
	                if (!processedSequenceCallback) {
	                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
	                }
	            }

	            // if the key you pressed matches the type of sequence without
	            // being a modifier (ie "keyup" or "keypress") then we should
	            // reset all sequences that were not matched by this event
	            //
	            // this is so, for example, if you have the sequence "h a t" and you
	            // type "h e a r t" it does not match.  in this case the "e" will
	            // cause the sequence to reset
	            //
	            // modifier keys are ignored because you can have a sequence
	            // that contains modifiers such as "enter ctrl+space" and in most
	            // cases the modifier key will be pressed before the next key
	            //
	            // also if you have a sequence such as "ctrl+b a" then pressing the
	            // "b" key will trigger a "keypress" and a "keydown"
	            //
	            // the "keydown" is expected when there is a modifier, but the
	            // "keypress" ends up matching the _nextExpectedAction since it occurs
	            // after and that causes the sequence to reset
	            //
	            // we ignore keypresses in a sequence that directly follow a keydown
	            // for the same character
	            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
	            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
	                _resetSequences(doNotReset);
	            }

	            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
	        };

	        /**
	         * handles a keydown event
	         *
	         * @param {Event} e
	         * @returns void
	         */
	        function _handleKeyEvent(e) {

	            // normalize e.which for key events
	            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
	            if (typeof e.which !== 'number') {
	                e.which = e.keyCode;
	            }

	            var character = _characterFromEvent(e);

	            // no character found then stop
	            if (!character) {
	                return;
	            }

	            // need to use === for the character check because the character can be 0
	            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
	                _ignoreNextKeyup = false;
	                return;
	            }

	            self.handleKey(character, _eventModifiers(e), e);
	        }

	        /**
	         * called to set a 1 second timeout on the specified sequence
	         *
	         * this is so after each key press in the sequence you have 1 second
	         * to press the next key before you have to start over
	         *
	         * @returns void
	         */
	        function _resetSequenceTimer() {
	            clearTimeout(_resetTimer);
	            _resetTimer = setTimeout(_resetSequences, 1000);
	        }

	        /**
	         * binds a key sequence to an event
	         *
	         * @param {string} combo - combo specified in bind call
	         * @param {Array} keys
	         * @param {Function} callback
	         * @param {string=} action
	         * @returns void
	         */
	        function _bindSequence(combo, keys, callback, action) {

	            // start off by adding a sequence level record for this combination
	            // and setting the level to 0
	            _sequenceLevels[combo] = 0;

	            /**
	             * callback to increase the sequence level for this sequence and reset
	             * all other sequences that were active
	             *
	             * @param {string} nextAction
	             * @returns {Function}
	             */
	            function _increaseSequence(nextAction) {
	                return function () {
	                    _nextExpectedAction = nextAction;
	                    ++_sequenceLevels[combo];
	                    _resetSequenceTimer();
	                };
	            }

	            /**
	             * wraps the specified callback inside of another function in order
	             * to reset all sequence counters as soon as this sequence is done
	             *
	             * @param {Event} e
	             * @returns void
	             */
	            function _callbackAndReset(e) {
	                _fireCallback(callback, e, combo);

	                // we should ignore the next key up if the action is key down
	                // or keypress.  this is so if you finish a sequence and
	                // release the key the final key will not trigger a keyup
	                if (action !== 'keyup') {
	                    _ignoreNextKeyup = _characterFromEvent(e);
	                }

	                // weird race condition if a sequence ends with the key
	                // another sequence begins with
	                setTimeout(_resetSequences, 10);
	            }

	            // loop through keys one at a time and bind the appropriate callback
	            // function.  for any key leading up to the final one it should
	            // increase the sequence. after the final, it should reset all sequences
	            //
	            // if an action is specified in the original bind call then that will
	            // be used throughout.  otherwise we will pass the action that the
	            // next key in the sequence should match.  this allows a sequence
	            // to mix and match keypress and keydown events depending on which
	            // ones are better suited to the key provided
	            for (var i = 0; i < keys.length; ++i) {
	                var isFinal = i + 1 === keys.length;
	                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
	                _bindSingle(keys[i], wrappedCallback, action, combo, i);
	            }
	        }

	        /**
	         * binds a single keyboard combination
	         *
	         * @param {string} combination
	         * @param {Function} callback
	         * @param {string=} action
	         * @param {string=} sequenceName - name of sequence if part of sequence
	         * @param {number=} level - what part of the sequence the command is
	         * @returns void
	         */
	        function _bindSingle(combination, callback, action, sequenceName, level) {

	            // store a direct mapped reference for use with Mousetrap.trigger
	            self._directMap[combination + ':' + action] = callback;

	            // make sure multiple spaces in a row become a single space
	            combination = combination.replace(/\s+/g, ' ');

	            var sequence = combination.split(' ');
	            var info;

	            // if this pattern is a sequence of keys then run through this method
	            // to reprocess each pattern one key at a time
	            if (sequence.length > 1) {
	                _bindSequence(combination, sequence, callback, action);
	                return;
	            }

	            info = _getKeyInfo(combination, action);

	            // make sure to initialize array if this is the first time
	            // a callback is added for this key
	            self._callbacks[info.key] = self._callbacks[info.key] || [];

	            // remove an existing match if there is one
	            _getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);

	            // add this call back to the array
	            // if it is a sequence put it at the beginning
	            // if not put it at the end
	            //
	            // this is important because the way these are processed expects
	            // the sequence ones to come first
	            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
	                callback: callback,
	                modifiers: info.modifiers,
	                action: info.action,
	                seq: sequenceName,
	                level: level,
	                combo: combination
	            });
	        }

	        /**
	         * binds multiple combinations to the same callback
	         *
	         * @param {Array} combinations
	         * @param {Function} callback
	         * @param {string|undefined} action
	         * @returns void
	         */
	        self._bindMultiple = function (combinations, callback, action) {
	            for (var i = 0; i < combinations.length; ++i) {
	                _bindSingle(combinations[i], callback, action);
	            }
	        };

	        // start!
	        _addEvent(targetElement, 'keypress', _handleKeyEvent);
	        _addEvent(targetElement, 'keydown', _handleKeyEvent);
	        _addEvent(targetElement, 'keyup', _handleKeyEvent);
	    }

	    /**
	     * binds an event to mousetrap
	     *
	     * can be a single key, a combination of keys separated with +,
	     * an array of keys, or a sequence of keys separated by spaces
	     *
	     * be sure to list the modifier keys first to make sure that the
	     * correct key ends up getting bound (the last key in the pattern)
	     *
	     * @param {string|Array} keys
	     * @param {Function} callback
	     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
	     * @returns void
	     */
	    Mousetrap.prototype.bind = function (keys, callback, action) {
	        var self = this;
	        keys = keys instanceof Array ? keys : [keys];
	        self._bindMultiple.call(self, keys, callback, action);
	        return self;
	    };

	    /**
	     * unbinds an event to mousetrap
	     *
	     * the unbinding sets the callback function of the specified key combo
	     * to an empty function and deletes the corresponding key in the
	     * _directMap dict.
	     *
	     * TODO: actually remove this from the _callbacks dictionary instead
	     * of binding an empty function
	     *
	     * the keycombo+action has to be exactly the same as
	     * it was defined in the bind method
	     *
	     * @param {string|Array} keys
	     * @param {string} action
	     * @returns void
	     */
	    Mousetrap.prototype.unbind = function (keys, action) {
	        var self = this;
	        return self.bind.call(self, keys, function () {}, action);
	    };

	    /**
	     * triggers an event that has already been bound
	     *
	     * @param {string} keys
	     * @param {string=} action
	     * @returns void
	     */
	    Mousetrap.prototype.trigger = function (keys, action) {
	        var self = this;
	        if (self._directMap[keys + ':' + action]) {
	            self._directMap[keys + ':' + action]({}, keys);
	        }
	        return self;
	    };

	    /**
	     * resets the library back to its initial state.  this is useful
	     * if you want to clear out the current keyboard shortcuts and bind
	     * new ones - for example if you switch to another page
	     *
	     * @returns void
	     */
	    Mousetrap.prototype.reset = function () {
	        var self = this;
	        self._callbacks = {};
	        self._directMap = {};
	        return self;
	    };

	    /**
	     * should we stop this event before firing off callbacks
	     *
	     * @param {Event} e
	     * @param {Element} element
	     * @return {boolean}
	     */
	    Mousetrap.prototype.stopCallback = function (e, element) {
	        var self = this;

	        // if the element has the class "mousetrap" then no need to stop
	        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
	            return false;
	        }

	        if (_belongsTo(element, self.target)) {
	            return false;
	        }

	        // stop for input, select, and textarea
	        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
	    };

	    /**
	     * exposes _handleKey publicly so it can be overwritten by extensions
	     */
	    Mousetrap.prototype.handleKey = function () {
	        var self = this;
	        return self._handleKey.apply(self, arguments);
	    };

	    /**
	     * allow custom key mappings
	     */
	    Mousetrap.addKeycodes = function (object) {
	        for (var key in object) {
	            if (object.hasOwnProperty(key)) {
	                _MAP[key] = object[key];
	            }
	        }
	        _REVERSE_MAP = null;
	    };

	    /**
	     * Init the global mousetrap functions
	     *
	     * This method is needed to allow the global mousetrap functions to work
	     * now that mousetrap is a constructor function.
	     */
	    Mousetrap.init = function () {
	        var documentMousetrap = Mousetrap(document);
	        for (var method in documentMousetrap) {
	            if (method.charAt(0) !== '_') {
	                Mousetrap[method] = function (method) {
	                    return function () {
	                        return documentMousetrap[method].apply(documentMousetrap, arguments);
	                    };
	                }(method);
	            }
	        }
	    };

	    Mousetrap.init();

	    // expose mousetrap to the global object
	    window.Mousetrap = Mousetrap;

	    // expose as a common js module
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = Mousetrap;
	    }

	    // expose mousetrap as an AMD module
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Mousetrap;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	})(typeof window !== 'undefined' ? window : null, typeof window !== 'undefined' ? document : null);

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * adds a bindGlobal method to Mousetrap that allows you to
	 * bind specific keyboard shortcuts that will still work
	 * inside a text input field
	 *
	 * usage:
	 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
	 */
	/* global Mousetrap:true */
	(function (Mousetrap) {
	    var _globalCallbacks = {};
	    var _originalStopCallback = Mousetrap.prototype.stopCallback;

	    Mousetrap.prototype.stopCallback = function (e, element, combo, sequence) {
	        var self = this;

	        if (self.paused) {
	            return true;
	        }

	        if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
	            return false;
	        }

	        return _originalStopCallback.call(self, e, element, combo);
	    };

	    Mousetrap.prototype.bindGlobal = function (keys, callback, action) {
	        var self = this;
	        self.bind(keys, callback, action);

	        if (keys instanceof Array) {
	            for (var i = 0; i < keys.length; i++) {
	                _globalCallbacks[keys[i]] = true;
	            }
	            return;
	        }

	        _globalCallbacks[keys] = true;
	    };

	    Mousetrap.init();
	})(Mousetrap);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _UserInteraction2 = __webpack_require__(38);

	var _UserInteraction3 = _interopRequireDefault(_UserInteraction2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditorUserInteraction = function (_UserInteraction) {
		_inherits(EditorUserInteraction, _UserInteraction);

		/**
	  * Represents EditorUserInteraction
	  *
	  * @constructor
	  * @param {TextareaEditor} editor
	  */
		function EditorUserInteraction(editor) {
			_classCallCheck(this, EditorUserInteraction);

			var _this = _possibleConstructorReturn(this, (EditorUserInteraction.__proto__ || Object.getPrototypeOf(EditorUserInteraction)).call(this, editor.getEditor));

			_this.editor = editor;
			return _this;
		}

		/**
	  *
	  * @param key
	  * @param prefix
	  * @param suffix
	  */


		_createClass(EditorUserInteraction, [{
			key: 'insertKeyboardEvent',
			value: function insertKeyboardEvent(key) {
				var _this2 = this;

				var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
				var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

				this.keyboardEvent(key, function (e) {
					e.preventDefault();
					var actualPosition = _this2.editor.getCursorPosition();
					var value = _this2.editor.getSelectedContent();
					_this2.editor.setSelectedContent(prefix + value + suffix);

					var position = value.length === 0 ? actualPosition + prefix.length : actualPosition + (prefix + value + suffix).length;
					_this2.editor.setCursorPosition(position);

					_this2.editor.processContent();
				});
			}
		}]);

		return EditorUserInteraction;
	}(_UserInteraction3.default);

	exports.default = EditorUserInteraction;
	module.exports = exports['default'];

/***/ }
/******/ ]);