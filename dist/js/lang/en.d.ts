export interface HelpCommand {
    code: string;
    description: string;
}
export interface HelpDialogStrings {
    title: string;
    button: string;
    content: HelpCommand[];
}
export interface LanguagePack {
    helpDialog: HelpDialogStrings;
}
export declare const EN: LanguagePack;
