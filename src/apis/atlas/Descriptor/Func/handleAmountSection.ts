import {Buff, DataVal, Func, Region} from "@isaaczm/api-connector";
import BuffValueDescription from "../BuffValueDescription";
import FuncValueDescriptor from "../FuncValueDescriptor";
import SkillReferenceDescriptor from "../SkillReferenceDescriptor";
import TraitDescription from "../TraitDescription";
import {FuncDescriptorSections} from "./FuncDescriptorSections";

export default async function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal, support?: boolean): Promise<void> {
    const section = sections.amount,
        parts = section.parts;

    if (support) {
        parts.push('( Solo soporte:');
    }

    if (func.buffs[0]?.type === Buff.BuffType.ADD_INDIVIDUALITY && typeof dataVal.Value === "number") {
        parts.push(
            new TraitDescription(dataVal.Value).export()
        );
    } else if (
        (
            func.buffs[0]?.type === Buff.BuffType.ATTACK_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.COMMANDATTACK_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.COMMANDATTACK_BEFORE_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.COMMANDCODEATTACK_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.DAMAGE_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.DEAD_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.DELAY_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.GUTS_FUNCTION
            || func.buffs[0]?.type === Buff.BuffType.SELFTURNEND_FUNCTION
        )
        && typeof dataVal.Value === "number"
    ) {
        section.preposition = undefined;
        parts.push('esto desencadena');
        parts.push(await new SkillReferenceDescriptor().export(dataVal.Value));
    } else if (func.funcType === Func.FuncType.CARD_RESET && dataVal.Value) {
        section.preposition = undefined;
        parts.push(`${dataVal.Value} ${dataVal.Value > 1 ? 'veces' : 'vez'}`);
    } else if (func.funcType === Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM) {
        parts.push(new FuncValueDescriptor().export(func, dataVal, dataVal, true));
    } else if (
        (
            func.funcType === Func.FuncType.ABSORB_NPTURN
            || func.funcType === Func.FuncType.GAIN_HP_FROM_TARGETS
            || func.funcType === Func.FuncType.GAIN_NP_FROM_TARGETS
        ) && dataVal.DependFuncId
    ) {
        if (dataVal.DependFuncVals?.Value) {
            section.parts.push(new FuncValueDescriptor().export(func, dataVal, dataVal, true));
        } else {
            section.showing = false;
        }
    } else if (dataVal.AddCount && (
        func.funcType === Func.FuncType.EVENT_DROP_UP
        || func.funcType === Func.FuncType.EXP_UP
        || func.funcType === Func.FuncType.QP_UP
        || func.funcType === Func.FuncType.USER_EQUIP_EXP_UP
    )) {
        parts.push(new FuncValueDescriptor().export(func, dataVal, dataVal));
    } else if (dataVal.RateCount && (
        func.funcType === Func.FuncType.QP_DROP_UP
        || func.funcType === Func.FuncType.SERVANT_FRIENDSHIP_UP
        || func.funcType === Func.FuncType.USER_EQUIP_EXP_UP
    )) {
        parts.push(new FuncValueDescriptor().export(func, dataVal, dataVal));
    } else if (func.buffs[0]?.type === Buff.BuffType.NPATTACK_PREV_BUFF) {
        if (typeof dataVal.SkillID !== "number") {
            section.showing = false;
            return;
        }

        section.preposition = undefined;
        parts.push('esto desencadena');
        parts.push(
            await new SkillReferenceDescriptor().export(dataVal.SkillID)
        );
    } else if (func.buffs[0] && dataVal.Value) {
        parts.push(new BuffValueDescription().export(func.buffs[0], dataVal));
    } else if (dataVal.Value) {
        parts.push( new FuncValueDescriptor().export(func, dataVal, dataVal, true) )
    } else if (!dataVal.Value && dataVal.Correction) {
        section.preposition = 'con';
        parts.push('bonus');
        parts.push(new FuncValueDescriptor().export(func, dataVal, dataVal, true));
    } else {
        section.showing = false;
    }

    if (support) {
        parts.push(')');
    }
}
