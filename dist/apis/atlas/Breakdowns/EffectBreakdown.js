"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_connector_1 = require("@isaaczm/api-connector");
const FuncDescriptor_1 = __importDefault(require("../Descriptor/FuncDescriptor"));
const FuncHelper_1 = require("../Helper/FuncHelper");
const OutputHelper_1 = require("../Helper/OutputHelper");
const map = __importStar(require("./ImagesMaps"));
class EffectBreakdown {
    constructor(levels, funcs, cooldowns, gain, scripts) {
        this.levels = levels;
        this.funcs = funcs;
        this.cooldowns = cooldowns;
        this.gain = gain;
        this.scripts = scripts;
    }
    CommandCard(str, height) {
        if (height) {
            return `<img src="${map.ImagesMapCardText.get(str)}" style="height:${height}">`;
        }
        else {
            return `<img src="${map.ImagesMapCardText.get(str)}">`;
        }
    }
    async Func() {
        return this.funcs.map(async (func, index) => {
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
                        ${relatedSkillIds ? '' : ''}
                        ${await new FuncDescriptor_1.default(func, this.levels, 5).render()}
                    </td>
                    ${this.levels ? mutatingDescriptions.map((description, key) => {
                return `<td key="${key}">${description}</td>`;
            }) : ""}
                </tr>
                ${relatedSkillIds.map((skillId, index) => {
                return ``;
            })}
            `;
        });
    }
    async render() {
        return `
        ${this.cooldowns.length > 0 ? `
            <tr>
                <td>Cooldown</td>
                ${this.cooldowns.map((cd, index) => `<td>${cd}</td>`)}
            </tr>
        ` : ''}
        
        ${this.scripts ? '' : ''}

        ${this.gain ? `
            <td>Ganancia de NP</td>
            ${[...Array(this.levels)].map((_, key) => {
            var _a, _b, _c, _d, _e, _f;
            return `
                <td>
                    ${OutputHelper_1.asPercent((_a = this.gain) === null || _a === void 0 ? void 0 : _a.buster[key], 2)}${this.CommandCard('buster', '15px')}<br/>
                    ${OutputHelper_1.asPercent((_b = this.gain) === null || _b === void 0 ? void 0 : _b.arts[key], 2)} ${this.CommandCard('arts', '15px')}<br/>
                    ${OutputHelper_1.asPercent((_c = this.gain) === null || _c === void 0 ? void 0 : _c.quick[key], 2)} ${this.CommandCard('quick', '15px')}<br/>
                    ${OutputHelper_1.asPercent((_d = this.gain) === null || _d === void 0 ? void 0 : _d.extra[key], 2)} ${this.CommandCard('extra', '15px')}<br/>
                    ${OutputHelper_1.asPercent((_e = this.gain) === null || _e === void 0 ? void 0 : _e.np[key], 2)} NP<br/>
                    ${OutputHelper_1.asPercent((_f = this.gain) === null || _f === void 0 ? void 0 : _f.defence[key], 2)} Def
                </td>
                `;
        })}
        ` : ''}
        
        ${await Promise.all(await this.Func())}
        `;
    }
}
exports.default = EffectBreakdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWZmZWN0QnJlYWtkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvQnJlYWtkb3ducy9FZmZlY3RCcmVha2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQTRFO0FBQzVFLGtGQUEwRDtBQUMxRCxxREFBNEU7QUFDNUUseURBQW1EO0FBQ25ELGtEQUFtQztBQUduQyxNQUFxQixlQUFlO0lBT2hDLFlBQ0ksTUFBYyxFQUNkLEtBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLElBQXNDLEVBQ3RDLE9BQTJCO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFHTyxXQUFXLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDNUMsSUFBRyxNQUFNLEVBQUU7WUFDUCxPQUFPLGFBQWEsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLE1BQU0sSUFBSSxDQUFBO1NBQ2xGO2FBQU07WUFDSCxPQUFPLGFBQWEsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO1NBQ3pEO0lBQ0wsQ0FBQztJQUVPLEtBQUssQ0FBQyxJQUFJO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUN4QyxJQUFJLG9CQUFvQixHQUFHLDZCQUFnQixDQUFDLHNCQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFD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QyxDQUFDLEVBQUU7O1VBRUosTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUF0RkQsa0NBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuYywgTm9ibGVQaGFudGFzbSwgUmVnaW9uLCBTa2lsbCB9IGZyb20gXCJAaXNhYWN6bS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQgRnVuY0Rlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvRnVuY0Rlc2NyaXB0b3JcIjtcbmltcG9ydCB7IGRlc2NyaWJlTXV0YXRvcnMsIGdldFJlbGF0ZWRTa2lsbElkcyB9IGZyb20gXCIuLi9IZWxwZXIvRnVuY0hlbHBlclwiO1xuaW1wb3J0IHsgYXNQZXJjZW50IH0gZnJvbSBcIi4uL0hlbHBlci9PdXRwdXRIZWxwZXJcIjtcbmltcG9ydCAqIGFzIG1hcCBmcm9tICcuL0ltYWdlc01hcHMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0QnJlYWtkb3duIHtcbiAgICBwcm90ZWN0ZWQgY29vbGRvd25zPzogbnVtYmVyW107XG4gICAgcHJvdGVjdGVkIGZ1bmNzOiBGdW5jLkZ1bmNbXTtcbiAgICBwcm90ZWN0ZWQgZ2Fpbj86IE5vYmxlUGhhbnRhc20uTm9ibGVQaGFudGFzbUdhaW47XG4gICAgcHJvdGVjdGVkIGxldmVscz86IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc2NyaXB0cz86IFNraWxsLlNraWxsU2NyaXB0O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBsZXZlbHM6IG51bWJlcixcbiAgICAgICAgZnVuY3M6IEZ1bmMuRnVuY1tdLFxuICAgICAgICBjb29sZG93bnM/OiBudW1iZXJbXSxcbiAgICAgICAgZ2Fpbj86IE5vYmxlUGhhbnRhc20uTm9ibGVQaGFudGFzbUdhaW4sXG4gICAgICAgIHNjcmlwdHM/OiBTa2lsbC5Ta2lsbFNjcmlwdCkge1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcbiAgICAgICAgdGhpcy5mdW5jcyA9IGZ1bmNzO1xuICAgICAgICB0aGlzLmNvb2xkb3ducyA9IGNvb2xkb3ducztcbiAgICAgICAgdGhpcy5nYWluID0gZ2FpbjtcbiAgICAgICAgdGhpcy5zY3JpcHRzID0gc2NyaXB0cztcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ29tbWFuZENhcmQoc3RyOiBzdHJpbmcsIGhlaWdodD86IHN0cmluZykge1xuICAgICAgICBpZihoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke21hcC5JbWFnZXNNYXBDYXJkVGV4dC5nZXQoc3RyKX1cIiBzdHlsZT1cImhlaWdodDoke2hlaWdodH1cIj5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHttYXAuSW1hZ2VzTWFwQ2FyZFRleHQuZ2V0KHN0cil9XCI+YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBGdW5jKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdW5jcy5tYXAoYXN5bmMgKGZ1bmMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgbXV0YXRpbmdEZXNjcmlwdGlvbnMgPSBkZXNjcmliZU11dGF0b3JzKFJlZ2lvbi5KUCwgZnVuYyk7XG4gICAgICAgICAgICBsZXQgcmVsYXRlZFNraWxsSWRzID0gZ2V0UmVsYXRlZFNraWxsSWRzKGZ1bmMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmxldmVscyA/PyAwKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtdXRhdGluZ0Rlc2NyaXB0aW9uc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpbmdEZXNjcmlwdGlvbnMucHVzaCgnLScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtyZWxhdGVkU2tpbGxJZHMgPyAnJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHthd2FpdCBuZXcgRnVuY0Rlc2NyaXB0b3IoZnVuYywgdGhpcy5sZXZlbHMsIDUpLnJlbmRlcigpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubGV2ZWxzID8gbXV0YXRpbmdEZXNjcmlwdGlvbnMubWFwKChkZXNjcmlwdGlvbiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDx0ZCBrZXk9XCIke2tleX1cIj4ke2Rlc2NyaXB0aW9ufTwvdGQ+YFxuICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAke3JlbGF0ZWRTa2lsbElkcy5tYXAoKHNraWxsSWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgYFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgYFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgJHt0aGlzLmNvb2xkb3ducy5sZW5ndGggPiAwID8gYFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5Db29sZG93bjwvdGQ+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvb2xkb3ducy5tYXAoKGNkLCBpbmRleCkgPT4gYDx0ZD4ke2NkfTwvdGQ+YCl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICBgIDogJyd9XG4gICAgICAgIFxuICAgICAgICAke3RoaXMuc2NyaXB0cyA/ICcnIDogJyd9XG5cbiAgICAgICAgJHt0aGlzLmdhaW4gPyBgXG4gICAgICAgICAgICA8dGQ+R2FuYW5jaWEgZGUgTlA8L3RkPlxuICAgICAgICAgICAgJHtbLi4uQXJyYXkodGhpcy5sZXZlbHMpXS5tYXAoKF8sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAke2FzUGVyY2VudCh0aGlzLmdhaW4/LmJ1c3RlcltrZXldLCAyKX0ke3RoaXMuQ29tbWFuZENhcmQoJ2J1c3RlcicsICcxNXB4Jyl9PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgJHthc1BlcmNlbnQodGhpcy5nYWluPy5hcnRzW2tleV0sIDIpfSAke3RoaXMuQ29tbWFuZENhcmQoJ2FydHMnLCAnMTVweCcpfTxici8+XG4gICAgICAgICAgICAgICAgICAgICR7YXNQZXJjZW50KHRoaXMuZ2Fpbj8ucXVpY2tba2V5XSwgMil9ICR7dGhpcy5Db21tYW5kQ2FyZCgncXVpY2snLCAnMTVweCcpfTxici8+XG4gICAgICAgICAgICAgICAgICAgICR7YXNQZXJjZW50KHRoaXMuZ2Fpbj8uZXh0cmFba2V5XSwgMil9ICR7dGhpcy5Db21tYW5kQ2FyZCgnZXh0cmEnLCAnMTVweCcpfTxici8+XG4gICAgICAgICAgICAgICAgICAgICR7YXNQZXJjZW50KHRoaXMuZ2Fpbj8ubnBba2V5XSwgMil9IE5QPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgJHthc1BlcmNlbnQodGhpcy5nYWluPy5kZWZlbmNlW2tleV0sIDIpfSBEZWZcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pfVxuICAgICAgICBgIDogJyd9XG4gICAgICAgIFxuICAgICAgICAke2F3YWl0IFByb21pc2UuYWxsKGF3YWl0IHRoaXMuRnVuYygpKX1cbiAgICAgICAgYFxuICAgIH1cbn0iXX0=