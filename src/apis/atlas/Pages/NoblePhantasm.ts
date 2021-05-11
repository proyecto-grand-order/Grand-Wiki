import { NoblePhantasm, Servant } from "@isaaczm/api-connector";
import EffectBreakdown from "../Breakdowns/EffectBreakdown";
import { MapNpTranslate } from "../Descriptor/NpTranslate";
import { asPercent, mergeElements } from "../Helper/OutputHelper";
import * as helper from "../../../server/helpers/service/index";

const NPCard = new Map()
    .set('buster', 'https://i.imgur.com/CsTVGPL.png')
    .set('quick', "https://i.imgur.com/LItUZ94.png")
    .set('arts', "https://i.imgur.com/omXXQku.png");

const TextCard = new Map()
    .set('buster', "/images/np_txt_buster.png")
    .set('quick', "/images/np_txt_quick.png")
    .set('arts', "/images/np_txt_arts.png")
    .set('extra', "/images/np_txt_extra.png")

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

    private CommandCard(str: string, gain?: boolean, height?: string) {
        if (height) {
            if(gain) {
                return `<img src="${TextCard.get(str)}" style="height:${height}">`
            } else {
                return `<img src="${NPCard.get(str)}" style="height:${height}">`
            }
        } else {
            if(gain) {
                return `<img src="${TextCard.get(str)}">`
            } else {
                return `<img src="${NPCard.get(str)}">`
            }
        }
    }

    private TranslateNP() {
        if (MapNpTranslate.has(this.np.id)) {
            const NpTralated = MapNpTranslate.get(this.np.id);
            return {
                name: NpTralated.name,
                detail: NpTralated.detail
                    .replace(/%s/g, "<b>⎡La sobrecarga aumenta este efecto⎦</b>")
                    .replace(/%m/g, "▲")
                    .replace(/%saber/g, `<img src="${helper.ClassIconList.get('saber')}" height="24px">`)
                    .replace(/%shielder/g, `<img src="${helper.ClassIconList.get('shielder')}" height="24px">`)
                    .replace(/%archer/g, `<img src="${helper.ClassIconList.get('archer')}" height="24px">`)
                    .replace(/%lancer/g, `<img src="${helper.ClassIconList.get('lancer')}" height="24px">`)
                    .replace(/%rider/g, `<img src="${helper.ClassIconList.get('rider')}" height="24px">`)
                    .replace(/%caster/g, `<img src="${helper.ClassIconList.get('caster')}" height="24px">`)
                    .replace(/%berserker/g, `<img src="${helper.ClassIconList.get('berserker')}" height="24px">`)
                    .replace(/%ruler/g, `<img src="${helper.ClassIconList.get('ruler')}" height="24px">`)
                    .replace(/%avenger/g, `<img src="${helper.ClassIconList.get('avenger')}" height="24px">`)
                    .replace(/%moon/g, `<img src="${helper.ClassIconList.get('mooncancer')}" height="24px">`)
                    .replace(/%alter/g, `<img src="${helper.ClassIconList.get('alterego')}" height="24px">`)
                    .replace(/%beast/g, `<img src="${helper.ClassIconList.get('beast')}" height="24px">`)
                    .replace(/%foreigner/g, `<img src="${helper.ClassIconList.get('foreigner')}" height="24px">`)
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
            
            <div class="row">
                <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s3"><a href="#efectos-${this.np.id}">Efectos</a></li>
                        <li class="tab col s3"><a href="#efectos:ocultos-${this.np.id}">Efectos Ocultos</a></li>
                    </ul>
                </div>
            </div>

            <div id="efectos-${this.np.id}">
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

            <div id="efectos:ocultos-${this.np.id}">
                

                <table class="responsive-table">
                
                <thead>
                    <th>Efectos</th>
                    ${this.level ? Array.from(Array(this.level).keys()).map(level => {
                        return `<td>Lv.${level + 1}</td>`
                    }).join(' ') : ""}
                </thead>
                <tbody>

                <td>Ganancia de NP</td>
                    ${[...Array(this.level)].map((_, key) => {
                        return `
                        <td>
                            ${asPercent(this.np.npGain?.buster[key], 2)}${this.CommandCard('buster', true, '15px')}<br/>
                            ${asPercent(this.np.npGain?.arts[key], 2)} ${this.CommandCard('arts', true, '15px')}<br/>
                            ${asPercent(this.np.npGain?.quick[key], 2)} ${this.CommandCard('quick', true, '15px')}<br/>
                            ${asPercent(this.np.npGain?.extra[key], 2)} ${this.CommandCard('extra', true, '15px')}<br/>
                            ${asPercent(this.np.npGain?.np[key], 2)} NP<br/>
                            ${asPercent(this.np.npGain?.defence[key], 2)} Def
                        </td>
                        `
                    }).join(" ")}
                </tbody>

                </table>
                
            </div>
            
        </div>
        `
    }
}