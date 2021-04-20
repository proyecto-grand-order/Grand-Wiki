import { Card, Region } from "@isaaczm/api-connector";
import { CardDescriptor } from "@isaaczm/api-descriptor";
import Description from "./Description";

export default class CardDescription {
    static renderAsString(card: Card | number): string {
        const descriptor = CardDescriptor.describe(card);

        return "[" + Description.renderAsString(descriptor) + "]";
    }

    export(card: Card) {
        const descriptor = CardDescriptor.describe(card);
        return `<span>[${new Description().export(descriptor)}]</span>`
    }
}