import {DataVal, Func} from "@isaaczm/api-connector";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.team,
        parts = section.parts;

    if (func.funcTargetTeam === Func.FuncTargetTeam.PLAYER)
        parts.push('<b>[Servant]</b>');
    else if (func.funcTargetTeam === Func.FuncTargetTeam.ENEMY)
        parts.push('<b>[Enemigo]</b>');
    else
        section.showing = false;
}