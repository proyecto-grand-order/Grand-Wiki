import { Buff, Region } from "@isaaczm/api-connector";
import { BuffDescriptor } from "@isaaczm/api-descriptor";
import Description from "./Description";

export default class BuffDescription {
    static renderAsString(buff: Buff.Buff): string {
        const descriptor = BuffDescriptor.describe(buff);

        return "[" + Description.renderAsString(descriptor) + "]";
    }

    export(buff: Buff.Buff) {
        const descriptor = BuffDescriptor.describe(buff);

        return `[${buff.icon ? `<img style="height: 30px;vertical-align: middle;" src="${buff.icon}">` : ' '} ${Description.renderAsString(descriptor)}]`
    }
}