import { Func, NoblePhantasm, Region, Skill } from "@isaaczm/api-connector";
import FuncDescriptor from "../Descriptor/FuncDescriptor";
import { describeMutators, getRelatedSkillIds } from "../Helper/FuncHelper";
import { asPercent } from "../Helper/OutputHelper";
import * as map from './ImagesMaps'


export default class EffectBreakdown {
    protected cooldowns?: number[];
    protected funcs: Func.Func[];
    protected gain?: NoblePhantasm.NoblePhantasmGain;
    protected levels?: number;
    protected scripts?: Skill.SkillScript;

    public constructor(
        levels: number,
        funcs: Func.Func[],
        cooldowns?: number[],
        gain?: NoblePhantasm.NoblePhantasmGain,
        scripts?: Skill.SkillScript) {
        this.levels = levels;
        this.funcs = funcs;
        this.cooldowns = cooldowns;
        this.gain = gain;
        this.scripts = scripts;
    }


    private CommandCard(str: string, height?: string) {
        if(height) {
            return `<img src="${map.ImagesMapCardText.get(str)}" style="height:${height}">`
        } else {
            return `<img src="${map.ImagesMapCardText.get(str)}">`
        }
    }

    private async Func() {
        return this.funcs.map(async (func, index) => {
            let mutatingDescriptions = describeMutators(Region.JP, func);
            let relatedSkillIds = getRelatedSkillIds(func);

            for (let i = 0; i < (this.levels ?? 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }

            return `
                <tr>
                    <td>
                        ${relatedSkillIds ? '' : ''}
                        ${await new FuncDescriptor(func, this.levels, 5).render()}
                    </td>
                    ${this.levels ? mutatingDescriptions.map((description, key) => {
                        return `<td key="${key}">${description}</td>`
                    }) : ""}
                </tr>
                ${relatedSkillIds.map((skillId, index) => {
                    return ``
                })}
            `
        })
    }

    async render() {
        return `
        ${this.cooldowns.length > 0 ? `
            <tr>
                <td>Cooldown</td>
                ${this.cooldowns.map((cd, index) => `<td>${cd}</td>`)}
            </tr>
        ` : ''}
        
        ${this.scripts ? '' : ''}

        ${await Promise.all(await this.Func())}
        `
    }
}