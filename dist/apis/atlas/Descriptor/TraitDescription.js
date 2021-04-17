"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const Api_1 = __importDefault(require("../Api"));
const Description_1 = __importDefault(require("./Description"));
const TraitsCached = [];
class TraitDescription {
    constructor(trait, overrideTraits) {
        this.id = typeof trait === "number" ? trait : trait.id;
        this.trait = typeof trait === "number" ? undefined : trait;
        this.overrideTraits = TraitsCached;
    }
    static renderAsString(trait) {
        const descriptor = api_descriptor_1.TraitDescriptor.describe(trait);
        return Description_1.default.renderAsString(descriptor);
    }
    static async traitList() {
        const traitlist = await Api_1.default.traitList();
        for (let i = 0; i < traitlist.length; i++) {
            const trait = traitlist[i];
            TraitsCached.push(trait);
        }
    }
    getDescription(trait) {
        const descriptor = api_descriptor_1.TraitDescriptor.describe(trait, this.overrideTraits);
        return new Description_1.default().export(descriptor);
    }
    export() {
        var _a;
        const trait = (_a = this.trait) !== null && _a !== void 0 ? _a : this.id;
        return `<span>${this.getDescription(trait)}</span>`;
    }
}
exports.default = TraitDescription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhaXREZXNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvVHJhaXREZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDREQUEwRDtBQUMxRCxpREFBeUI7QUFDekIsZ0VBQXdDO0FBRXhDLE1BQU0sWUFBWSxHQUFrQixFQUFFLENBQUE7QUFFdEMsTUFBcUIsZ0JBQWdCO0lBTWpDLFlBQVksS0FBNEIsRUFBRyxjQUE4QjtRQUNyRSxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUEyQjtRQUM3QyxNQUFNLFVBQVUsR0FBRyxnQ0FBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxPQUFPLHFCQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFDbEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxhQUFHLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDM0I7SUFFTCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQTJCO1FBQzlDLE1BQU0sVUFBVSxHQUFHLGdDQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELE1BQU07O1FBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBQSxJQUFJLENBQUMsS0FBSyxtQ0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sU0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDdkQsQ0FBQztDQUNKO0FBdENELG1DQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lvbiwgVHJhaXQgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0IHsgVHJhaXREZXNjcmlwdG9yIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1kZXNjcmlwdG9yXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9BcGlcIjtcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi9EZXNjcmlwdGlvblwiO1xuXG5jb25zdCBUcmFpdHNDYWNoZWQ6IFRyYWl0LlRyYWl0W10gPSBbXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFpdERlc2NyaXB0aW9uIHtcbiAgICBwcm90ZWN0ZWQgaWQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgdHJhaXQ/OiBUcmFpdC5UcmFpdDtcbiAgICBwcm90ZWN0ZWQgdHJhaXRDYWNoZTogTWFwPHN0cmluZywgVHJhaXQuVHJhaXQ+XG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlVHJhaXRzPzogVHJhaXQuVHJhaXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRyYWl0PzogVHJhaXQuVHJhaXQgfCBudW1iZXIgLCBvdmVycmlkZVRyYWl0cz86IFRyYWl0LlRyYWl0W10pIHtcbiAgICAgICAgdGhpcy5pZCA9IHR5cGVvZiB0cmFpdCA9PT0gXCJudW1iZXJcIiA/IHRyYWl0IDogdHJhaXQuaWQ7XG4gICAgICAgIHRoaXMudHJhaXQgPSB0eXBlb2YgdHJhaXQgPT09IFwibnVtYmVyXCIgPyB1bmRlZmluZWQgOiB0cmFpdFxuICAgICAgICB0aGlzLm92ZXJyaWRlVHJhaXRzID0gVHJhaXRzQ2FjaGVkO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJBc1N0cmluZyh0cmFpdDogVHJhaXQuVHJhaXQgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gVHJhaXREZXNjcmlwdG9yLmRlc2NyaWJlKHRyYWl0KTtcblxuICAgICAgICByZXR1cm4gRGVzY3JpcHRpb24ucmVuZGVyQXNTdHJpbmcoZGVzY3JpcHRvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIHRyYWl0TGlzdCgpIHtcbiAgICAgICAgY29uc3QgdHJhaXRsaXN0ID0gYXdhaXQgQXBpLnRyYWl0TGlzdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFpdGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWl0ID0gdHJhaXRsaXN0W2ldO1xuICAgICAgICAgICAgVHJhaXRzQ2FjaGVkLnB1c2godHJhaXQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGVzY3JpcHRpb24odHJhaXQ6IFRyYWl0LlRyYWl0IHwgbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBUcmFpdERlc2NyaXB0b3IuZGVzY3JpYmUodHJhaXQsIHRoaXMub3ZlcnJpZGVUcmFpdHMpO1xuICAgICAgICByZXR1cm4gbmV3IERlc2NyaXB0aW9uKCkuZXhwb3J0KGRlc2NyaXB0b3IpO1xuICAgIH1cblxuXG4gICAgZXhwb3J0KCkge1xuICAgICAgICBjb25zdCB0cmFpdCA9IHRoaXMudHJhaXQgPz8gdGhpcy5pZDtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4ke3RoaXMuZ2V0RGVzY3JpcHRpb24odHJhaXQpfTwvc3Bhbj5gXG4gICAgfVxufVxuXG5cbiJdfQ==