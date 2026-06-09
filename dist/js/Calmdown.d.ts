import { type CalmdownSettings } from './Config';
export type { CalmdownSettings } from './Config';
export default class Calmdown {
    private settings;
    private calmdown;
    private content;
    private converter;
    private editor;
    private preview;
    private resize;
    private globalUserInteraction;
    private editorUserInteraction;
    private htmlInputElement?;
    private markdownInputElement?;
    /**
     * @param settings - partial configuration; missing keys fall back to CONFIG
     */
    constructor(settings?: Partial<CalmdownSettings>);
    /**
     * Merge the given settings over the defaults and resolve the root element.
     */
    setDefaults(settings: Partial<CalmdownSettings>): void;
    /**
     * Initialize Calmdown.
     */
    init(): void;
    /**
     * Apply the default theme class.
     */
    initDefaultTheme(): void;
    /**
     * Apply the default layout class.
     */
    initDefaultLayout(): void;
    /**
     * Initialize the resizer handle.
     */
    initResize(): void;
    /**
     * Initialize the hidden html input. Its value can be posted to the server.
     */
    initHiddenHtmlInput(): void;
    /**
     * Initialize the hidden markdown input. Its value can be posted to the server.
     */
    initHiddenMarkdownInput(): void;
    /**
     * Initialize the markdown converter.
     */
    initConverter(): void;
    /**
     * Resolve the initial editor content (data attribute > html > settings).
     */
    initDefaultContent(): void;
    /**
     * Initialize the editor area.
     */
    initEditor(): void;
    /**
     * Initialize the preview area.
     */
    initPreview(): void;
    /**
     * Initialize the help dialog.
     */
    initHelpDialog(): void;
    /**
     * Initialize the user-interaction (keyboard) handlers.
     */
    initUserInteraction(): void;
    /**
     * Wire up the editor and keyboard event listeners.
     */
    initEventListeners(): void;
    /**
     * Bind the keyboard shortcuts that switch between editor/preview/both,
     * full screen, and the help dialog.
     */
    viewChangeEvents(): void;
    /**
     * Trigger the processing event.
     */
    triggerEvents(): void;
    /**
     * Get the editor content.
     */
    getContent(): string;
    /**
     * Set the editor content.
     */
    setContent(content: string): void;
}
