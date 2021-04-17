"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EffectBreakdown_1 = __importDefault(require("../Breakdowns/EffectBreakdown"));
const NpTranslate_1 = require("../Descriptor/NpTranslate");
const OutputHelper_1 = require("../Helper/OutputHelper");
const NPCard = new Map()
    .set('buster', 'https://i.imgur.com/CsTVGPL.png')
    .set('quick', "https://i.imgur.com/LItUZ94.png")
    .set('arts', "https://i.imgur.com/omXXQku.png");
class NoblePhantasmPage {
    constructor(np, level, overcharge, servant) {
        this.np = np;
        this.level = level;
        this.overcharge = overcharge;
        this.servant = servant;
    }
    CommandCard(str, height) {
        if (height) {
            return `<img src="${NPCard.get(str)}" style="height:${height}">`;
        }
        else {
            return `<img src="${NPCard.get(str)}">`;
        }
    }
    TranslateNP() {
        if (NpTranslate_1.MapNpTranslate.has(this.np.id)) {
            const NpTralated = NpTranslate_1.MapNpTranslate.get(this.np.id);
            console.log(NpTralated);
            return {
                name: NpTralated.name,
                detail: NpTralated.detail.replace(/%s/g, "<b>⎡La sobrecarga aumenta este efecto⎦</b>")
            };
        }
        else {
            return {
                name: this.np.name,
                detail: this.np.detail
            };
        }
    }
    async return() {
        const func = await new EffectBreakdown_1.default(this.level, this.np.functions, [], this.np.npGain).render();
        return `
        <div class="container">
            <div class="row">
                <div class="col">
                ${this.CommandCard(this.np.card)}
                </div>
                <div class="col s9">
                <span id="originaNameSkill">
                [${this.np.name}]
                </span>
                <p>
                <span style="font-size: xx-large">${this.TranslateNP().name}</span><hr>
                ${this.TranslateNP().detail}<hr>
                <span class="hits">
                    ${this.np.npDistribution.length} ${this.np.npDistribution.length > 1 ? "Golpes" : "Golpe"}
                    - ${OutputHelper_1.mergeElements(this.np.npDistribution.map(hit => OutputHelper_1.asPercent(hit, 0)), ', ')}
                </span>
                </p>
                </div>
            </div>
            <table class="responsive-table">
                <thead>
                    <th>Efectos</th>
                    ${this.level ? Array.from(Array(this.level).keys()).map(level => {
            return `<td>Lv.${level + 1}</td>`;
        }).join(' ') : ""}
                </thead>
                <tbody>
                    ${func.replace(/,/g, ' ')}
                </tbody>
            </table>
        </div>
        `;
    }
}
exports.default = NoblePhantasmPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9ibGVQaGFudGFzbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL1BhZ2VzL05vYmxlUGhhbnRhc20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRkFBNEQ7QUFFNUQsMkRBQTJEO0FBRTNELHlEQUFrRTtBQUdsRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtLQUNuQixHQUFHLENBQUMsUUFBUSxFQUFFLGlDQUFpQyxDQUFDO0tBQ2hELEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUM7S0FDL0MsR0FBRyxDQUFDLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0FBRXBELE1BQXFCLGlCQUFpQjtJQU1sQyxZQUFtQixFQUErQixFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLE9BQXdCO1FBQzNHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFXLEVBQUUsTUFBZTtRQUM1QyxJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sYUFBYSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxJQUFJLENBQUE7U0FDbkU7YUFBTTtZQUNILE9BQU8sYUFBYSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUE7U0FDMUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksNEJBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNoQyxNQUFNLFVBQVUsR0FBRyw0QkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkIsT0FBTztnQkFDSCxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7Z0JBQ3JCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsNENBQTRDLENBQUM7YUFDekYsQ0FBQTtTQUNKO2FBQU07WUFDSCxPQUFPO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07YUFDekIsQ0FBQTtTQUNKO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNO1FBQ1IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVuRyxPQUFPOzs7O2tCQUlHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Ozs7bUJBSTdCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTs7O29EQUdxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSTtrQkFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU07O3NCQUVyQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPO3dCQUNyRiw0QkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLHdCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDOzs7Ozs7OztzQkFRM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sVUFBVSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzs7c0JBR0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDOzs7O1NBSXBDLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUExRUQsb0NBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9ibGVQaGFudGFzbSwgUmVnaW9uLCBTZXJ2YW50IH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCBFZmZlY3RCcmVha2Rvd24gZnJvbSBcIi4uL0JyZWFrZG93bnMvRWZmZWN0QnJlYWtkb3duXCI7XG5pbXBvcnQgRnVuY0Rlc2NyaXB0b3IgZnJvbSBcIi4uL0Rlc2NyaXB0b3IvRnVuY0Rlc2NyaXB0b3JcIjtcbmltcG9ydCB7IE1hcE5wVHJhbnNsYXRlIH0gZnJvbSBcIi4uL0Rlc2NyaXB0b3IvTnBUcmFuc2xhdGVcIjtcbmltcG9ydCB7IGRlc2NyaWJlTXV0YXRvcnMsIGdldFJlbGF0ZWRTa2lsbElkcywgZ2V0VGFyZ2V0VmVyc2lvblZhbHVlcyB9IGZyb20gXCIuLi9IZWxwZXIvRnVuY0hlbHBlclwiO1xuaW1wb3J0IHsgYXNQZXJjZW50LCBtZXJnZUVsZW1lbnRzIH0gZnJvbSBcIi4uL0hlbHBlci9PdXRwdXRIZWxwZXJcIjtcbmltcG9ydCBTa2lsbE1vZHVsZSBmcm9tIFwiLi4vVGVtcGxhdGVzL1NraWxsc1wiO1xuXG5jb25zdCBOUENhcmQgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdidXN0ZXInLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9Dc1RWR1BMLnBuZycpXG4gICAgLnNldCgncXVpY2snLCBcImh0dHBzOi8vaS5pbWd1ci5jb20vTEl0VVo5NC5wbmdcIilcbiAgICAuc2V0KCdhcnRzJywgXCJodHRwczovL2kuaW1ndXIuY29tL29tWFhRa3UucG5nXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2JsZVBoYW50YXNtUGFnZSB7XG4gICAgcHJvdGVjdGVkIG5wOiBOb2JsZVBoYW50YXNtLk5vYmxlUGhhbnRhc207XG4gICAgcHJvdGVjdGVkIGxldmVsOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIG92ZXJjaGFyZ2U6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc2VydmFudDogU2VydmFudC5TZXJ2YW50O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5wOiBOb2JsZVBoYW50YXNtLk5vYmxlUGhhbnRhc20sIGxldmVsOiBudW1iZXIsIG92ZXJjaGFyZ2U6IG51bWJlciwgc2VydmFudDogU2VydmFudC5TZXJ2YW50KSB7XG4gICAgICAgIHRoaXMubnAgPSBucDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLm92ZXJjaGFyZ2UgPSBvdmVyY2hhcmdlO1xuICAgICAgICB0aGlzLnNlcnZhbnQgPSBzZXJ2YW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDb21tYW5kQ2FyZChzdHI6IHN0cmluZywgaGVpZ2h0Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke05QQ2FyZC5nZXQoc3RyKX1cIiBzdHlsZT1cImhlaWdodDoke2hlaWdodH1cIj5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtOUENhcmQuZ2V0KHN0cil9XCI+YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBUcmFuc2xhdGVOUCgpIHtcbiAgICAgICAgaWYgKE1hcE5wVHJhbnNsYXRlLmhhcyh0aGlzLm5wLmlkKSkge1xuICAgICAgICAgICAgY29uc3QgTnBUcmFsYXRlZCA9IE1hcE5wVHJhbnNsYXRlLmdldCh0aGlzLm5wLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE5wVHJhbGF0ZWQpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IE5wVHJhbGF0ZWQubmFtZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IE5wVHJhbGF0ZWQuZGV0YWlsLnJlcGxhY2UoLyVzL2csIFwiPGI+4o6hTGEgc29icmVjYXJnYSBhdW1lbnRhIGVzdGUgZWZlY3Rv4o6mPC9iPlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5wLm5hbWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLm5wLmRldGFpbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0dXJuKCkge1xuICAgICAgICBjb25zdCBmdW5jID0gYXdhaXQgbmV3IEVmZmVjdEJyZWFrZG93bih0aGlzLmxldmVsLCB0aGlzLm5wLmZ1bmN0aW9ucywgW10sIHRoaXMubnAubnBHYWluKS5yZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5Db21tYW5kQ2FyZCh0aGlzLm5wLmNhcmQpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm9yaWdpbmFOYW1lU2tpbGxcIj5cbiAgICAgICAgICAgICAgICBbJHt0aGlzLm5wLm5hbWV9XVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogeHgtbGFyZ2VcIj4ke3RoaXMuVHJhbnNsYXRlTlAoKS5uYW1lfTwvc3Bhbj48aHI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLlRyYW5zbGF0ZU5QKCkuZGV0YWlsfTxocj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5wLm5wRGlzdHJpYnV0aW9uLmxlbmd0aH0gJHt0aGlzLm5wLm5wRGlzdHJpYnV0aW9uLmxlbmd0aCA+IDEgPyBcIkdvbHBlc1wiIDogXCJHb2xwZVwifVxuICAgICAgICAgICAgICAgICAgICAtICR7bWVyZ2VFbGVtZW50cyh0aGlzLm5wLm5wRGlzdHJpYnV0aW9uLm1hcChoaXQgPT4gYXNQZXJjZW50KGhpdCwgMCkpLCAnLCAnKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJyZXNwb25zaXZlLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RWZlY3RvczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5sZXZlbCA/IEFycmF5LmZyb20oQXJyYXkodGhpcy5sZXZlbCkua2V5cygpKS5tYXAobGV2ZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8dGQ+THYuJHtsZXZlbCArIDF9PC90ZD5gXG4gICAgICAgIH0pLmpvaW4oJyAnKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZnVuYy5yZXBsYWNlKC8sL2csICcgJyl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxufSJdfQ==