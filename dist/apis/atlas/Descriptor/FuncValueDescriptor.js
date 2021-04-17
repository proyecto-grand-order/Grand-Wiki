"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const Description_1 = __importDefault(require("./Description"));
class FuncValueDescriptor {
    export(func, staticDataVal, dataVal, hideRate) {
        const descriptor = api_descriptor_1.FuncDescriptor.describeValue(func, staticDataVal, dataVal, hideRate);
        return descriptor
            ? new Description_1.default().export(descriptor)
            : '-';
    }
}
exports.default = FuncValueDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY1ZhbHVlRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvRnVuY1ZhbHVlRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDREQUF5RDtBQUN6RCxnRUFBd0M7QUFHeEMsTUFBcUIsbUJBQW1CO0lBQ3BDLE1BQU0sQ0FBQyxJQUFlLEVBQUUsYUFBOEIsRUFBRSxPQUF3QixFQUFFLFFBQWtCO1FBQ2hHLE1BQU0sVUFBVSxHQUFHLCtCQUFjLENBQUMsYUFBYSxDQUMzQyxJQUFJLEVBQ0osYUFBYSxFQUNiLE9BQU8sRUFDUCxRQUFRLENBQ1gsQ0FBQztRQUVGLE9BQU8sVUFBVTtZQUNiLENBQUMsQ0FBQyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZCxDQUFDO0NBQ0o7QUFiRCxzQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFWYWwsIEZ1bmMgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0IHsgRnVuY0Rlc2NyaXB0b3IgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWRlc2NyaXB0b3JcIjtcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi9EZXNjcmlwdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmNWYWx1ZURlc2NyaXB0b3Ige1xuICAgIGV4cG9ydChmdW5jOiBGdW5jLkZ1bmMsIHN0YXRpY0RhdGFWYWw6IERhdGFWYWwuRGF0YVZhbCwgZGF0YVZhbDogRGF0YVZhbC5EYXRhVmFsLCBoaWRlUmF0ZT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IEZ1bmNEZXNjcmlwdG9yLmRlc2NyaWJlVmFsdWUoXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICAgICAgc3RhdGljRGF0YVZhbCxcbiAgICAgICAgICAgIGRhdGFWYWwsXG4gICAgICAgICAgICBoaWRlUmF0ZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yXG4gICAgICAgICAgICA/IG5ldyBEZXNjcmlwdGlvbigpLmV4cG9ydChkZXNjcmlwdG9yKVxuICAgICAgICAgICAgOiAnLSc7XG4gICAgfVxufSJdfQ==