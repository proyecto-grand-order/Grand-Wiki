import { Buff, DataVal, Func, Region } from "@isaaczm/api-connector";
import FuncValueDescriptor from "../Descriptor/FuncValueDescriptor";

const hasChangingDataVals = function (vals: DataVal.DataVal[]): boolean {
    if (!vals.length)
        return false;

    let previous = vals[0];
    for (let i = 1; i < vals.length; i++) {
        if (JSON.stringify(previous) !== JSON.stringify(vals[i]))
            return true;

        previous = vals[i];
    }

    return false;
};

const hasUniqueValues = function (values: (number | number[] | undefined)[]): boolean {
    if (values.length === 0)
        return false;

    return new Set(
        values.map(value => {
            if (Array.isArray(value))
                return value.join(',');

            return value;
        })
    ).size > 1;
};

export function describeMutators(region: Region, func: Func.Func) {
    const dataVals = getDataValList(func),
        staticVals = getStaticFieldValues(dataVals),
        mutatingVals = getMutatingFieldValues(dataVals);

    return mutatingVals
        .map(mutatingVal => new FuncValueDescriptor().export(func, staticVals, mutatingVal));
}


export function funcUpdatesByLevel(func: Func.Func): boolean {
    return hasChangingDataVals(getLevelDataValList(func));
}

export function funcUpdatesByOvercharge(func: Func.Func): boolean {
    return hasChangingDataVals(getOverchargeDataValList(func));
}


export function getDataValList(func: Func.Func): DataVal.DataVal[] {
    const isLevel = funcUpdatesByLevel(func),
        isOvercharge = funcUpdatesByOvercharge(func);

    return isLevel && isOvercharge
        ? getMixedDataValList(func)
        : (isOvercharge ? getOverchargeDataValList(func) : getLevelDataValList(func));
}

export function getFollowerDataValList(func: Func.Func): DataVal.DataVal[] {
    return func.followerVals ?? [];
}

export function getLevelDataValList(func: Func.Func): DataVal.DataVal[] {
    return func.svals ?? [];
}

export function getMixedDataValList(func: Func.Func): DataVal.DataVal[] {
    const dataVals = [];

    for (let i = 1; i <= 5; i++) {
        let dataVal = getTargetVersionValues(func, i, i);
        if (dataVal !== undefined)
            dataVals.push(dataVal);
    }

    return dataVals;
}

export function getMutatingFieldNames(vals: DataVal.DataVal[]): DataVal.DataValField[] {
    return Object.values(DataVal.DataValField).filter(field => {
        const values = vals.map(val => val[field]);

        return hasUniqueValues(values);
    });
}

export function getMutatingFieldValues(vals: DataVal.DataVal[]): DataVal.DataVal[] {
    if (!vals.length)
        return [];

    const fields = getMutatingFieldNames(vals),
        hasDependingVals = vals.filter(val => val.DependFuncVals !== undefined).length > 0,
        dependingVals: (DataVal.DataVal[] | undefined) = (
            hasDependingVals
                ? vals.map(val => (val.DependFuncVals ?? {}) as DataVal.DataVal)
                : undefined
        ),
        dependingMutatingValues = dependingVals ? getMutatingFieldValues(dependingVals) : [],
        staticValues = getStaticFieldValues(vals);

    return vals.map((val, index) => {
        const mutatingVals: DataVal.DataVal = {};

        for (let x in fields) {
            const fieldName = fields[x];

            // @ts-ignore
            mutatingVals[fieldName] = val[fieldName];
        }

        if (staticValues.DependFuncId && dependingMutatingValues[index]) {
            mutatingVals.DependFuncId = staticValues.DependFuncId;
            mutatingVals.DependFuncVals = dependingMutatingValues[index];
        }

        return mutatingVals;
    });
}

export function getOverchargeDataValList(func: Func.Func): DataVal.DataVal[] {
    const dataVals = [];

    for (let i = 1; i <= 5; i++) {
        let dataVal = getTargetVersionValues(func, 1, i);
        if (dataVal !== undefined)
            dataVals.push(dataVal);
    }

    return dataVals;
}

export function getRelatedSkillIds(func: Func.Func): number[] {
    if (func.funcType !== Func.FuncType.ADD_STATE && func.funcType !== Func.FuncType.ADD_STATE_SHORT)
        return [];

    const buff = func.buffs[0];
    if (
        buff.type === Buff.BuffType.ATTACK_FUNCTION
        || buff.type === Buff.BuffType.COMMANDATTACK_FUNCTION
        || buff.type === Buff.BuffType.COMMANDATTACK_BEFORE_FUNCTION
        || buff.type === Buff.BuffType.COMMANDCODEATTACK_FUNCTION
        || buff.type === Buff.BuffType.DAMAGE_FUNCTION
        || buff.type === Buff.BuffType.DEAD_FUNCTION
        || buff.type === Buff.BuffType.DELAY_FUNCTION
        || buff.type === Buff.BuffType.GUTS_FUNCTION
        || buff.type === Buff.BuffType.SELFTURNEND_FUNCTION
    ) {
        const dataVals = getDataValList(func),
            dataVal = dataVals[0];

        return typeof dataVal.Value === "number" ? [dataVal.Value] : [];
    }

    if (buff.type === Buff.BuffType.NPATTACK_PREV_BUFF) {
        const dataVals = getDataValList(func),
            dataVal = dataVals[0];

        return typeof dataVal.SkillID === "number" ? [dataVal.SkillID] : [];
    }

    return [];
}

export function getStaticFieldNames(vals: DataVal.DataVal[]): DataVal.DataValField[] {
    return Object.values(DataVal.DataValField).filter(field => {
        const values = vals.map(val => val[field]);

        return !hasUniqueValues(values);
    });
}

export function getStaticFieldValues(vals: DataVal.DataVal[]): DataVal.DataVal {
    if (!vals.length)
        return {};

    const fields = getStaticFieldNames(vals),
        staticVals: DataVal.DataVal = {},
        hasDependingVals = vals.filter(val => val.DependFuncVals !== undefined).length > 0,
        dependingVals: (DataVal.DataVal[] | undefined) = (
            hasDependingVals
                ? vals.map(val => (val.DependFuncVals ?? {}) as DataVal.DataVal)
                : undefined
        ),
        dependingStaticValues = dependingVals ? getStaticFieldValues(dependingVals) : undefined;

    for (let x in fields) {
        // @ts-ignore
        staticVals[fields[x]] = vals[0][fields[x]];
    }

    if (hasDependingVals)
        staticVals.DependFuncVals = dependingStaticValues;

    return staticVals;
}

export function getTargetFollowerVersionValues(func: Func.Func, level: number): DataVal.DataVal | undefined {
    if (func.followerVals === undefined)
        return undefined;

    return func.followerVals[level - 1];
}

export function getTargetVersionValues(func: Func.Func, level: number, overcharge: number = 1): DataVal.DataVal | undefined {
    if (func.svals === undefined)
        return undefined;

    let dataVals;

    if (overcharge === 2 && func.svals2)
        dataVals = func.svals2;
    else if (overcharge === 3 && func.svals3)
        dataVals = func.svals3;
    else if (overcharge === 4 && func.svals4)
        dataVals = func.svals4;
    else if (overcharge === 5 && func.svals5)
        dataVals = func.svals5;
    else
        dataVals = func.svals;

    return dataVals[level - 1];
}

export function hasFollowerDataVals(func: Func.Func): boolean {
    return func.followerVals !== undefined;
}