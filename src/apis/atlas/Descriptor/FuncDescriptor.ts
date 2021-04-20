// Traducido y modicado del repositorio https://github.com/atlasacademy/aa-db/blob/master/src/Descriptor/FuncDescriptor.tsx
import { DataVal, Func, Region } from "@isaaczm/api-connector";
import {
    getDataValList,
    getFollowerDataValList,
    getStaticFieldValues,
    getTargetFollowerVersionValues,
    getTargetVersionValues,
    hasFollowerDataVals
} from "../Helper/FuncHelper";
import {joinElements, Renderable} from "../Helper/OutputHelper";
import {FuncDescriptorSections} from "./Func/FuncDescriptorSections";
import handleActionSection, { funcDescriptions } from "./Func/handleActionSection";
import handleAffectsSection from "./Func/handleAffectsSection";
import handleAmountSection from "./Func/handleAmountSection";
import handleChanceSection from "./Func/handleChanceSection";
import handleDurationSection from "./Func/handleDurationSection";
import handleScalingSection from "./Func/handleScalingSection";
import handleTargetSection from "./Func/handleTargetSection";
import handleTeamSection from "./Func/handleTeamSection";

export default class FuncDescriptor {
    protected func: Func.Func;
    protected level?: number;
    protected overcharge?: number;

    public constructor(func: Func.Func, level?: number, overcharge?: number) {
        this.func = func,
        this.level = level,
        this.overcharge = overcharge
    }

    getDataVal(): DataVal.DataVal {
        const func = this.func;

        if (this.level) {
            return getTargetVersionValues(func, this.level, this.overcharge ?? 1) ?? {};
        } else {
            const dataVals = getDataValList(func);

            return getStaticFieldValues(dataVals);
        }
    }

    getFollowerDataVal(): DataVal.DataVal | undefined {
        const func = this.func;

        if (!hasFollowerDataVals(func))
            return undefined;

        if (this.level) {
            return getTargetFollowerVersionValues(func, this.level) ?? {};
        } else {
            const dataVals = getFollowerDataValList(func);

            return getStaticFieldValues(dataVals);
        }
    }
        
    async render() {
        const func = this.func;
        const dataVal = this.getDataVal();
        const followerDataVal = this.getFollowerDataVal();

        const sections = new FuncDescriptorSections();
        
        // Handles
        handleTeamSection(sections, func, dataVal);
        handleChanceSection(sections, func, dataVal);
        handleActionSection(sections, func, dataVal);
        handleAffectsSection(sections, func, dataVal)
        await handleAmountSection(sections, func, dataVal)
        if (followerDataVal) {
            await handleAmountSection(sections, func, followerDataVal, true);
        }
        handleTargetSection(sections, func, dataVal);
        handleDurationSection(sections, func, dataVal);
        handleScalingSection(sections, func, dataVal);
                
        let parts: Renderable[] = [];
        
        Object.values(sections).forEach(section => {
            if (!section.showing)
                return;

            if (section.preposition)
                parts.push(section.preposition);

            parts = parts.concat(section.parts);
        });

        parts = joinElements(parts, ' ');

        return `${parts.map((element) => {
            return element
        }).join(' ')}`
    }
}