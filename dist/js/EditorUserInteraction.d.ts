import type TextareaEditor from './TextareaEditor';
import UserInteraction from './UserInteraction';
export default class EditorUserInteraction extends UserInteraction {
    private readonly editor;
    constructor(editor: TextareaEditor);
    /**
     * Bind a combo that wraps the current selection with `prefix`/`suffix`
     * (e.g. '**' … '**' for bold) and reprocesses the content.
     */
    insertKeyboardEvent(key: string, prefix?: string, suffix?: string): void;
}
