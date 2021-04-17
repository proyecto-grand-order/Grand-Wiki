"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const Description_1 = __importDefault(require("./Description"));
class BuffDescription {
    static renderAsString(buff) {
        const descriptor = api_descriptor_1.BuffDescriptor.describe(buff);
        return "[" + Description_1.default.renderAsString(descriptor) + "]";
    }
    export(buff) {
        const descriptor = api_descriptor_1.BuffDescriptor.describe(buff);
        return `[${buff.icon ? `<img style="height: 30px;vertical-align: middle;" src="${buff.icon}">` : ' '} ${Description_1.default.renderAsString(descriptor)}]`;
    }
}
exports.default = BuffDescription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZkRlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvRGVzY3JpcHRvci9CdWZmRGVzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0REFBeUQ7QUFDekQsZ0VBQXdDO0FBRXhDLE1BQXFCLGVBQWU7SUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFlO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLCtCQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELE9BQU8sR0FBRyxHQUFHLHFCQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5RCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWU7UUFDbEIsTUFBTSxVQUFVLEdBQUcsK0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBEQUEwRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFBO0lBQ3JKLENBQUM7Q0FDSjtBQVpELGtDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVmZiwgUmVnaW9uIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCB7IEJ1ZmZEZXNjcmlwdG9yIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1kZXNjcmlwdG9yXCI7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4vRGVzY3JpcHRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVmZkRlc2NyaXB0aW9uIHtcbiAgICBzdGF0aWMgcmVuZGVyQXNTdHJpbmcoYnVmZjogQnVmZi5CdWZmKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IEJ1ZmZEZXNjcmlwdG9yLmRlc2NyaWJlKGJ1ZmYpO1xuXG4gICAgICAgIHJldHVybiBcIltcIiArIERlc2NyaXB0aW9uLnJlbmRlckFzU3RyaW5nKGRlc2NyaXB0b3IpICsgXCJdXCI7XG4gICAgfVxuXG4gICAgZXhwb3J0KGJ1ZmY6IEJ1ZmYuQnVmZikge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gQnVmZkRlc2NyaXB0b3IuZGVzY3JpYmUoYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIGBbJHtidWZmLmljb24gPyBgPGltZyBzdHlsZT1cImhlaWdodDogMzBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIHNyYz1cIiR7YnVmZi5pY29ufVwiPmAgOiAnICd9ICR7RGVzY3JpcHRpb24ucmVuZGVyQXNTdHJpbmcoZGVzY3JpcHRvcil9XWBcbiAgICB9XG59Il19