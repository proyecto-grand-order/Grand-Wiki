"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const Description_1 = __importDefault(require("./Description"));
class BuffValueDescription {
    static renderAsString(buff, dataVal) {
        const descriptor = api_descriptor_1.BuffDescriptor.describeValue(buff, dataVal);
        return descriptor ? Description_1.default.renderAsString(descriptor) : '-';
    }
    export(buff, dataVal) {
        const descriptor = api_descriptor_1.BuffDescriptor.describeValue(buff, dataVal);
        return descriptor
            ? new Description_1.default().export(descriptor)
            : '-';
    }
}
exports.default = BuffValueDescription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZlZhbHVlRGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0J1ZmZWYWx1ZURlc2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNERBQXVEO0FBQ3ZELGdFQUF3QztBQUd4QyxNQUFxQixvQkFBb0I7SUFFckMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFlLEVBQUUsT0FBd0I7UUFDM0QsTUFBTSxVQUFVLEdBQUcsK0JBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9ELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxxQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBZSxFQUFFLE9BQXdCO1FBQzVDLE1BQU0sVUFBVSxHQUFHLCtCQUFjLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRCxPQUFRLFVBQVU7WUFDbEIsQ0FBQyxDQUFDLElBQUkscUJBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNWLENBQUM7Q0FDSjtBQWZELHVDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdWZmLCBEYXRhVmFsLCBSZWdpb259IGZyb20gXCJAaXNhYWN6bS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQge0J1ZmZEZXNjcmlwdG9yfSBmcm9tIFwiQGlzYWFjem0vYXBpLWRlc2NyaXB0b3JcIjtcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi9EZXNjcmlwdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1ZmZWYWx1ZURlc2NyaXB0aW9uXG57XG4gICAgc3RhdGljIHJlbmRlckFzU3RyaW5nKGJ1ZmY6IEJ1ZmYuQnVmZiwgZGF0YVZhbDogRGF0YVZhbC5EYXRhVmFsKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IEJ1ZmZEZXNjcmlwdG9yLmRlc2NyaWJlVmFsdWUoYnVmZiwgZGF0YVZhbCk7XG5cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IgPyBEZXNjcmlwdGlvbi5yZW5kZXJBc1N0cmluZyhkZXNjcmlwdG9yKSA6ICctJztcbiAgICB9XG5cbiAgICBleHBvcnQoYnVmZjogQnVmZi5CdWZmLCBkYXRhVmFsOiBEYXRhVmFsLkRhdGFWYWwpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IEJ1ZmZEZXNjcmlwdG9yLmRlc2NyaWJlVmFsdWUoYnVmZiwgZGF0YVZhbCk7XG5cbiAgICAgICAgcmV0dXJuICBkZXNjcmlwdG9yXG4gICAgICAgID8gbmV3IERlc2NyaXB0aW9uKCkuZXhwb3J0KGRlc2NyaXB0b3IpXG4gICAgICAgIDogJy0nO1xuICAgIH1cbn0iXX0=