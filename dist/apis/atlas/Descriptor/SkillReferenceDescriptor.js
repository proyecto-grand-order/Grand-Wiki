"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = __importDefault(require("../Api"));
const SkillDescriptor_1 = __importDefault(require("./SkillDescriptor"));
class SkillReferenceDescriptor {
    constructor() {
        this.skillCache = new Map();
    }
    async Skill(id) {
        try {
            const skill = this.skillCache.get(String(id));
            if (skill)
                return skill;
            const skillApi = await Api_1.default.skill(id);
            this.skillCache.set(String(skillApi.id), skillApi);
            return skillApi;
        }
        catch (err) {
            console.log(err);
        }
    }
    static renderAsString(id) {
        return `[Skill: ${id}]`;
    }
    async export(id) {
        const skill = await this.Skill(id);
        if (skill === undefined) {
            return "[" + 'Skill: ' + id + ']';
        }
        return new SkillDescriptor_1.default().export(skill);
    }
}
exports.default = SkillReferenceDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxSZWZlcmVuY2VEZXNjcmlwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvRGVzY3JpcHRvci9Ta2lsbFJlZmVyZW5jZURlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxpREFBeUI7QUFDekIsd0VBQWdEO0FBSWhELE1BQXFCLHdCQUF3QjtJQUd6QztRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFVO1FBQ2xCLElBQUk7WUFDQSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxhQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFbEQsT0FBTyxRQUFRLENBQUE7U0FDbEI7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFVO1FBQzVCLE9BQU8sV0FBVyxFQUFFLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFVO1FBRW5CLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUE7U0FDcEM7UUFFRCxPQUFPLElBQUkseUJBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0NBQ0o7QUFwQ0QsMkNBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vQXBpXCI7XG5pbXBvcnQgU2tpbGxEZXNjcmlwdG9yIGZyb20gXCIuL1NraWxsRGVzY3JpcHRvclwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxSZWZlcmVuY2VEZXNjcmlwdG9yIHtcbiAgICBwcm90ZWN0ZWQgc2tpbGxDYWNoZTogTWFwPHN0cmluZywgU2tpbGwuU2tpbGw+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2tpbGxDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBhc3luYyBTa2lsbChpZDogbnVtYmVyKTogUHJvbWlzZTxTa2lsbC5Ta2lsbD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSB0aGlzLnNraWxsQ2FjaGUuZ2V0KFN0cmluZyhpZCkpO1xuXG4gICAgICAgICAgICBpZiAoc2tpbGwpIHJldHVybiBza2lsbFxuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2tpbGxBcGkgPSBhd2FpdCBBcGkuc2tpbGwoaWQpO1xuICAgICAgICAgICAgdGhpcy5za2lsbENhY2hlLnNldChTdHJpbmcoc2tpbGxBcGkuaWQpLCBza2lsbEFwaSlcblxuICAgICAgICAgICAgcmV0dXJuIHNraWxsQXBpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQXNTdHJpbmcoaWQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgW1NraWxsOiAke2lkfV1gO1xuICAgIH1cblxuICAgIGFzeW5jIGV4cG9ydChpZDogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3Qgc2tpbGwgPSBhd2FpdCB0aGlzLlNraWxsKGlkKTtcblxuICAgICAgICBpZiAoc2tpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgJ1NraWxsOiAnICsgaWQgKyAnXSdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU2tpbGxEZXNjcmlwdG9yKCkuZXhwb3J0KHNraWxsKVxuICAgIH1cbn0iXX0=