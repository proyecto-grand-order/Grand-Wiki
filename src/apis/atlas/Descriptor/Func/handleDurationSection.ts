import {DataVal, Func} from "@isaaczm/api-connector";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.duration,
        parts = section.parts;

    if (dataVal.Count && dataVal.Count > 0 && dataVal.Turn && dataVal.Turn > 0) {
        const countDesc = dataVal.Count === 1 ? '1 Vez' : `${dataVal.Count} Veces`,
            turnDesc = dataVal.Turn === 1 ? '1 Turno' : `${dataVal.Turn} Turnos`;

        parts.push(`(${turnDesc}, ${countDesc})`);
    } else if (dataVal.Turn && dataVal.Turn > 0) {
        parts.push(dataVal.Turn === 1 ? '(1 Turno)' : `(${dataVal.Turn} Turnos)`);
    } else if (dataVal.Count && dataVal.Count > 0) {
        parts.push(dataVal.Count === 1 ? '(1 Vez)' : `(${dataVal.Count} Veces)`);
    } else {
        section.showing = false;
    }
}