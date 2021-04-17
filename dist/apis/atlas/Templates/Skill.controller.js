"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_connector_1 = require("@isaaczm/api-connector");
const FuncDescriptor_1 = __importDefault(require("../Descriptor/FuncDescriptor"));
const SkillReferenceDescriptor_1 = __importDefault(require("../Descriptor/SkillReferenceDescriptor"));
const FuncHelper_1 = require("../Helper/FuncHelper");
const OutputHelper_1 = require("../Helper/OutputHelper");
const Skills_1 = __importDefault(require("./Skills"));
class SkillLines {
    constructor(funcs, levels, relatedSkillId, gain, scripts) {
        this.funcs = funcs;
        this.gain = gain;
        this.levels = levels;
        this.scripts = scripts;
        this.relatedSkillId = relatedSkillId;
        this.Render();
    }
    displayRequirement(detail, values) {
        return `
        <tr>
            <td>[Requisitos] ${detail}</td>
            ${this.levels ? Array(this.levels).fill(null).map((_, i) => {
            var _a;
            return `<td>${(_a = values[i]) !== null && _a !== void 0 ? _a : '-'}</td>`;
        }) : values.map((value, i) => {
            return `<td>${value}</td>`;
        })}
        </tr>
        `;
    }
    hpPerLowerRequirements() {
        if (!this.scripts.HP_PER_LOWER)
            return undefined;
        return this.displayRequirement('Health Percent Below', this.scripts.HP_PER_LOWER.map(value => OutputHelper_1.asPercent(value, 1)));
    }
    hpRequirements() {
        if (!this.scripts.HP_VAL_HIGHER)
            return undefined;
        return this.displayRequirement('Health', this.scripts.HP_VAL_HIGHER);
    }
    npRequirements() {
        if (!this.scripts.NP_HIGHER)
            return undefined;
        return this.displayRequirement('NP Gauge', this.scripts.NP_HIGHER.map(value => OutputHelper_1.asPercent(value, 0)));
    }
    starRequirements() {
        if (!this.scripts.STAR_HIGHER)
            return undefined;
        return this.displayRequirement('Critical Stars', this.scripts.STAR_HIGHER);
    }
    ScriptsRender() {
        return `
        ${this.hpPerLowerRequirements()}
        ${this.hpRequirements()}
        ${this.npRequirements()}
        ${this.starRequirements()}
        `;
    }
    async Render() {
        const map = await Promise.all(this.funcs.map(async (func, index) => {
            var _a;
            let mutatingDescriptions = FuncHelper_1.describeMutators(api_connector_1.Region.JP, func);
            let relatedSkillIds = FuncHelper_1.getRelatedSkillIds(func);
            for (let i = 0; i < ((_a = this.levels) !== null && _a !== void 0 ? _a : 0); i++) {
                if (!mutatingDescriptions[i])
                    mutatingDescriptions.push('-');
            }
            return `
            <tr>
                <td>
                ${this.relatedSkillId ? '<span id="arrowReference">↳</span>' + await new SkillReferenceDescriptor_1.default().export(this.relatedSkillId) : " "}
                ${await new FuncDescriptor_1.default(func, this.levels).render()}
                </td>
                ${this.levels ? mutatingDescriptions.map((description) => {
                return `<td>${description}</td>`;
            }) : " "}
            </tr>
            ${relatedSkillIds.map(async (skillId, index) => {
                return await Skills_1.default.AdditionalEffectBreakdown(skillId, this.levels);
            })}
            `;
        }));
        return `
            ${this.cooldowns ? `
                <tr>
                    <td>Cooldown</td>
                    ${this.cooldowns.map(cd => {
            return `<td>${cd}</td>`;
        })}
                </tr>
            ` : ''}
            ${this.scripts ? `
                ${this.ScriptsRender()}
            ` : ''}
            ${this.gain ? `
                <tr>
                    <td>NP Gain</td>
                    ${[...Array(this.levels)].map((_, key) => {
            var _a, _b, _c, _d, _e, _f;
            return `
                        <td>
                            ${OutputHelper_1.asPercent((_a = this.gain) === null || _a === void 0 ? void 0 : _a.buster[key], 2)} Buster<br/>
                            ${OutputHelper_1.asPercent((_b = this.gain) === null || _b === void 0 ? void 0 : _b.arts[key], 2)} Arts<br/>
                            ${OutputHelper_1.asPercent((_c = this.gain) === null || _c === void 0 ? void 0 : _c.quick[key], 2)} Quicks<br/>
                            ${OutputHelper_1.asPercent((_d = this.gain) === null || _d === void 0 ? void 0 : _d.extra[key], 2)} Extra<br/>
                            ${OutputHelper_1.asPercent((_e = this.gain) === null || _e === void 0 ? void 0 : _e.np[key], 2)} NP<br/>
                            ${OutputHelper_1.asPercent((_f = this.gain) === null || _f === void 0 ? void 0 : _f.defence[key], 2)} Def
                        </td>`;
        })}
                </tr>
            ` : " "}
            ${map}
        `;
    }
}
exports.default = SkillLines;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGwuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL1RlbXBsYXRlcy9Ta2lsbC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQTRFO0FBQzVFLGtGQUEwRDtBQUMxRCxzR0FBOEU7QUFDOUUscURBQTRFO0FBQzVFLHlEQUErRDtBQUMvRCxzREFBbUM7QUFFbkMsTUFBcUIsVUFBVTtJQVEzQixZQUFZLEtBQWtCLEVBQUUsTUFBZSxFQUFFLGNBQXVCLEVBQUUsSUFBc0MsRUFBRyxPQUEyQjtRQUMxSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxNQUFvQjtRQUMzRCxPQUFPOzsrQkFFZ0IsTUFBTTtjQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ3ZELE9BQU8sT0FBTyxNQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUNBQUksR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsT0FBTyxPQUFPLEtBQUssT0FBTyxDQUFD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LHdCQUFTLENBQUMsTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzhCQUNoQyx3QkFBUyxDQUFDLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs4QkFDckMsQ0FBQztRQUNYLENBQUMsQ0FBQzs7YUFFVCxDQUFBLENBQUMsQ0FBQyxHQUFHO2NBQ0osR0FBRztTQUNSLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUFuSUQsNkJBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuYywgTm9ibGVQaGFudGFzbSwgUmVnaW9uLCBTa2lsbCB9IGZyb20gXCJAaXNhYWN6bS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQgRnVuY0Rlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvRnVuY0Rlc2NyaXB0b3JcIjtcbmltcG9ydCBTa2lsbFJlZmVyZW5jZURlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvU2tpbGxSZWZlcmVuY2VEZXNjcmlwdG9yXCI7XG5pbXBvcnQgeyBkZXNjcmliZU11dGF0b3JzLCBnZXRSZWxhdGVkU2tpbGxJZHMgfSBmcm9tIFwiLi4vSGVscGVyL0Z1bmNIZWxwZXJcIjtcbmltcG9ydCB7IGFzUGVyY2VudCwgUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9IZWxwZXIvT3V0cHV0SGVscGVyXCI7XG5pbXBvcnQgU2tpbGxNb2R1bGUgZnJvbSBcIi4vU2tpbGxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsTGluZXMge1xuICAgIHByb3RlY3RlZCBmdW5jczogRnVuYy5GdW5jW107XG4gICAgcHJvdGVjdGVkIGNvb2xkb3ducz86IG51bWJlcltdO1xuICAgIHByb3RlY3RlZCBnYWluPzogTm9ibGVQaGFudGFzbS5Ob2JsZVBoYW50YXNtR2FpbjtcbiAgICBwcm90ZWN0ZWQgbGV2ZWxzPzogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzY3JpcHRzPzogU2tpbGwuU2tpbGxTY3JpcHQ7XG4gICAgcHJvdGVjdGVkIHJlbGF0ZWRTa2lsbElkPzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZnVuY3M6IEZ1bmMuRnVuY1tdLCBsZXZlbHM/OiBudW1iZXIsIHJlbGF0ZWRTa2lsbElkPzogbnVtYmVyLCBnYWluPzogTm9ibGVQaGFudGFzbS5Ob2JsZVBoYW50YXNtR2FpbiwgIHNjcmlwdHM/OiBTa2lsbC5Ta2lsbFNjcmlwdCkge1xuICAgICAgICB0aGlzLmZ1bmNzID0gZnVuY3M7XG4gICAgICAgIHRoaXMuZ2FpbiA9IGdhaW47XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzO1xuICAgICAgICB0aGlzLnNjcmlwdHMgPSBzY3JpcHRzO1xuICAgICAgICB0aGlzLnJlbGF0ZWRTa2lsbElkID0gcmVsYXRlZFNraWxsSWQ7XG4gICAgICAgIHRoaXMuUmVuZGVyKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlSZXF1aXJlbWVudChkZXRhaWw6IHN0cmluZywgdmFsdWVzOiBSZW5kZXJhYmxlW10pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+W1JlcXVpc2l0b3NdICR7ZGV0YWlsfTwvdGQ+XG4gICAgICAgICAgICAke3RoaXMubGV2ZWxzID8gQXJyYXkodGhpcy5sZXZlbHMpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8dGQ+JHt2YWx1ZXNbaV0gPz8gJy0nfTwvdGQ+YDtcbiAgICAgICAgICAgIH0pIDogdmFsdWVzLm1hcCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDx0ZD4ke3ZhbHVlfTwvdGQ+YDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3RyPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBocFBlckxvd2VyUmVxdWlyZW1lbnRzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5zY3JpcHRzLkhQX1BFUl9MT1dFUilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVJlcXVpcmVtZW50KFxuICAgICAgICAgICAgJ0hlYWx0aCBQZXJjZW50IEJlbG93JyxcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0cy5IUF9QRVJfTE9XRVIubWFwKHZhbHVlID0+IGFzUGVyY2VudCh2YWx1ZSwgMSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBocFJlcXVpcmVtZW50cygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuc2NyaXB0cy5IUF9WQUxfSElHSEVSKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5UmVxdWlyZW1lbnQoJ0hlYWx0aCcsIHRoaXMuc2NyaXB0cy5IUF9WQUxfSElHSEVSKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5wUmVxdWlyZW1lbnRzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5zY3JpcHRzLk5QX0hJR0hFUilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVJlcXVpcmVtZW50KFxuICAgICAgICAgICAgJ05QIEdhdWdlJyxcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0cy5OUF9ISUdIRVIubWFwKHZhbHVlID0+IGFzUGVyY2VudCh2YWx1ZSwgMCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFyUmVxdWlyZW1lbnRzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICghdGhpcy5zY3JpcHRzLlNUQVJfSElHSEVSKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5UmVxdWlyZW1lbnQoJ0NyaXRpY2FsIFN0YXJzJywgdGhpcy5zY3JpcHRzLlNUQVJfSElHSEVSKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFNjcmlwdHNSZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICR7dGhpcy5ocFBlckxvd2VyUmVxdWlyZW1lbnRzKCl9XG4gICAgICAgICR7dGhpcy5ocFJlcXVpcmVtZW50cygpfVxuICAgICAgICAke3RoaXMubnBSZXF1aXJlbWVudHMoKX1cbiAgICAgICAgJHt0aGlzLnN0YXJSZXF1aXJlbWVudHMoKX1cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGFzeW5jIFJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBtYXAgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLmZ1bmNzLm1hcChhc3luYyAoZnVuYywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBtdXRhdGluZ0Rlc2NyaXB0aW9ucyA9IGRlc2NyaWJlTXV0YXRvcnMoUmVnaW9uLkpQLCBmdW5jKVxuICAgICAgICAgICAgbGV0IHJlbGF0ZWRTa2lsbElkcyA9IGdldFJlbGF0ZWRTa2lsbElkcyhmdW5jKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5sZXZlbHMgPz8gMCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghbXV0YXRpbmdEZXNjcmlwdGlvbnNbaV0pXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW5nRGVzY3JpcHRpb25zLnB1c2goJy0nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnJlbGF0ZWRTa2lsbElkID8gJzxzcGFuIGlkPVwiYXJyb3dSZWZlcmVuY2VcIj7ihrM8L3NwYW4+JyArIGF3YWl0IG5ldyBTa2lsbFJlZmVyZW5jZURlc2NyaXB0b3IoKS5leHBvcnQodGhpcy5yZWxhdGVkU2tpbGxJZCkgOiBcIiBcIn1cbiAgICAgICAgICAgICAgICAke2F3YWl0IG5ldyBGdW5jRGVzY3JpcHRvcihmdW5jLCB0aGlzLmxldmVscykucmVuZGVyKCl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAke3RoaXMubGV2ZWxzID8gbXV0YXRpbmdEZXNjcmlwdGlvbnMubWFwKChkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDx0ZD4ke2Rlc2NyaXB0aW9ufTwvdGQ+YFxuICAgICAgICAgICAgICAgIH0pIDogXCIgXCJ9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgJHtyZWxhdGVkU2tpbGxJZHMubWFwKGFzeW5jIChza2lsbElkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBTa2lsbE1vZHVsZS5BZGRpdGlvbmFsRWZmZWN0QnJlYWtkb3duKHNraWxsSWQsIHRoaXMubGV2ZWxzKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgJHt0aGlzLmNvb2xkb3ducyA/IGBcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Db29sZG93bjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jb29sZG93bnMubWFwKGNkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHRkPiR7Y2R9PC90ZD5gXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgOiAnJ31cbiAgICAgICAgICAgICR7dGhpcy5zY3JpcHRzID8gYFxuICAgICAgICAgICAgICAgICR7dGhpcy5TY3JpcHRzUmVuZGVyKCl9XG4gICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAke3RoaXMuZ2FpbiA/IGBcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5OUCBHYWluPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgJHtbLi4uQXJyYXkodGhpcy5sZXZlbHMpXS5tYXAoKF8sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FzUGVyY2VudCh0aGlzLmdhaW4/LmJ1c3RlcltrZXldLCAyKX0gQnVzdGVyPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FzUGVyY2VudCh0aGlzLmdhaW4/LmFydHNba2V5XSwgMil9IEFydHM8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YXNQZXJjZW50KHRoaXMuZ2Fpbj8ucXVpY2tba2V5XSwgMil9IFF1aWNrczxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHthc1BlcmNlbnQodGhpcy5nYWluPy5leHRyYVtrZXldLCAyKX0gRXh0cmE8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YXNQZXJjZW50KHRoaXMuZ2Fpbj8ubnBba2V5XSwgMil9IE5QPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FzUGVyY2VudCh0aGlzLmdhaW4/LmRlZmVuY2Vba2V5XSwgMil9IERlZlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYDogXCIgXCJ9XG4gICAgICAgICAgICAke21hcH1cbiAgICAgICAgYFxuICAgIH1cbn0iXX0=