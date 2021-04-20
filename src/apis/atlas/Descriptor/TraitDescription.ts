import { Region, Trait } from "@isaaczm/api-connector";
import { TraitDescriptor } from "@isaaczm/api-descriptor";
import Api from "../Api";
import Description from "./Description";

const TraitsCached: Trait.Trait[] = []

export default class TraitDescription {
    protected id: number;
    protected trait?: Trait.Trait;
    protected traitCache: Map<string, Trait.Trait>
    protected overrideTraits?: Trait.Trait[];

    constructor(trait?: Trait.Trait | number , overrideTraits?: Trait.Trait[]) {
        this.id = typeof trait === "number" ? trait : trait.id;
        this.trait = typeof trait === "number" ? undefined : trait
        this.overrideTraits = TraitsCached;
    }

    static renderAsString(trait: Trait.Trait | number): string {
        const descriptor = TraitDescriptor.describe(trait);

        return Description.renderAsString(descriptor);
    }

    static async traitList() {
        const traitlist = await Api.traitList()

        for (let i = 0; i < traitlist.length; i++) {
            const trait = traitlist[i];
            TraitsCached.push(trait)
        }

    }

    private getDescription(trait: Trait.Trait | number) {
        const descriptor = TraitDescriptor.describe(trait, this.overrideTraits);
        return new Description().export(descriptor);
    }


    export() {
        const trait = this.trait ?? this.id;
        return `<span>${this.getDescription(trait)}</span>`
    }
}


