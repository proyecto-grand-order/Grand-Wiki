import {CraftEssence, Region} from "@atlasacademy/api-connector";
import Api from "../Api";
import CraftEssenceDescriptor from "./CraftEssenceDescriptor";

// When is loaded this archive create Cache For Craft Essence
let cacheCE: Map<number, CraftEssence.CraftEssence> = new Map()

export default class CraftEssenceReferenceDescriptor {

    async getCE(id: number): Promise<CraftEssence.CraftEssence> {
        if(cacheCE.has(id)) {
            return cacheCE.get(id)
        }

        //@ts-ignore
        const ce: CraftEssence.CraftEssence = await Api.craftEssence(id);
        if(ce === undefined) return undefined
        
        cacheCE.set(id, ce)
        return ce
    }

    async export(id: number) {
        const craftEsence: CraftEssence.CraftEssence = await this.getCE(id);
        
        if(craftEsence === undefined)
        {
            return `[Craft Essence: ${id}]`
        }

        //@ts-ignore
        return new CraftEssenceDescriptor().export(craftEsence)
    }
}