import { DataVal, Func } from "@isaaczm/api-connector";
import { mergeElements } from "../../Helper/OutputHelper";
import TraitDescription from "../TraitDescription";
import { FuncDescriptorSections } from "./FuncDescriptorSections";

export default function (sections: FuncDescriptorSections, func: Func.Func, dataVal: DataVal.DataVal): void {
    const section = sections.affects,
        parts = section.parts;

    if (func.funcType === Func.FuncType.DAMAGE_NP_HPRATIO_LOW) {
        parts.push('(adicional con HP bajos)');
    } else if (typeof dataVal.Target === "number"
        && (
            func.funcType === Func.FuncType.DAMAGE_NP_INDIVIDUAL
            || func.funcType === Func.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX
        )
    ) {
        parts.push(`<span>(adicional para objetivos con los rasgos ${new TraitDescription(dataVal.Target).export()})</span>`);
    } else if (
        dataVal.TargetList
        && dataVal.TargetList.length > 0
        && func.funcType === Func.FuncType.DAMAGE_NP_INDIVIDUAL_SUM
    ) {
        const traitIds = dataVal.TargetList,
            traits = traitIds.map(id => new TraitDescription(id).export());

        parts.push(`<span>(Bono por rasgo ${mergeElements(traits, ' or ')} ${dataVal.ParamAddMaxCount ? `[Limit ${dataVal.ParamAddMaxCount}]` : null
            })</span>`);
    } else if (
        dataVal.TargetRarityList
        && dataVal.TargetRarityList.length > 0
        && func.funcType === Func.FuncType.DAMAGE_NP_RARE
    ) {
        parts.push(`<span>(bonus contra ${dataVal.TargetRarityList.join('/')} ${dataVal.TargetRarityList.length > 1 ? 'rarities' : 'rarity'
            })</span>`)
    } else if (func.funcType === Func.FuncType.DAMAGE_NP_PIERCE) {
        parts.push('(penetra la defensa)');
    }

    if (
        func.funcType === Func.FuncType.ENEMY_ENCOUNT_COPY_RATE_UP
        || func.funcType === Func.FuncType.ENEMY_ENCOUNT_RATE_UP
        || func.funcType === Func.FuncType.EVENT_DROP_UP
    ) {
        if (dataVal.Individuality) {
            parts.push(`<span>con ${new TraitDescription(Number(dataVal.Individuality)).export()}</span>`)
        }

        if (dataVal.EventId) {
            parts.push(`<span>Durante el evento ${new TraitDescription(Number(dataVal.EventId))}</span>`)
        }
    }

    if (func.funcquestTvals.length) {
        parts.push('Si esta en el campo de batalla');
        parts.push(
            mergeElements(
                func.funcquestTvals.map(trait => new TraitDescription(trait).export()),
                ' & '
            )
        );
    }

    if (func.functvals.length) {
        parts.push('para objetivos');

        if (func.functvals.length > 1) {
            parts.push('all');
        }

        func.functvals.forEach((trait, index) => {
            if (index > 0)
                parts.push('&');

            parts.push(`${new TraitDescription(trait).export()}`);
        });
    }

    if (!parts.length) {
        section.showing = false;
    }

}
