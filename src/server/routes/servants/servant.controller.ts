import { Region, Servant, Skill } from "@isaaczm/api-connector";
import FuncDescriptor from "../../../apis/atlas/Descriptor/FuncDescriptor";
import FuncValueDescriptor from "../../../apis/atlas/Descriptor/FuncValueDescriptor";
import QuestDescriptor from "../../../apis/atlas/Descriptor/QuestDescriptor";
import {MapSkillTranslated} from "../../../apis/atlas/Descriptor/SkillTranslate";
import { describeMutators, getRelatedSkillIds } from "../../../apis/atlas/Helper/FuncHelper";
import SkillDescReference from "../../../apis/atlas/Reference/Skill";
import SkillLines from "../../../apis/atlas/Templates/Skill.controller";
import SkillModule from "../../../apis/atlas/Templates/Skills";

export interface SkillReturn {
    details: {
        name: string,
        desc: string,
        cooldown: number[]
        icon: string
    },
    funcs: string[],
    other: string[],
    alert: string,
}

interface returnSkillTranslated {
    original: {
        name: string,
        detail: string
    },
    name: string,
    detail: string
}

export default class SkillController {
    protected skill: Skill.Skill;
    protected servant: Servant.Servant;

    public constructor(skill: Skill.Skill, servant: Servant.Servant) {
        this.skill = skill;
        this.servant = servant;
    }

    private async Funcs(levels: number) {
        const Funcs: string[] = [];

        this.skill.functions.forEach(async (func) => {
            let mutatingDescriptions = describeMutators(Region.JP, func)
            let relatedSkillIds = getRelatedSkillIds(func);

            for (let i = 0; i < (levels ?? 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }

            Funcs.push(await new FuncDescriptor(func, 10).render() + `

            ${levels ? mutatingDescriptions.map((description, index) => {
                return `<td>${description}</td>`
            }).join(' '): null}
            ${await Promise.all(relatedSkillIds.map(async (skillID) => {
                const str = await SkillModule.AdditionalEffectBreakdown(skillID, levels)
                return str
            }))}
            `.replace(/,/g, ' '))
        })
        
        return Funcs
    }

    private skillRankUps(skillId: number): number[] {
        const rankUps = this.servant?.script.SkillRankUp;
        if (!rankUps)
            return [];

        const ids = rankUps[skillId] ?? [];

        return Array.from(new Set(ids));
    }

    private Alert(text: string): string {
        return `
        <div class="card-panel green">
        <span class="white-text">${text}</span>
        </div>
        `
    }

    private Translate(skill: Skill.Skill, servant: Servant.Servant): returnSkillTranslated {
        if(MapSkillTranslated.has(servant.id+skill.id)) {
           return {
            original: {
                name: skill.name,
                detail: skill.detail
            },
            name: MapSkillTranslated.get(servant.id+skill.id).name,
            detail: MapSkillTranslated.get(servant.id+skill.id).detail,
           }
        } else {
            return {
                original: {
                    name: null,
                    detail: null
                },
                name: skill.name,
                detail: skill.detail
            }
        }
    }

    private SkillDetails() {
        return {
            original: {
                name: this.Translate(this.skill, this.servant).original.name,
                detail: this.Translate(this.skill, this.servant).original.detail
            },
            name: this.Translate(this.skill, this.servant).name,
            desc: this.skill.detail? this.Translate(this.skill, this.servant).detail : '???',
            cooldown: this.skill.coolDown,
            icon: this.skill.icon ? this.skill.icon : ' '
        }
    }

    private async OhterSkill(level: number): Promise<string[]> {
        const Other = [];
        
        this.skillRankUps(this.skill.id).map(async (rankUpSkill, rankUp) => {
            Other.push(await new SkillDescReference(rankUpSkill, true, this.servant, level, rankUp + 1).render())
        })

        return Other
    }

    async get(): Promise<SkillReturn> {
        return {
            details: this.SkillDetails(),
            funcs: await this.Funcs(10),
            other: await this.OhterSkill(10),
            alert: this.skill.condQuestId && this.skill.condQuestPhase ? this.Alert('Disponible despues de [' + new QuestDescriptor("", this.skill.condQuestId, this.skill.condQuestPhase).Quest() + ']')  : "",
        }
    }
}