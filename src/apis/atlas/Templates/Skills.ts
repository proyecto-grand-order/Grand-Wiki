import { Skill } from "@isaaczm/api-connector/dist/Schema/Skill";
import Api from "../Api";
import SkillLines from "./Skill.controller";

const SkillCache: Map<number, Skill> = new Map();

export default class SkillModule {
    private static GetSkill = async (skillId?: number): Promise<Skill> => {

        if (!SkillCache.has(skillId)) {
            const skill = await Api.skill(skillId);
            SkillCache.set(skillId, skill)
            return skill
        } else {
            const skill = SkillCache.get(skillId)
            return skill
        }

    }

    static async AdditionalEffectBreakdown(skillId?: number, levels?: number): Promise<string> {
        const Skill = await this.GetSkill(skillId);

        if (Skill === undefined) {
            return " "
        }

        const str = await new SkillLines(Skill.functions, levels, skillId).Render()
        return str
    }
}