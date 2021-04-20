import { NoblePhantasm, Region, Servant } from "@isaaczm/api-connector";
import EffectBreakdown from "../Breakdowns/EffectBreakdown";
import FuncDescriptor from "../Descriptor/FuncDescriptor";
import { MapNpTranslate } from "../Descriptor/NpTranslate";
import { describeMutators, getRelatedSkillIds, getTargetVersionValues } from "../Helper/FuncHelper";
import { asPercent, mergeElements } from "../Helper/OutputHelper";
import SkillModule from "../Templates/Skills";

const NPCard = new Map()
    .set('buster', 'https://i.imgur.com/CsTVGPL.png')
    .set('quick', "https://i.imgur.com/LItUZ94.png")
    .set('arts', "https://i.imgur.com/omXXQku.png");

export default class NoblePhantasmPage {
    protected np: NoblePhantasm.NoblePhantasm;
    protected level: number;
    protected overcharge: number;
    protected servant: Servant.Servant;

    public constructor(np: NoblePhantasm.NoblePhantasm, level: number, overcharge: number, servant: Servant.Servant) {
        this.np = np;
        this.level = level;
        this.overcharge = overcharge;
        this.servant = servant
    }

    private CommandCard(str: string, height?: string) {
        if (height) {
            return `<img src="${NPCard.get(str)}" style="height:${height}">`
        } else {
            return `<img src="${NPCard.get(str)}">`
        }
    }

    private TranslateNP() {
        if (MapNpTranslate.has(this.np.id)) {
            const NpTralated = MapNpTranslate.get(this.np.id);
            console.log(NpTralated)
            return {
                name: NpTralated.name,
                detail: NpTralated.detail.replace(/%s/g, "<b>⎡La sobrecarga aumenta este efecto⎦</b>")
            }
        } else {
            return {
                name: this.np.name,
                detail: this.np.detail
            }
        }
    }

    async return() {
        const func = await new EffectBreakdown(this.level, this.np.functions, [], this.np.npGain).render();

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
                    - ${mergeElements(this.np.npDistribution.map(hit => asPercent(hit, 0)), ', ')}
                </span>
                </p>
                </div>
            </div>
            <table class="responsive-table">
                <thead>
                    <th>Efectos</th>
                    ${this.level ? Array.from(Array(this.level).keys()).map(level => {
            return `<td>Lv.${level + 1}</td>`
        }).join(' ') : ""}
                </thead>
                <tbody>
                    ${func.replace(/,/g, ' ')}
                </tbody>
            </table>
        </div>
        `
    }
}