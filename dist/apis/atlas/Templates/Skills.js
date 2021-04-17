"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = __importDefault(require("../Api"));
const Skill_controller_1 = __importDefault(require("./Skill.controller"));
const SkillCache = new Map();
class SkillModule {
    static async AdditionalEffectBreakdown(skillId, levels) {
        const Skill = await this.GetSkill(skillId);
        if (Skill === undefined) {
            return " ";
        }
        const str = await new Skill_controller_1.default(Skill.functions, levels, skillId).Render();
        return str;
    }
}
exports.default = SkillModule;
SkillModule.GetSkill = async (skillId) => {
    if (!SkillCache.has(skillId)) {
        const skill = await Api_1.default.skill(skillId);
        SkillCache.set(skillId, skill);
        return skill;
    }
    else {
        const skill = SkillCache.get(skillId);
        return skill;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvVGVtcGxhdGVzL1NraWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGlEQUF5QjtBQUN6QiwwRUFBNEM7QUFFNUMsTUFBTSxVQUFVLEdBQXVCLElBQUksR0FBRyxFQUFFLENBQUM7QUFFakQsTUFBcUIsV0FBVztJQWM1QixNQUFNLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLE9BQWdCLEVBQUUsTUFBZTtRQUNwRSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFBO1NBQ2I7UUFFRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksMEJBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUMzRSxPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUM7O0FBdkJMLDhCQXdCQztBQXZCa0Isb0JBQVEsR0FBRyxLQUFLLEVBQUUsT0FBZ0IsRUFBa0IsRUFBRTtJQUVqRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMxQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUIsT0FBTyxLQUFLLENBQUE7S0FDZjtTQUFNO1FBQ0gsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQyxPQUFPLEtBQUssQ0FBQTtLQUNmO0FBRUwsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3Rvci9kaXN0L1NjaGVtYS9Ta2lsbFwiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vQXBpXCI7XG5pbXBvcnQgU2tpbGxMaW5lcyBmcm9tIFwiLi9Ta2lsbC5jb250cm9sbGVyXCI7XG5cbmNvbnN0IFNraWxsQ2FjaGU6IE1hcDxudW1iZXIsIFNraWxsPiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxNb2R1bGUge1xuICAgIHByaXZhdGUgc3RhdGljIEdldFNraWxsID0gYXN5bmMgKHNraWxsSWQ/OiBudW1iZXIpOiBQcm9taXNlPFNraWxsPiA9PiB7XG5cbiAgICAgICAgaWYgKCFTa2lsbENhY2hlLmhhcyhza2lsbElkKSkge1xuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSBhd2FpdCBBcGkuc2tpbGwoc2tpbGxJZCk7XG4gICAgICAgICAgICBTa2lsbENhY2hlLnNldChza2lsbElkLCBza2lsbClcbiAgICAgICAgICAgIHJldHVybiBza2lsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSBTa2lsbENhY2hlLmdldChza2lsbElkKVxuICAgICAgICAgICAgcmV0dXJuIHNraWxsXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBBZGRpdGlvbmFsRWZmZWN0QnJlYWtkb3duKHNraWxsSWQ/OiBudW1iZXIsIGxldmVscz86IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IFNraWxsID0gYXdhaXQgdGhpcy5HZXRTa2lsbChza2lsbElkKTtcblxuICAgICAgICBpZiAoU2tpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiIFwiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHIgPSBhd2FpdCBuZXcgU2tpbGxMaW5lcyhTa2lsbC5mdW5jdGlvbnMsIGxldmVscywgc2tpbGxJZCkuUmVuZGVyKClcbiAgICAgICAgcmV0dXJuIHN0clxuICAgIH1cbn0iXX0=