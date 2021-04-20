import { Region, Servant, Skill } from "@isaaczm/api-connector";
import SkillController from "../../../server/routes/servants/servant.controller";
import Api from "../Api";
import FuncDescriptor from "../Descriptor/FuncDescriptor";
import SkillDescriptor from "../Descriptor/SkillDescriptor";
import { describeMutators } from "../Helper/FuncHelper";


export default class SkillDescReference {
    protected id: number;
    protected cooldowns: boolean;
    protected levels?: number;
    protected rankUp?: number;
    protected servant: Servant.Servant;

    public constructor(id: number, cooldowns: boolean, servant: Servant.Servant, levels?: number, rankUp?: number) {
        this.id = id;
        this.cooldowns = cooldowns;
        this.levels = levels;
        this.rankUp = rankUp;
        this.servant = servant;
    }

    private async GetSkill() {
        return await Api.skill(this.id)
    }

    private Alert(text: string): string {
        return `
        <div class="card-panel blue">
        <span class="white-text">${text}</span>
        </div>
        `
    }

    private async Funcs(skill:Skill.Skill, levels: number): Promise<string[]> {
        const Funcs = [];
        
        skill.functions.forEach(async (func) => {
            let mutatingDescriptions = describeMutators(Region.JP, func)
            
            for (let i = 0; i < (levels ?? 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }

            Funcs.push(await new FuncDescriptor(func, 10).render() + `
            ${levels ? mutatingDescriptions.map((description, index) => {
                return `<td>${description}</td>`
            }).join(' '): null}
            `.replace(/,/g, ' '))

        })
        
        return Funcs;
    }

    private async Skill(skill: Skill.Skill) {
        const x = await new SkillController(skill, this.servant).get();
        const funcs = await this.Funcs(skill, 10);
       
        return {
            x,
            funcs
        }
    }

    async render() {
        const skill = await this.GetSkill();
        
        if (skill === undefined) {
            return null
        }

        const svtSkillRef = await this.Skill(skill);

        return {
            skill: svtSkillRef.x.details,
            funcs:  svtSkillRef.funcs,
            alert: this.rankUp !== undefined ? this.Alert(`Rank Up +${this.rankUp}`) : ""
        }
    }

}
