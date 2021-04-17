"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_connector_1 = require("@isaaczm/api-connector");
const FuncDescriptor_1 = __importDefault(require("../../../apis/atlas/Descriptor/FuncDescriptor"));
const QuestDescriptor_1 = __importDefault(require("../../../apis/atlas/Descriptor/QuestDescriptor"));
const SkillTranslate_1 = require("../../../apis/atlas/Descriptor/SkillTranslate");
const FuncHelper_1 = require("../../../apis/atlas/Helper/FuncHelper");
const Skill_1 = __importDefault(require("../../../apis/atlas/Reference/Skill"));
const Skills_1 = __importDefault(require("../../../apis/atlas/Templates/Skills"));
class SkillController {
    constructor(skill, servant) {
        this.skill = skill;
        this.servant = servant;
    }
    async Funcs(levels) {
        const Funcs = [];
        this.skill.functions.forEach(async (func) => {
            let mutatingDescriptions = FuncHelper_1.describeMutators(api_connector_1.Region.JP, func);
            let relatedSkillIds = FuncHelper_1.getRelatedSkillIds(func);
            for (let i = 0; i < (levels !== null && levels !== void 0 ? levels : 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }
            Funcs.push(await new FuncDescriptor_1.default(func, 10).render() + `

            ${levels ? mutatingDescriptions.map((description, index) => {
                return `<td>${description}</td>`;
            }).join(' ') : null}
            ${await Promise.all(relatedSkillIds.map(async (skillID) => {
                const str = await Skills_1.default.AdditionalEffectBreakdown(skillID, levels);
                return str;
            }))}
            `.replace(/,/g, ' '));
        });
        return Funcs;
    }
    skillRankUps(skillId) {
        var _a, _b;
        const rankUps = (_a = this.servant) === null || _a === void 0 ? void 0 : _a.script.SkillRankUp;
        if (!rankUps)
            return [];
        const ids = (_b = rankUps[skillId]) !== null && _b !== void 0 ? _b : [];
        return Array.from(new Set(ids));
    }
    Alert(text) {
        return `
        <div class="card-panel green">
        <span class="white-text">${text}</span>
        </div>
        `;
    }
    Translate(skill, servant) {
        if (SkillTranslate_1.MapSkillTranslated.has(servant.id + skill.id)) {
            return {
                original: {
                    name: skill.name,
                    detail: skill.detail
                },
                name: SkillTranslate_1.MapSkillTranslated.get(servant.id + skill.id).name,
                detail: SkillTranslate_1.MapSkillTranslated.get(servant.id + skill.id).detail,
            };
        }
        else {
            return {
                original: {
                    name: null,
                    detail: null
                },
                name: skill.name,
                detail: skill.detail
            };
        }
    }
    SkillDetails() {
        return {
            original: {
                name: this.Translate(this.skill, this.servant).original.name,
                detail: this.Translate(this.skill, this.servant).original.detail
            },
            name: this.Translate(this.skill, this.servant).name,
            desc: this.skill.detail ? this.Translate(this.skill, this.servant).detail : '???',
            cooldown: this.skill.coolDown,
            icon: this.skill.icon ? this.skill.icon : ' '
        };
    }
    async OhterSkill(level) {
        const Other = [];
        this.skillRankUps(this.skill.id).map(async (rankUpSkill, rankUp) => {
            Other.push(await new Skill_1.default(rankUpSkill, true, this.servant, level, rankUp + 1).render());
        });
        return Other;
    }
    async get() {
        return {
            details: this.SkillDetails(),
            funcs: await this.Funcs(10),
            other: await this.OhterSkill(10),
            alert: this.skill.condQuestId && this.skill.condQuestPhase ? this.Alert('Disponible despues de [' + new QuestDescriptor_1.default("", this.skill.condQuestId, this.skill.condQuestPhase).Quest() + ']') : "",
        };
    }
}
exports.default = SkillController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmFudC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcnZlci9yb3V0ZXMvc2VydmFudHMvc2VydmFudC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQWdFO0FBQ2hFLG1HQUEyRTtBQUUzRSxxR0FBNkU7QUFDN0Usa0ZBQWlGO0FBQ2pGLHNFQUE2RjtBQUM3RixnRkFBcUU7QUFFckUsa0ZBQStEO0FBdUIvRCxNQUFxQixlQUFlO0lBSWhDLFlBQW1CLEtBQWtCLEVBQUUsT0FBd0I7UUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBYztRQUM5QixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN4QyxJQUFJLG9CQUFvQixHQUFHLDZCQUFnQixDQUFDLHNCQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzVELElBQUksZUFBZSxHQUFHLCtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUN4QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSx3QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRzs7Y0FFdkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZELE9BQU8sT0FBTyxXQUFXLE9BQU8sQ0FBQTtZQUNwQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUk7Y0FDaEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFXLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUN4RSxPQUFPLEdBQUcsQ0FBQTtZQUNkLENBQUMsQ0FBQyxDQUFDO2FBQ0YsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRU8sWUFBWSxDQUFDLE9BQWU7O1FBQ2hDLE1BQU0sT0FBTyxHQUFHLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTztZQUNSLE9BQU8sRUFBRSxDQUFDO1FBRWQsTUFBTSxHQUFHLEdBQUcsTUFBQSxPQUFPLENBQUMsT0FBTyxDQUFDLG1DQUFJLEVBQUUsQ0FBQztRQUVuQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sS0FBSyxDQUFDLElBQVk7UUFDdEIsT0FBTzs7bUNBRW9CLElBQUk7O1NBRTlCLENBQUE7SUFDTCxDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQWtCLEVBQUUsT0FBd0I7UUFDMUQsSUFBRyxtQ0FBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0MsT0FBTztnQkFDTixRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO29CQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07aUJBQ3ZCO2dCQUNELElBQUksRUFBRSxtQ0FBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtnQkFDdEQsTUFBTSxFQUFFLG1DQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNO2FBQzFELENBQUE7U0FDSDthQUFNO1lBQ0gsT0FBTztnQkFDSCxRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDdkIsQ0FBQTtTQUNKO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDaEIsT0FBTztZQUNILFFBQVEsRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDNUQsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDbkU7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJO1lBQ25ELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEYsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQ2hELENBQUE7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFhO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksZUFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3pHLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHO1FBQ0wsT0FBTztZQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzNCLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLHlCQUFlLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUU7U0FDdE0sQ0FBQTtJQUNMLENBQUM7Q0FDSjtBQTNHRCxrQ0EyR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpb24sIFNlcnZhbnQsIFNraWxsIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCBGdW5jRGVzY3JpcHRvciBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0Z1bmNEZXNjcmlwdG9yXCI7XG5pbXBvcnQgRnVuY1ZhbHVlRGVzY3JpcHRvciBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0Z1bmNWYWx1ZURlc2NyaXB0b3JcIjtcbmltcG9ydCBRdWVzdERlc2NyaXB0b3IgZnJvbSBcIi4uLy4uLy4uL2FwaXMvYXRsYXMvRGVzY3JpcHRvci9RdWVzdERlc2NyaXB0b3JcIjtcbmltcG9ydCB7TWFwU2tpbGxUcmFuc2xhdGVkfSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL1NraWxsVHJhbnNsYXRlXCI7XG5pbXBvcnQgeyBkZXNjcmliZU11dGF0b3JzLCBnZXRSZWxhdGVkU2tpbGxJZHMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9IZWxwZXIvRnVuY0hlbHBlclwiO1xuaW1wb3J0IFNraWxsRGVzY1JlZmVyZW5jZSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9SZWZlcmVuY2UvU2tpbGxcIjtcbmltcG9ydCBTa2lsbExpbmVzIGZyb20gXCIuLi8uLi8uLi9hcGlzL2F0bGFzL1RlbXBsYXRlcy9Ta2lsbC5jb250cm9sbGVyXCI7XG5pbXBvcnQgU2tpbGxNb2R1bGUgZnJvbSBcIi4uLy4uLy4uL2FwaXMvYXRsYXMvVGVtcGxhdGVzL1NraWxsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNraWxsUmV0dXJuIHtcbiAgICBkZXRhaWxzOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZGVzYzogc3RyaW5nLFxuICAgICAgICBjb29sZG93bjogbnVtYmVyW11cbiAgICAgICAgaWNvbjogc3RyaW5nXG4gICAgfSxcbiAgICBmdW5jczogc3RyaW5nW10sXG4gICAgb3RoZXI6IHN0cmluZ1tdLFxuICAgIGFsZXJ0OiBzdHJpbmcsXG59XG5cbmludGVyZmFjZSByZXR1cm5Ta2lsbFRyYW5zbGF0ZWQge1xuICAgIG9yaWdpbmFsOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZGV0YWlsOiBzdHJpbmdcbiAgICB9LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBkZXRhaWw6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbENvbnRyb2xsZXIge1xuICAgIHByb3RlY3RlZCBza2lsbDogU2tpbGwuU2tpbGw7XG4gICAgcHJvdGVjdGVkIHNlcnZhbnQ6IFNlcnZhbnQuU2VydmFudDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihza2lsbDogU2tpbGwuU2tpbGwsIHNlcnZhbnQ6IFNlcnZhbnQuU2VydmFudCkge1xuICAgICAgICB0aGlzLnNraWxsID0gc2tpbGw7XG4gICAgICAgIHRoaXMuc2VydmFudCA9IHNlcnZhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBGdW5jcyhsZXZlbHM6IG51bWJlcikge1xuICAgICAgICBjb25zdCBGdW5jczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICB0aGlzLnNraWxsLmZ1bmN0aW9ucy5mb3JFYWNoKGFzeW5jIChmdW5jKSA9PiB7XG4gICAgICAgICAgICBsZXQgbXV0YXRpbmdEZXNjcmlwdGlvbnMgPSBkZXNjcmliZU11dGF0b3JzKFJlZ2lvbi5KUCwgZnVuYylcbiAgICAgICAgICAgIGxldCByZWxhdGVkU2tpbGxJZHMgPSBnZXRSZWxhdGVkU2tpbGxJZHMoZnVuYyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGxldmVscyA/PyAwKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtdXRhdGluZ0Rlc2NyaXB0aW9uc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpbmdEZXNjcmlwdGlvbnMucHVzaCgnLScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGdW5jcy5wdXNoKGF3YWl0IG5ldyBGdW5jRGVzY3JpcHRvcihmdW5jLCAxMCkucmVuZGVyKCkgKyBgXG5cbiAgICAgICAgICAgICR7bGV2ZWxzID8gbXV0YXRpbmdEZXNjcmlwdGlvbnMubWFwKChkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDx0ZD4ke2Rlc2NyaXB0aW9ufTwvdGQ+YFxuICAgICAgICAgICAgfSkuam9pbignICcpOiBudWxsfVxuICAgICAgICAgICAgJHthd2FpdCBQcm9taXNlLmFsbChyZWxhdGVkU2tpbGxJZHMubWFwKGFzeW5jIChza2lsbElEKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gYXdhaXQgU2tpbGxNb2R1bGUuQWRkaXRpb25hbEVmZmVjdEJyZWFrZG93bihza2lsbElELCBsZXZlbHMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgYC5yZXBsYWNlKC8sL2csICcgJykpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gRnVuY3NcbiAgICB9XG5cbiAgICBwcml2YXRlIHNraWxsUmFua1Vwcyhza2lsbElkOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHJhbmtVcHMgPSB0aGlzLnNlcnZhbnQ/LnNjcmlwdC5Ta2lsbFJhbmtVcDtcbiAgICAgICAgaWYgKCFyYW5rVXBzKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICAgIGNvbnN0IGlkcyA9IHJhbmtVcHNbc2tpbGxJZF0gPz8gW107XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChpZHMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEFsZXJ0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXBhbmVsIGdyZWVuXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2hpdGUtdGV4dFwiPiR7dGV4dH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBUcmFuc2xhdGUoc2tpbGw6IFNraWxsLlNraWxsLCBzZXJ2YW50OiBTZXJ2YW50LlNlcnZhbnQpOiByZXR1cm5Ta2lsbFRyYW5zbGF0ZWQge1xuICAgICAgICBpZihNYXBTa2lsbFRyYW5zbGF0ZWQuaGFzKHNlcnZhbnQuaWQrc2tpbGwuaWQpKSB7XG4gICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHNraWxsLm5hbWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBza2lsbC5kZXRhaWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiBNYXBTa2lsbFRyYW5zbGF0ZWQuZ2V0KHNlcnZhbnQuaWQrc2tpbGwuaWQpLm5hbWUsXG4gICAgICAgICAgICBkZXRhaWw6IE1hcFNraWxsVHJhbnNsYXRlZC5nZXQoc2VydmFudC5pZCtza2lsbC5pZCkuZGV0YWlsLFxuICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogc2tpbGwubmFtZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHNraWxsLmRldGFpbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTa2lsbERldGFpbHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuVHJhbnNsYXRlKHRoaXMuc2tpbGwsIHRoaXMuc2VydmFudCkub3JpZ2luYWwubmFtZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuVHJhbnNsYXRlKHRoaXMuc2tpbGwsIHRoaXMuc2VydmFudCkub3JpZ2luYWwuZGV0YWlsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5UcmFuc2xhdGUodGhpcy5za2lsbCwgdGhpcy5zZXJ2YW50KS5uYW1lLFxuICAgICAgICAgICAgZGVzYzogdGhpcy5za2lsbC5kZXRhaWw/IHRoaXMuVHJhbnNsYXRlKHRoaXMuc2tpbGwsIHRoaXMuc2VydmFudCkuZGV0YWlsIDogJz8/PycsXG4gICAgICAgICAgICBjb29sZG93bjogdGhpcy5za2lsbC5jb29sRG93bixcbiAgICAgICAgICAgIGljb246IHRoaXMuc2tpbGwuaWNvbiA/IHRoaXMuc2tpbGwuaWNvbiA6ICcgJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBPaHRlclNraWxsKGxldmVsOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGNvbnN0IE90aGVyID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNraWxsUmFua1Vwcyh0aGlzLnNraWxsLmlkKS5tYXAoYXN5bmMgKHJhbmtVcFNraWxsLCByYW5rVXApID0+IHtcbiAgICAgICAgICAgIE90aGVyLnB1c2goYXdhaXQgbmV3IFNraWxsRGVzY1JlZmVyZW5jZShyYW5rVXBTa2lsbCwgdHJ1ZSwgdGhpcy5zZXJ2YW50LCBsZXZlbCwgcmFua1VwICsgMSkucmVuZGVyKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIE90aGVyXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KCk6IFByb21pc2U8U2tpbGxSZXR1cm4+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRldGFpbHM6IHRoaXMuU2tpbGxEZXRhaWxzKCksXG4gICAgICAgICAgICBmdW5jczogYXdhaXQgdGhpcy5GdW5jcygxMCksXG4gICAgICAgICAgICBvdGhlcjogYXdhaXQgdGhpcy5PaHRlclNraWxsKDEwKSxcbiAgICAgICAgICAgIGFsZXJ0OiB0aGlzLnNraWxsLmNvbmRRdWVzdElkICYmIHRoaXMuc2tpbGwuY29uZFF1ZXN0UGhhc2UgPyB0aGlzLkFsZXJ0KCdEaXNwb25pYmxlIGRlc3B1ZXMgZGUgWycgKyBuZXcgUXVlc3REZXNjcmlwdG9yKFwiXCIsIHRoaXMuc2tpbGwuY29uZFF1ZXN0SWQsIHRoaXMuc2tpbGwuY29uZFF1ZXN0UGhhc2UpLlF1ZXN0KCkgKyAnXScpICA6IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG59Il19