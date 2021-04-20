import { Skill } from "@isaaczm/api-connector";

export default class SkillDescriptor {
    static renderAsString(skill: Skill.Skill): string {
        const name = skill.name ? skill.name : `Skill: ${skill.id}`;

        return `[${name}]`;
    }

    private replaces(str: string): string {
        var str = str
        .replace(/恐怖/g, 'Stun')
        // Replace Chance
        return str
    }

    export(skill: Skill.Skill) {
        return `${skill.icon ? `<img src="${skill.icon}" style="height: 30px; vertical-align: middle;">` : ' '} [${skill.name ? this.replaces(skill.name) : `Skill: ${skill.id}`}]`;
    }
}