"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const Description_1 = __importDefault(require("./Description"));
class CardDescription {
    static renderAsString(card) {
        const descriptor = api_descriptor_1.CardDescriptor.describe(card);
        return "[" + Description_1.default.renderAsString(descriptor) + "]";
    }
    export(card) {
        const descriptor = api_descriptor_1.CardDescriptor.describe(card);
        return `<span>[${new Description_1.default().export(descriptor)}]</span>`;
    }
}
exports.default = CardDescription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZERlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvRGVzY3JpcHRvci9DYXJkRGVzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0REFBeUQ7QUFDekQsZ0VBQXdDO0FBRXhDLE1BQXFCLGVBQWU7SUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFtQjtRQUNyQyxNQUFNLFVBQVUsR0FBRywrQkFBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxPQUFPLEdBQUcsR0FBRyxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDOUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFVO1FBQ2IsTUFBTSxVQUFVLEdBQUcsK0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsT0FBTyxVQUFVLElBQUkscUJBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFBO0lBQ25FLENBQUM7Q0FDSjtBQVhELGtDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgUmVnaW9uIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCB7IENhcmREZXNjcmlwdG9yIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1kZXNjcmlwdG9yXCI7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4vRGVzY3JpcHRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZERlc2NyaXB0aW9uIHtcbiAgICBzdGF0aWMgcmVuZGVyQXNTdHJpbmcoY2FyZDogQ2FyZCB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBDYXJkRGVzY3JpcHRvci5kZXNjcmliZShjYXJkKTtcblxuICAgICAgICByZXR1cm4gXCJbXCIgKyBEZXNjcmlwdGlvbi5yZW5kZXJBc1N0cmluZyhkZXNjcmlwdG9yKSArIFwiXVwiO1xuICAgIH1cblxuICAgIGV4cG9ydChjYXJkOiBDYXJkKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBDYXJkRGVzY3JpcHRvci5kZXNjcmliZShjYXJkKTtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj5bJHtuZXcgRGVzY3JpcHRpb24oKS5leHBvcnQoZGVzY3JpcHRvcil9XTwvc3Bhbj5gXG4gICAgfVxufSJdfQ==