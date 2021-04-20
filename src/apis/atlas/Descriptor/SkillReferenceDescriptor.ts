import { Skill } from "@isaaczm/api-connector";
import Api from "../Api";
import SkillDescriptor from "./SkillDescriptor";



export default class SkillReferenceDescriptor {
    protected skillCache: Map<string, Skill.Skill>;

    constructor() {
        this.skillCache = new Map();
    }

    async Skill(id: number): Promise<Skill.Skill> {
        try {
            const skill = this.skillCache.get(String(id));

            if (skill) return skill
    
            const skillApi = await Api.skill(id);
            this.skillCache.set(String(skillApi.id), skillApi)

            return skillApi
        } catch(err) {
            console.log(err)
        }
    }

    static renderAsString(id: number): string {
        return `[Skill: ${id}]`;
    }

    async export(id: number) {

        const skill = await this.Skill(id);

        if (skill === undefined) {
            return "[" + 'Skill: ' + id + ']'
        }

        return new SkillDescriptor().export(skill)
    }
}