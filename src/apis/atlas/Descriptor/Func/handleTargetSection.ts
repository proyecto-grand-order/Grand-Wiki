import {DataVal, Func, Region} from "@isaaczm/api-connector";
import fetch from "node-fetch";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export const targetDescriptions = new Map<Func.FuncTargetType, string>([
    [Func.FuncTargetType.SELF, 'self'],
    [Func.FuncTargetType.PT_ONE, 'party member'],
    // PT_ANOTHER
    [Func.FuncTargetType.PT_ALL, 'party'],
    [Func.FuncTargetType.ENEMY, 'one enemy'],
    // ENEMY_ANOTHER
    [Func.FuncTargetType.ENEMY_ALL, 'enemies'],
    [Func.FuncTargetType.PT_FULL, 'party (including reserve)'],
    [Func.FuncTargetType.ENEMY_FULL, 'enemies (including reserve)'],
    [Func.FuncTargetType.PT_OTHER, 'party except self'],
    [Func.FuncTargetType.PT_ONE_OTHER, 'other party members besides target'],
    [Func.FuncTargetType.PT_RANDOM, 'random party member'],
    [Func.FuncTargetType.ENEMY_OTHER, 'other enemies besides target'],
    [Func.FuncTargetType.ENEMY_RANDOM, 'random enemy'],
    [Func.FuncTargetType.PT_OTHER_FULL, 'party except self (including reserve)'],
    [Func.FuncTargetType.ENEMY_OTHER_FULL, 'other enemies (including reserve)'],
    [Func.FuncTargetType.PTSELECT_ONE_SUB, 'active party member and reserve party member'],
    [Func.FuncTargetType.PTSELECT_SUB, 'reserve party member'],
    // PT_ONE_ANOTHER_RANDOM
    [Func.FuncTargetType.PT_ONE_ANOTHER_RANDOM, 'other random party member'],
    [Func.FuncTargetType.PT_SELF_ANOTHER_RANDOM, 'other random party member (except self)'],
    [Func.FuncTargetType.ENEMY_ONE_ANOTHER_RANDOM, 'other random enemy'],
    [Func.FuncTargetType.PT_SELF_ANOTHER_FIRST, 'first other party member (except self)'],
    // PT_SELF_BEFORE
    // PT_SELF_AFTER
    // PT_SELF_ANOTHER_LAST
    [Func.FuncTargetType.COMMAND_TYPE_SELF_TREASURE_DEVICE, 'target noble phantasm version'],
]);

export const targetDescriptionsTranslate = async (): Promise<void> => {
    const req = await fetch('https://script.google.com/macros/s/AKfycbwZgw1OD4SwV5UHgUzWujOGkhpigDpplC5BqEPpiUWDRmunqO3P3ieLrDXoNNamOoujJw/exec')
    const res = await req.json();

    Object.entries(res.data[0]).forEach(([key, value]) => {
        //@ts-ignore
        targetDescriptions.set(key, value)
    })
}

export default function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.target,
        parts = section.parts;

    let targetType: Func.FuncTargetType | undefined = func.funcTargetType;

    if (func.funcType === Func.FuncType.ABSORB_NPTURN) {
        switch (dataVal.DependFuncId) {
            case 469:
                targetType = Func.FuncTargetType.ENEMY_ALL;
                break;
            case 5061:
                targetType = Func.FuncTargetType.PT_OTHER;
                break;
        }
    } else if (func.funcType === Func.FuncType.GAIN_HP_FROM_TARGETS) {
        switch (dataVal.DependFuncId) {
            case 711:
                targetType = Func.FuncTargetType.ENEMY_ALL;
                break;
            default:
                targetType = undefined;
                section.showing = false;
                break;
        }
    } else if (func.funcType === Func.FuncType.GAIN_NP_FROM_TARGETS) {
        switch (dataVal.DependFuncId) {
            case 474:
                targetType = Func.FuncTargetType.ENEMY_ALL;
                break;
            case 3962:
                targetType = Func.FuncTargetType.PT_OTHER;
                break;
        }
    }

    if (targetType) {
        parts.push(targetDescriptions.get(targetType) ?? targetType);
    }
}