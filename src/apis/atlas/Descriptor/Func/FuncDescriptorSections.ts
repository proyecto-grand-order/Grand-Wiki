import { Renderable } from "../../Helper/OutputHelper";

export class FuncDescriptorSection {
    public showing: boolean = true;
    public parts = [];
    public preposition?: string;

    constructor(preposition?: string) {
        this.preposition = preposition;
    }
}

export class FuncDescriptorSections {
    public team = new FuncDescriptorSection();
    public chance = new FuncDescriptorSection();
    public action = new FuncDescriptorSection();
    public affects = new FuncDescriptorSection();
    public amount = new FuncDescriptorSection('un');
    public target = new FuncDescriptorSection('al');
    public duration = new FuncDescriptorSection();
    public scaling = new FuncDescriptorSection();
}