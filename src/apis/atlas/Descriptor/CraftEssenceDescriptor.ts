import { CraftEssence, Entity, Region } from "@isaaczm/api-connector";

export default class CraftEssenceDescriptor {
    export(ce: CraftEssence.CraftEssence) {

        const assetMap = ce.extraAssets.faces.equip,
            asset = assetMap ? assetMap[ce.id] : undefined;

        return ` ${asset ? `<img src="${asset}">` : ' '} ${ce.name} ${' '}`;
    }
}