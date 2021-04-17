"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_connector_1 = require("@isaaczm/api-connector");
const servant_controller_1 = __importDefault(require("../../../server/routes/servants/servant.controller"));
const Api_1 = __importDefault(require("../Api"));
const FuncDescriptor_1 = __importDefault(require("../Descriptor/FuncDescriptor"));
const FuncHelper_1 = require("../Helper/FuncHelper");
class SkillDescReference {
    constructor(id, cooldowns, servant, levels, rankUp) {
        this.id = id;
        this.cooldowns = cooldowns;
        this.levels = levels;
        this.rankUp = rankUp;
        this.servant = servant;
    }
    async GetSkill() {
        return await Api_1.default.skill(this.id);
    }
    Alert(text) {
        return `
        <div class="card-panel blue">
        <span class="white-text">${text}</span>
        </div>
        `;
    }
    async Funcs(skill, levels) {
        const Funcs = [];
        skill.functions.forEach(async (func) => {
            let mutatingDescriptions = FuncHelper_1.describeMutators(api_connector_1.Region.JP, func);
            for (let i = 0; i < (levels !== null && levels !== void 0 ? levels : 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }
            Funcs.push(await new FuncDescriptor_1.default(func, 10).render() + `
            ${levels ? mutatingDescriptions.map((description, index) => {
                return `<td>${description}</td>`;
            }).join(' ') : null}
            `.replace(/,/g, ' '));
        });
        return Funcs;
    }
    async Skill(skill) {
        const x = await new servant_controller_1.default(skill, this.servant).get();
        const funcs = await this.Funcs(skill, 10);
        return {
            x,
            funcs
        };
    }
    async render() {
        const skill = await this.GetSkill();
        if (skill === undefined) {
            return null;
        }
        const svtSkillRef = await this.Skill(skill);
        return {
            skill: svtSkillRef.x.details,
            funcs: svtSkillRef.funcs,
            alert: this.rankUp !== undefined ? this.Alert(`Rank Up +${this.rankUp}`) : ""
        };
    }
}
exports.default = SkillDescReference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9SZWZlcmVuY2UvU2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBZ0U7QUFDaEUsNEdBQWlGO0FBQ2pGLGlEQUF5QjtBQUN6QixrRkFBMEQ7QUFFMUQscURBQXdEO0FBR3hELE1BQXFCLGtCQUFrQjtJQU9uQyxZQUFtQixFQUFVLEVBQUUsU0FBa0IsRUFBRSxPQUF3QixFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3pHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVPLEtBQUssQ0FBQyxRQUFRO1FBQ2xCLE9BQU8sTUFBTSxhQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU8sS0FBSyxDQUFDLElBQVk7UUFDdEIsT0FBTzs7bUNBRW9CLElBQUk7O1NBRTlCLENBQUE7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFpQixFQUFFLE1BQWM7UUFDakQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNuQyxJQUFJLG9CQUFvQixHQUFHLDZCQUFnQixDQUFDLHNCQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRTVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUN4QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSx3QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRztjQUN2RCxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdkQsT0FBTyxPQUFPLFdBQVcsT0FBTyxDQUFBO1lBQ3BDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSTthQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUV6QixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSw0QkFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxQyxPQUFPO1lBQ0gsQ0FBQztZQUNELEtBQUs7U0FDUixDQUFBO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNO1FBQ1IsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFcEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUMsT0FBTztZQUNILEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDNUIsS0FBSyxFQUFHLFdBQVcsQ0FBQyxLQUFLO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hGLENBQUE7SUFDTCxDQUFDO0NBRUo7QUEzRUQscUNBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uLCBTZXJ2YW50LCBTa2lsbCB9IGZyb20gXCJAaXNhYWN6bS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQgU2tpbGxDb250cm9sbGVyIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGVzL3NlcnZhbnRzL3NlcnZhbnQuY29udHJvbGxlclwiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vQXBpXCI7XG5pbXBvcnQgRnVuY0Rlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvRnVuY0Rlc2NyaXB0b3JcIjtcbmltcG9ydCBTa2lsbERlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvU2tpbGxEZXNjcmlwdG9yXCI7XG5pbXBvcnQgeyBkZXNjcmliZU11dGF0b3JzIH0gZnJvbSBcIi4uL0hlbHBlci9GdW5jSGVscGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxEZXNjUmVmZXJlbmNlIHtcbiAgICBwcm90ZWN0ZWQgaWQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgY29vbGRvd25zOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBsZXZlbHM/OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHJhbmtVcD86IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc2VydmFudDogU2VydmFudC5TZXJ2YW50O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGNvb2xkb3duczogYm9vbGVhbiwgc2VydmFudDogU2VydmFudC5TZXJ2YW50LCBsZXZlbHM/OiBudW1iZXIsIHJhbmtVcD86IG51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29vbGRvd25zID0gY29vbGRvd25zO1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcbiAgICAgICAgdGhpcy5yYW5rVXAgPSByYW5rVXA7XG4gICAgICAgIHRoaXMuc2VydmFudCA9IHNlcnZhbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBHZXRTa2lsbCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEFwaS5za2lsbCh0aGlzLmlkKVxuICAgIH1cblxuICAgIHByaXZhdGUgQWxlcnQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGFuZWwgYmx1ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIndoaXRlLXRleHRcIj4ke3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgRnVuY3Moc2tpbGw6U2tpbGwuU2tpbGwsIGxldmVsczogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBjb25zdCBGdW5jcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgc2tpbGwuZnVuY3Rpb25zLmZvckVhY2goYXN5bmMgKGZ1bmMpID0+IHtcbiAgICAgICAgICAgIGxldCBtdXRhdGluZ0Rlc2NyaXB0aW9ucyA9IGRlc2NyaWJlTXV0YXRvcnMoUmVnaW9uLkpQLCBmdW5jKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZXZlbHMgPz8gMCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghbXV0YXRpbmdEZXNjcmlwdGlvbnNbaV0pXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW5nRGVzY3JpcHRpb25zLnB1c2goJy0nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRnVuY3MucHVzaChhd2FpdCBuZXcgRnVuY0Rlc2NyaXB0b3IoZnVuYywgMTApLnJlbmRlcigpICsgYFxuICAgICAgICAgICAgJHtsZXZlbHMgPyBtdXRhdGluZ0Rlc2NyaXB0aW9ucy5tYXAoKGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPHRkPiR7ZGVzY3JpcHRpb259PC90ZD5gXG4gICAgICAgICAgICB9KS5qb2luKCcgJyk6IG51bGx9XG4gICAgICAgICAgICBgLnJlcGxhY2UoLywvZywgJyAnKSlcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEZ1bmNzO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgU2tpbGwoc2tpbGw6IFNraWxsLlNraWxsKSB7XG4gICAgICAgIGNvbnN0IHggPSBhd2FpdCBuZXcgU2tpbGxDb250cm9sbGVyKHNraWxsLCB0aGlzLnNlcnZhbnQpLmdldCgpO1xuICAgICAgICBjb25zdCBmdW5jcyA9IGF3YWl0IHRoaXMuRnVuY3Moc2tpbGwsIDEwKTtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICBmdW5jc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBza2lsbCA9IGF3YWl0IHRoaXMuR2V0U2tpbGwoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChza2lsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3Z0U2tpbGxSZWYgPSBhd2FpdCB0aGlzLlNraWxsKHNraWxsKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2tpbGw6IHN2dFNraWxsUmVmLnguZGV0YWlscyxcbiAgICAgICAgICAgIGZ1bmNzOiAgc3Z0U2tpbGxSZWYuZnVuY3MsXG4gICAgICAgICAgICBhbGVydDogdGhpcy5yYW5rVXAgIT09IHVuZGVmaW5lZCA/IHRoaXMuQWxlcnQoYFJhbmsgVXAgKyR7dGhpcy5yYW5rVXB9YCkgOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==