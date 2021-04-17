"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncHelper_1 = require("../Helper/FuncHelper");
const OutputHelper_1 = require("../Helper/OutputHelper");
const FuncDescriptorSections_1 = require("./Func/FuncDescriptorSections");
const handleActionSection_1 = __importDefault(require("./Func/handleActionSection"));
const handleAffectsSection_1 = __importDefault(require("./Func/handleAffectsSection"));
const handleAmountSection_1 = __importDefault(require("./Func/handleAmountSection"));
const handleChanceSection_1 = __importDefault(require("./Func/handleChanceSection"));
const handleDurationSection_1 = __importDefault(require("./Func/handleDurationSection"));
const handleScalingSection_1 = __importDefault(require("./Func/handleScalingSection"));
const handleTargetSection_1 = __importDefault(require("./Func/handleTargetSection"));
const handleTeamSection_1 = __importDefault(require("./Func/handleTeamSection"));
class FuncDescriptor {
    constructor(func, level, overcharge) {
        this.func = func,
            this.level = level,
            this.overcharge = overcharge;
    }
    getDataVal() {
        var _a, _b;
        const func = this.func;
        if (this.level) {
            return (_b = FuncHelper_1.getTargetVersionValues(func, this.level, (_a = this.overcharge) !== null && _a !== void 0 ? _a : 1)) !== null && _b !== void 0 ? _b : {};
        }
        else {
            const dataVals = FuncHelper_1.getDataValList(func);
            return FuncHelper_1.getStaticFieldValues(dataVals);
        }
    }
    getFollowerDataVal() {
        var _a;
        const func = this.func;
        if (!FuncHelper_1.hasFollowerDataVals(func))
            return undefined;
        if (this.level) {
            return (_a = FuncHelper_1.getTargetFollowerVersionValues(func, this.level)) !== null && _a !== void 0 ? _a : {};
        }
        else {
            const dataVals = FuncHelper_1.getFollowerDataValList(func);
            return FuncHelper_1.getStaticFieldValues(dataVals);
        }
    }
    async render() {
        const func = this.func;
        const dataVal = this.getDataVal();
        const followerDataVal = this.getFollowerDataVal();
        const sections = new FuncDescriptorSections_1.FuncDescriptorSections();
        // Handles
        handleTeamSection_1.default(sections, func, dataVal);
        handleChanceSection_1.default(sections, func, dataVal);
        handleActionSection_1.default(sections, func, dataVal);
        handleAffectsSection_1.default(sections, func, dataVal);
        await handleAmountSection_1.default(sections, func, dataVal);
        if (followerDataVal) {
            await handleAmountSection_1.default(sections, func, followerDataVal, true);
        }
        handleTargetSection_1.default(sections, func, dataVal);
        handleDurationSection_1.default(sections, func, dataVal);
        handleScalingSection_1.default(sections, func, dataVal);
        let parts = [];
        Object.values(sections).forEach(section => {
            if (!section.showing)
                return;
            if (section.preposition)
                parts.push(section.preposition);
            parts = parts.concat(section.parts);
        });
        parts = OutputHelper_1.joinElements(parts, ' ');
        return `${parts.map((element) => {
            return element;
        }).join(' ')}`;
    }
}
exports.default = FuncDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY0Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0Z1bmNEZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEscURBTzhCO0FBQzlCLHlEQUFnRTtBQUNoRSwwRUFBcUU7QUFDckUscUZBQW1GO0FBQ25GLHVGQUErRDtBQUMvRCxxRkFBNkQ7QUFDN0QscUZBQTZEO0FBQzdELHlGQUFpRTtBQUNqRSx1RkFBK0Q7QUFDL0QscUZBQTZEO0FBQzdELGlGQUF5RDtBQUV6RCxNQUFxQixjQUFjO0lBSy9CLFlBQW1CLElBQWUsRUFBRSxLQUFjLEVBQUUsVUFBbUI7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsVUFBVTs7UUFDTixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sTUFBQSxtQ0FBc0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFBLElBQUksQ0FBQyxVQUFVLG1DQUFJLENBQUMsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7U0FDL0U7YUFBTTtZQUNILE1BQU0sUUFBUSxHQUFHLDJCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEMsT0FBTyxpQ0FBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCxrQkFBa0I7O1FBQ2QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsZ0NBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sTUFBQSwyQ0FBOEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBSSxFQUFFLENBQUM7U0FDakU7YUFBTTtZQUNILE1BQU0sUUFBUSxHQUFHLG1DQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlDLE9BQU8saUNBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDUixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLCtDQUFzQixFQUFFLENBQUM7UUFFOUMsVUFBVTtRQUNWLDJCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsNkJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3Qyw2QkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLDhCQUFvQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDN0MsTUFBTSw2QkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2xELElBQUksZUFBZSxFQUFFO1lBQ2pCLE1BQU0sNkJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEU7UUFDRCw2QkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLCtCQUFxQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsOEJBQW9CLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5QyxJQUFJLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDaEIsT0FBTztZQUVYLElBQUksT0FBTyxDQUFDLFdBQVc7Z0JBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXBDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssR0FBRywyQkFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVqQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzVCLE9BQU8sT0FBTyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7Q0FDSjtBQTVFRCxpQ0E0RUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUcmFkdWNpZG8geSBtb2RpY2FkbyBkZWwgcmVwb3NpdG9yaW8gaHR0cHM6Ly9naXRodWIuY29tL2F0bGFzYWNhZGVteS9hYS1kYi9ibG9iL21hc3Rlci9zcmMvRGVzY3JpcHRvci9GdW5jRGVzY3JpcHRvci50c3hcbmltcG9ydCB7IERhdGFWYWwsIEZ1bmMsIFJlZ2lvbiB9IGZyb20gXCJAaXNhYWN6bS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQge1xuICAgIGdldERhdGFWYWxMaXN0LFxuICAgIGdldEZvbGxvd2VyRGF0YVZhbExpc3QsXG4gICAgZ2V0U3RhdGljRmllbGRWYWx1ZXMsXG4gICAgZ2V0VGFyZ2V0Rm9sbG93ZXJWZXJzaW9uVmFsdWVzLFxuICAgIGdldFRhcmdldFZlcnNpb25WYWx1ZXMsXG4gICAgaGFzRm9sbG93ZXJEYXRhVmFsc1xufSBmcm9tIFwiLi4vSGVscGVyL0Z1bmNIZWxwZXJcIjtcbmltcG9ydCB7am9pbkVsZW1lbnRzLCBSZW5kZXJhYmxlfSBmcm9tIFwiLi4vSGVscGVyL091dHB1dEhlbHBlclwiO1xuaW1wb3J0IHtGdW5jRGVzY3JpcHRvclNlY3Rpb25zfSBmcm9tIFwiLi9GdW5jL0Z1bmNEZXNjcmlwdG9yU2VjdGlvbnNcIjtcbmltcG9ydCBoYW5kbGVBY3Rpb25TZWN0aW9uLCB7IGZ1bmNEZXNjcmlwdGlvbnMgfSBmcm9tIFwiLi9GdW5jL2hhbmRsZUFjdGlvblNlY3Rpb25cIjtcbmltcG9ydCBoYW5kbGVBZmZlY3RzU2VjdGlvbiBmcm9tIFwiLi9GdW5jL2hhbmRsZUFmZmVjdHNTZWN0aW9uXCI7XG5pbXBvcnQgaGFuZGxlQW1vdW50U2VjdGlvbiBmcm9tIFwiLi9GdW5jL2hhbmRsZUFtb3VudFNlY3Rpb25cIjtcbmltcG9ydCBoYW5kbGVDaGFuY2VTZWN0aW9uIGZyb20gXCIuL0Z1bmMvaGFuZGxlQ2hhbmNlU2VjdGlvblwiO1xuaW1wb3J0IGhhbmRsZUR1cmF0aW9uU2VjdGlvbiBmcm9tIFwiLi9GdW5jL2hhbmRsZUR1cmF0aW9uU2VjdGlvblwiO1xuaW1wb3J0IGhhbmRsZVNjYWxpbmdTZWN0aW9uIGZyb20gXCIuL0Z1bmMvaGFuZGxlU2NhbGluZ1NlY3Rpb25cIjtcbmltcG9ydCBoYW5kbGVUYXJnZXRTZWN0aW9uIGZyb20gXCIuL0Z1bmMvaGFuZGxlVGFyZ2V0U2VjdGlvblwiO1xuaW1wb3J0IGhhbmRsZVRlYW1TZWN0aW9uIGZyb20gXCIuL0Z1bmMvaGFuZGxlVGVhbVNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY0Rlc2NyaXB0b3Ige1xuICAgIHByb3RlY3RlZCBmdW5jOiBGdW5jLkZ1bmM7XG4gICAgcHJvdGVjdGVkIGxldmVsPzogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBvdmVyY2hhcmdlPzogbnVtYmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGZ1bmM6IEZ1bmMuRnVuYywgbGV2ZWw/OiBudW1iZXIsIG92ZXJjaGFyZ2U/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYyxcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsLFxuICAgICAgICB0aGlzLm92ZXJjaGFyZ2UgPSBvdmVyY2hhcmdlXG4gICAgfVxuXG4gICAgZ2V0RGF0YVZhbCgpOiBEYXRhVmFsLkRhdGFWYWwge1xuICAgICAgICBjb25zdCBmdW5jID0gdGhpcy5mdW5jO1xuXG4gICAgICAgIGlmICh0aGlzLmxldmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VGFyZ2V0VmVyc2lvblZhbHVlcyhmdW5jLCB0aGlzLmxldmVsLCB0aGlzLm92ZXJjaGFyZ2UgPz8gMSkgPz8ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhVmFscyA9IGdldERhdGFWYWxMaXN0KGZ1bmMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGljRmllbGRWYWx1ZXMoZGF0YVZhbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9sbG93ZXJEYXRhVmFsKCk6IERhdGFWYWwuRGF0YVZhbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmZ1bmM7XG5cbiAgICAgICAgaWYgKCFoYXNGb2xsb3dlckRhdGFWYWxzKGZ1bmMpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5sZXZlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFRhcmdldEZvbGxvd2VyVmVyc2lvblZhbHVlcyhmdW5jLCB0aGlzLmxldmVsKSA/PyB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFWYWxzID0gZ2V0Rm9sbG93ZXJEYXRhVmFsTGlzdChmdW5jKTtcblxuICAgICAgICAgICAgcmV0dXJuIGdldFN0YXRpY0ZpZWxkVmFsdWVzKGRhdGFWYWxzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgXG4gICAgYXN5bmMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBmdW5jID0gdGhpcy5mdW5jO1xuICAgICAgICBjb25zdCBkYXRhVmFsID0gdGhpcy5nZXREYXRhVmFsKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2VyRGF0YVZhbCA9IHRoaXMuZ2V0Rm9sbG93ZXJEYXRhVmFsKCk7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBuZXcgRnVuY0Rlc2NyaXB0b3JTZWN0aW9ucygpO1xuICAgICAgICBcbiAgICAgICAgLy8gSGFuZGxlc1xuICAgICAgICBoYW5kbGVUZWFtU2VjdGlvbihzZWN0aW9ucywgZnVuYywgZGF0YVZhbCk7XG4gICAgICAgIGhhbmRsZUNoYW5jZVNlY3Rpb24oc2VjdGlvbnMsIGZ1bmMsIGRhdGFWYWwpO1xuICAgICAgICBoYW5kbGVBY3Rpb25TZWN0aW9uKHNlY3Rpb25zLCBmdW5jLCBkYXRhVmFsKTtcbiAgICAgICAgaGFuZGxlQWZmZWN0c1NlY3Rpb24oc2VjdGlvbnMsIGZ1bmMsIGRhdGFWYWwpXG4gICAgICAgIGF3YWl0IGhhbmRsZUFtb3VudFNlY3Rpb24oc2VjdGlvbnMsIGZ1bmMsIGRhdGFWYWwpXG4gICAgICAgIGlmIChmb2xsb3dlckRhdGFWYWwpIHtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZUFtb3VudFNlY3Rpb24oc2VjdGlvbnMsIGZ1bmMsIGZvbGxvd2VyRGF0YVZhbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlVGFyZ2V0U2VjdGlvbihzZWN0aW9ucywgZnVuYywgZGF0YVZhbCk7XG4gICAgICAgIGhhbmRsZUR1cmF0aW9uU2VjdGlvbihzZWN0aW9ucywgZnVuYywgZGF0YVZhbCk7XG4gICAgICAgIGhhbmRsZVNjYWxpbmdTZWN0aW9uKHNlY3Rpb25zLCBmdW5jLCBkYXRhVmFsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IHBhcnRzOiBSZW5kZXJhYmxlW10gPSBbXTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2VjdGlvbnMpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlY3Rpb24uc2hvd2luZylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmIChzZWN0aW9uLnByZXBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goc2VjdGlvbi5wcmVwb3NpdGlvbik7XG5cbiAgICAgICAgICAgIHBhcnRzID0gcGFydHMuY29uY2F0KHNlY3Rpb24ucGFydHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwYXJ0cyA9IGpvaW5FbGVtZW50cyhwYXJ0cywgJyAnKTtcblxuICAgICAgICByZXR1cm4gYCR7cGFydHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9KS5qb2luKCcgJyl9YFxuICAgIH1cbn0iXX0=