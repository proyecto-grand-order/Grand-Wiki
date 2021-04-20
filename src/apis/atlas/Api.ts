import {
    ApiConnector,
    Buff,
    ClassName,
    CommandCode,
    CraftEssence,
    Enemy,
    Entity,
    Func,
    Language,
    MysticCode,
    NoblePhantasm,
    Quest,
    Region,
    Servant,
    Skill,
    Trait
} from "@isaaczm/api-connector";

const host = 'https://api.atlasacademy.io',
    cacheDuration = 20 * 1000;


let apiConnector: ApiConnector = new ApiConnector({
    host,
    region: Region.JP,
    language: Language.ENGLISH
});

let apiConnectorNA: ApiConnector = new ApiConnector({
    host,
    region: Region.NA,
    language: Language.DEFAULT
});

export default class Api {
    static init(region: Region, language: Language) {
        apiConnector = new ApiConnector({ host, region, language });
    }

    static buff(id: number): Promise<Buff.Buff> {
        return apiConnector.buff(id, cacheDuration);
    }

    static commandCode(id: number): Promise<CommandCode.CommandCode> {
        return apiConnector.commandCode(id, cacheDuration);
    }

    static async commandCodeList(): Promise<CommandCode.CommandCodeBasic[]> {
        return apiConnector.commandCodeList(-1);
    }

    static craftEssence(id: number): Promise<CraftEssence.CraftEssence> {
        return apiConnectorNA.craftEssence(id, cacheDuration) ? apiConnectorNA.craftEssence(id, cacheDuration) :
            apiConnector.craftEssence(id, cacheDuration);
    }

    static async craftEssenceList(): Promise<CraftEssence.CraftEssenceBasic[]> {
        return apiConnector.craftEssenceList(-1);
    }

    static async enemy(id: number): Promise<Enemy.Enemy> {
        return apiConnector.enemy(id);
    }

    static func(id: number): Promise<Func.Func> {
        return apiConnector.func(id, cacheDuration);
    }

    static mysticCode(id: number): Promise<MysticCode.MysticCode> {
        return apiConnector.mysticCode(id, cacheDuration);
    }

    static async mysticCodeList(): Promise<MysticCode.MysticCodeBasic[]> {
        return apiConnector.mysticCodeList(-1);
    }

    static noblePhantasm(id: number): Promise<NoblePhantasm.NoblePhantasm> {
        return apiConnector.noblePhantasm(id, cacheDuration);
    }

    static questPhase(id: number, phase: number): Promise<Quest.QuestPhase> {
        return apiConnector.questPhase(id, phase, cacheDuration);
    }

    static servant(id: number): Promise<Servant.Servant> {
        return apiConnector.servant(id, cacheDuration);
    }

    static async servantList(): Promise<Servant.ServantBasic[]> {
        return apiConnector.servantList(-1);
    }

    static skill(id: number): Promise<Skill.Skill> {
        return apiConnector.skill(id, cacheDuration);
    }
    
    static skillNA(id: number): Promise<Skill.Skill> {
        return apiConnectorNA.skill(id, cacheDuration);
    }
    static traitList(): Promise<Trait.Trait[]> {
        return apiConnectorNA.traitList(-1) ? apiConnectorNA.traitList(-1) : apiConnector.traitList(-1);
    }

    static searchBuffs(name?: string, type?: Buff.BuffType): Promise<Buff.Buff[]> {
        return apiConnector.searchBuff({ name, type });
    }

    static searchEntity(name?: string,
        type?: Entity.EntityType,
        className?: ClassName,
        gender?: Entity.Gender,
        attribute?: Entity.Attribute,
        excludeCollectionNo?: string,
        traits?: number[]): Promise<Entity.EntityBasic[]> {
        return apiConnector.searchEntity({
            name, type, className, gender, attribute, traits, excludeCollectionNo
        });
    }

    static searchFuncs(text?: string,
        type?: Func.FuncType,
        target?: Func.FuncTargetType,
        team?: Func.FuncTargetTeam): Promise<Func.Func[]> {
        return apiConnector.searchFunc({ text, type, target, team });
    }
}