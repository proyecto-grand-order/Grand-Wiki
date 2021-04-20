import {Buff, DataVal, Region} from "@isaaczm/api-connector";
import {BuffDescriptor} from "@isaaczm/api-descriptor";
import Description from "./Description";


export default class BuffValueDescription
{
    static renderAsString(buff: Buff.Buff, dataVal: DataVal.DataVal): string {
        const descriptor = BuffDescriptor.describeValue(buff, dataVal);

        return descriptor ? Description.renderAsString(descriptor) : '-';
    }

    export(buff: Buff.Buff, dataVal: DataVal.DataVal) {
        const descriptor = BuffDescriptor.describeValue(buff, dataVal);

        return  descriptor
        ? new Description().export(descriptor)
        : '-';
    }
}