import {DataVal, Func} from "@isaaczm/api-connector";
import {funcUpdatesByLevel, funcUpdatesByOvercharge} from "../../Helper/FuncHelper";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.scaling,
        parts = section.parts,
        isLevel = funcUpdatesByLevel(func),
        isOvercharge = funcUpdatesByOvercharge(func);

    if (!isLevel && !isOvercharge) {
        section.showing = false;
        return;
    }

    if (isLevel) {
        parts.push('<b>⎡NIVEL⎦</b>');
    }

    if (isOvercharge) {
        parts.push('<b>⎡SOBRECARGA⎦</b>');
    }
}