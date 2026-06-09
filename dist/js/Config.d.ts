/**
 * Calmdown configuration. All values have defaults (see CONFIG); consumers
 * pass a Partial of this to the Calmdown constructor.
 */
export interface CalmdownSettings {
    /** Editor width — any CSS width value (px, %, em, …). */
    width: string;
    /** Editor height — any CSS height value (px, %, em, …). */
    height: string;
    /** Class name of the root element that becomes the editor. */
    selector: string;
    /** Class name of the markdown editor (textarea). */
    editorSelector: string;
    /** Class name of the preview (div). */
    previewSelector: string;
    /** Class name of the help dialog (div). */
    helpDialogSelector: string;
    /** Class name of the help dialog open button. */
    helpDialogBtnOpenSelector: string;
    /** Class name of the help dialog close button. */
    helpDialogBtnCloseSelector: string;
    /**
     * Class name of the hidden markdown textarea, for classic (non-AJAX)
     * form posts. When null the textarea is not generated.
     */
    markdownInputSelector: string | null;
    /**
     * Class name of the hidden html textarea, for classic (non-AJAX) form
     * posts. When null the textarea is not generated.
     */
    htmlInputSelector: string | null;
    /** Default theme class: cd-theme-default, cd-theme-dark. */
    defaultThemeSelector: string;
    /** Default layout class: cd-layout-both, cd-layout-editor, cd-layout-preview. */
    defaultLayoutSelector: string;
    /**
     * Code highlight theme class (highlight.js based): cd-highlight-[name],
     * name: default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight.
     */
    codeHighlightStyle: string;
    /** Markdown editor type. Supported types: textarea. */
    editorType: string;
    /** Default content of the editor. */
    defaultContent: string;
}
declare const CONFIG: CalmdownSettings;
export default CONFIG;
