import { Func, NoblePhantasm, Region, Skill } from "@isaaczm/api-connector";
import FuncDescriptor from "../Descriptor/FuncDescriptor";
import SkillReferenceDescriptor from "../Descriptor/SkillReferenceDescriptor";
import { describeMutators, getRelatedSkillIds } from "../Helper/FuncHelper";
import { asPercent, Renderable } from "../Helper/OutputHelper";
import SkillModule from "./Skills";

export default class SkillLines {
    protected funcs: Func.Func[];
    protected cooldowns?: number[];
    protected gain?: NoblePhantasm.NoblePhantasmGain;
    protected levels?: number;
    protected scripts?: Skill.SkillScript;
    protected relatedSkillId?: number;

    constructor(funcs: Func.Func[], levels?: number, relatedSkillId?: number, gain?: NoblePhantasm.NoblePhantasmGain,  scripts?: Skill.SkillScript) {
        this.funcs = funcs;
        this.gain = gain;
        this.levels = levels;
        this.scripts = scripts;
        this.relatedSkillId = relatedSkillId;
        this.Render()
    }

    private displayRequirement(detail: string, values: Renderable[]): string {
        return `
        <tr>
            <td>[Requisitos] ${detail}</td>
            ${this.levels ? Array(this.levels).fill(null).map((_, i) => {
                return `<td>${values[i] ?? '-'}</td>`;
            }) : values.map((value, i) => {
                return `<td>${value}</td>`;
            })}
        </tr>
        `
    }

    private hpPerLowerRequirements(): string | undefined {
        if (!this.scripts.HP_PER_LOWER)
            return undefined;

        return this.displayRequirement(
            'Health Percent Below',
            this.scripts.HP_PER_LOWER.map(value => asPercent(value, 1))
        );
    }

    private hpRequirements(): string | undefined {
        if (!this.scripts.HP_VAL_HIGHER)
            return undefined;

        return this.displayRequirement('Health', this.scripts.HP_VAL_HIGHER);
    }

    private npRequirements(): string | undefined {
        if (!this.scripts.NP_HIGHER)
            return undefined;

        return this.displayRequirement(
            'NP Gauge',
            this.scripts.NP_HIGHER.map(value => asPercent(value, 0))
        );
    }

    private starRequirements(): string | undefined {
        if (!this.scripts.STAR_HIGHER)
            return undefined;

        return this.displayRequirement('Critical Stars', this.scripts.STAR_HIGHER);
    }

    private ScriptsRender() {
        return `
        ${this.hpPerLowerRequirements()}
        ${this.hpRequirements()}
        ${this.npRequirements()}
        ${this.starRequirements()}
        `
    }

    async Render() {

        const map = await Promise.all(this.funcs.map(async (func, index) => {
            let mutatingDescriptions = describeMutators(Region.JP, func)
            let relatedSkillIds = getRelatedSkillIds(func);

            for (let i = 0; i < (this.levels ?? 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }

            return `
            <tr>
                <td>
                ${this.relatedSkillId ? '<span id="arrowReference">↳</span>' + await new SkillReferenceDescriptor().export(this.relatedSkillId) : " "}
                ${await new FuncDescriptor(func, this.levels).render()}
                </td>
                ${this.levels ? mutatingDescriptions.map((description) => {
                    return `<td>${description}</td>`
                }) : " "}
            </tr>
            ${relatedSkillIds.map(async (skillId, index) => {
                return await SkillModule.AdditionalEffectBreakdown(skillId, this.levels)
            })}
            `
        }));

        return `
            ${this.cooldowns ? `
                <tr>
                    <td>Cooldown</td>
                    ${this.cooldowns.map(cd => {
                        return `<td>${cd}</td>`
                    })}
                </tr>
            `: ''}
            ${this.scripts ? `
                ${this.ScriptsRender()}
            ` : ''}
            ${this.gain ? `
                <tr>
                    <td>NP Gain</td>
                    ${[...Array(this.levels)].map((_, key) => {
                        return `
                        <td>
                            ${asPercent(this.gain?.buster[key], 2)} Buster<br/>
                            ${asPercent(this.gain?.arts[key], 2)} Arts<br/>
                            ${asPercent(this.gain?.quick[key], 2)} Quicks<br/>
                            ${asPercent(this.gain?.extra[key], 2)} Extra<br/>
                            ${asPercent(this.gain?.np[key], 2)} NP<br/>
                            ${asPercent(this.gain?.defence[key], 2)} Def
                        </td>`;
                    })}
                </tr>
            `: " "}
            ${map}
        `
    }
}