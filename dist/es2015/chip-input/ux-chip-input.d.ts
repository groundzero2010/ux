import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from '../styles/style-engine';
import { Themable } from '../styles/themable';
export declare class UxChipInput implements Themable {
    private element;
    resources: ViewResources;
    private styleEngine;
    disabled: any;
    readonly: any;
    theme: null;
    type: any;
    separator: string;
    value: any;
    chips: Array<string>;
    view: View;
    private textbox;
    private chiprepeat;
    private tagrepeat;
    constructor(element: HTMLInputElement, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    attached(): void;
    detached(): void;
    handleKeyup(event: KeyboardEvent): void;
    addChip(): void;
    editChip(value: string): void;
    removeChip(value: string): void;
    chipsChanged(): void;
    valueChanged(): void;
    disabledChanged(newValue: any): void;
    readonlyChanged(newValue: any): void;
    themeChanged(newValue: any): void;
}
