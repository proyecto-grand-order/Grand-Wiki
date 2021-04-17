"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_connector_1 = require("@isaaczm/api-connector");
const OutputHelper_1 = require("../../Helper/OutputHelper");
function default_1(sections, func, dataVal) {
    const section = sections.chance, parts = section.parts;
    if (dataVal.ActSet && dataVal.ActSetWeight) {
        parts.push(`[Weight: ${dataVal.ActSetWeight}]`);
    }
    if (dataVal.Rate && dataVal.Rate < 0) {
        parts.push('Garatizado');
    }
    else if (typeof dataVal.Rate === "number" && dataVal.Rate !== 1000) {
        parts.push((dataVal.Rate / 10) + '% Probabilidad de');
    }
    else if (dataVal.RateCount && (func.funcType === api_connector_1.Func.FuncType.ENEMY_ENCOUNT_COPY_RATE_UP
        || func.funcType === api_connector_1.Func.FuncType.ENEMY_ENCOUNT_RATE_UP)) {
        parts.push(OutputHelper_1.asPercent(dataVal.RateCount, 1) + ' probabilidad por enemigo de');
    }
    else if (!dataVal.Rate && func.funcType !== api_connector_1.Func.FuncType.NONE) {
        parts.push('Probabilidad de');
    }
    if (parts.length === 0) {
        section.showing = false;
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlQ2hhbmNlU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvRnVuYy9oYW5kbGVDaGFuY2VTZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQTZEO0FBQzdELDREQUFvRDtBQUdwRCxtQkFBeUIsUUFBZ0MsRUFBRSxJQUFlLEVBQUUsT0FBd0I7SUFDaEcsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFDM0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFFMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ25EO0lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDNUI7U0FBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztLQUN6RDtTQUFNLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUM1QixJQUFJLENBQUMsUUFBUSxLQUFLLG9CQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQjtXQUN2RCxJQUFJLENBQUMsUUFBUSxLQUFLLG9CQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUMzRCxFQUFFO1FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsOEJBQThCLENBQUMsQ0FBQztLQUNoRjtTQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssb0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQzlELEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNqQztJQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDM0I7QUFDTCxDQUFDO0FBeEJELDRCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVZhbCwgRnVuYywgUmVnaW9ufSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0IHthc1BlcmNlbnR9IGZyb20gXCIuLi8uLi9IZWxwZXIvT3V0cHV0SGVscGVyXCI7XG5pbXBvcnQge0Z1bmNEZXNjcmlwdG9yU2VjdGlvbnN9IGZyb20gXCIuL0Z1bmNEZXNjcmlwdG9yU2VjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNlY3Rpb25zOiBGdW5jRGVzY3JpcHRvclNlY3Rpb25zLCBmdW5jOiBGdW5jLkZ1bmMsIGRhdGFWYWw6IERhdGFWYWwuRGF0YVZhbCk6IHZvaWQge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9ucy5jaGFuY2UsXG4gICAgICAgIHBhcnRzID0gc2VjdGlvbi5wYXJ0cztcblxuICAgIGlmIChkYXRhVmFsLkFjdFNldCAmJiBkYXRhVmFsLkFjdFNldFdlaWdodCkge1xuICAgICAgICBwYXJ0cy5wdXNoKGBbV2VpZ2h0OiAke2RhdGFWYWwuQWN0U2V0V2VpZ2h0fV1gKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVZhbC5SYXRlICYmIGRhdGFWYWwuUmF0ZSA8IDApIHtcbiAgICAgICAgcGFydHMucHVzaCgnR2FyYXRpemFkbycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFWYWwuUmF0ZSA9PT0gXCJudW1iZXJcIiAmJiBkYXRhVmFsLlJhdGUgIT09IDEwMDApIHtcbiAgICAgICAgcGFydHMucHVzaCgoZGF0YVZhbC5SYXRlIC8gMTApICsgJyUgUHJvYmFiaWxpZGFkIGRlJyk7XG4gICAgfSBlbHNlIGlmIChkYXRhVmFsLlJhdGVDb3VudCAmJiAoXG4gICAgICAgIGZ1bmMuZnVuY1R5cGUgPT09IEZ1bmMuRnVuY1R5cGUuRU5FTVlfRU5DT1VOVF9DT1BZX1JBVEVfVVBcbiAgICAgICAgfHwgZnVuYy5mdW5jVHlwZSA9PT0gRnVuYy5GdW5jVHlwZS5FTkVNWV9FTkNPVU5UX1JBVEVfVVBcbiAgICApKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYXNQZXJjZW50KGRhdGFWYWwuUmF0ZUNvdW50LCAxKSArICcgcHJvYmFiaWxpZGFkIHBvciBlbmVtaWdvIGRlJyk7XG4gICAgfSBlbHNlIGlmICghZGF0YVZhbC5SYXRlICYmIGZ1bmMuZnVuY1R5cGUgIT09IEZ1bmMuRnVuY1R5cGUuTk9ORSkge1xuICAgICAgICBwYXJ0cy5wdXNoKCdQcm9iYWJpbGlkYWQgZGUnKTtcbiAgICB9XG5cbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlY3Rpb24uc2hvd2luZyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==