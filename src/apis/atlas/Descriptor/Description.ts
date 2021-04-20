import {
    Descriptor,
    PartialType,
    ParticlePartial,
    ReferencePartial,
    ReferenceType,
    TextPartial,
    ValuePartial,
    ValueType
} from "@isaaczm/api-descriptor";
import CardDescription from "./CardDescription";
import SkillDescriptor from "./SkillDescriptor";
import SkillReferenceDescriptor from "./SkillReferenceDescriptor";
import TraitDescription from "./TraitDescription";


export default class Description {
    private static renderParticle(partial: ParticlePartial): string {
        return partial.value;
    }

    private static renderReferenceAsString(partial: ReferencePartial): string {
        switch (partial.referenceType) {
            case ReferenceType.SKILL:
                if (typeof partial.value === "number") {
                    return SkillReferenceDescriptor.renderAsString(partial.value)
                } else {
                    return SkillDescriptor.renderAsString(partial.value)
                }
            case ReferenceType.TRAIT:
                return TraitDescription.renderAsString(partial.value)
            case ReferenceType.CARD:
                return CardDescription.renderAsString(partial.value)
            default:
                return partial.value.toString();
        }

    }

    private static renderText(partial: TextPartial): string {
        return partial.value;
    }

    private static renderValue(partial: ValuePartial): string {
        if (partial.valueType === ValueType.PERCENT) {
            return partial.value.toString() + '%';
        }

        return partial.value.toString();
    }

    static renderAsString(descriptor: Descriptor): string {
        const partials = descriptor.partials(),
            fragments: string[] = [];

        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];

            switch (partial.type) {
                case PartialType.PARTICLE:
                    fragments.push(Description.renderParticle(partial));
                    break;
                case PartialType.REFERENCE:
                    fragments.push(Description.renderReferenceAsString(partial as ReferencePartial));
                    break;
                case PartialType.TEXT:
                    fragments.push(Description.renderText(partial));
                    break;
                case PartialType.VALUE:
                    fragments.push(Description.renderValue(partial as ValuePartial));
                    break;
                default:
                    fragments.push(partial.value.toString());
            }
        }

        return fragments.join('');
    }


    private renderReference(partial: ReferencePartial) {

        switch (partial.referenceType) {
            case ReferenceType.CARD:
                return new CardDescription().export(partial.value)
            case ReferenceType.SKILL:
                if (typeof partial.value === "number") {
                    return new SkillReferenceDescriptor().export(partial.value)
                } else {
                    return new SkillDescriptor().export(partial.value)
                }
            case ReferenceType.TRAIT:
                return new TraitDescription(partial.value).export()
            default:
                return partial.value.toString();

        }

    }

    export(descriptor: Descriptor) {

        const partials = descriptor.partials();
        const fragments = [];

        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];

            if (partial.type === PartialType.PARTICLE) {
                fragments.push(Description.renderParticle(partial));
            } else if (partial.type === PartialType.REFERENCE) {
                fragments.push(this.renderReference(partial as ReferencePartial));
            } else if (partial.type === PartialType.TEXT) {
                fragments.push(Description.renderText(partial));
            } else if (partial.type === PartialType.VALUE) {
                fragments.push(Description.renderValue(partial as ValuePartial));
            } else {
                fragments.push(partial.value.toString());
            }
        }

        return fragments
        
    }
}