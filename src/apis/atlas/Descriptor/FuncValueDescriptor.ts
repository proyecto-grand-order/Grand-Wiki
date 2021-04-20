import { DataVal, Func } from "@isaaczm/api-connector";
import { FuncDescriptor } from "@isaaczm/api-descriptor";
import Description from "./Description";


export default class FuncValueDescriptor {
    export(func: Func.Func, staticDataVal: DataVal.DataVal, dataVal: DataVal.DataVal, hideRate?: boolean) {
        const descriptor = FuncDescriptor.describeValue(
            func,
            staticDataVal,
            dataVal,
            hideRate
        );

        return descriptor
            ? new Description().export(descriptor)
            : '-';
    }
}