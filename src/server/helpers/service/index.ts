export const asPercent = (value: number | string | undefined, pow: number): string => {
    if (typeof value === "string")
        return asPercent(parseInt(value), pow);

    const decimal = (value ?? 0) / Math.pow(10, pow);

    return `${decimal}%`;
}


export const ClassIconList = new Map()
.set('saber', 'https://static.wikia.nocookie.net/fategrandorder/images/b/b4/Class-Saber-Gold.png')
.set('shielder', 'https://static.wikia.nocookie.net/fategrandorder/images/a/ab/Class-Shielder-Gold.png')
.set('archer', 'https://static.wikia.nocookie.net/fategrandorder/images/9/90/Class-Archer-Gold.png')
.set('lancer', 'https://static.wikia.nocookie.net/fategrandorder/images/7/79/Class-Lancer-Gold.png')
.set('rider', 'https://static.wikia.nocookie.net/fategrandorder/images/0/04/Class-Rider-Gold.png')
.set('caster', 'https://static.wikia.nocookie.net/fategrandorder/images/8/89/Class-Caster-Gold.png')
.set('assassin', 'https://static.wikia.nocookie.net/fategrandorder/images/7/7b/Class-Assassin-Gold.png')
.set('berserker', 'https://static.wikia.nocookie.net/fategrandorder/images/5/59/Class-Berserker-Gold.png')
.set('ruler', 'https://static.wikia.nocookie.net/fategrandorder/images/b/ba/Class-Ruler-Gold.png')
.set('avenger', 'https://static.wikia.nocookie.net/fategrandorder/images/1/13/Class-Avenger-Gold.png')
.set('mooncancer', 'https://static.wikia.nocookie.net/fategrandorder/images/3/3b/Class-MoonCancer-Gold.png')
.set('alterego', 'https://static.wikia.nocookie.net/fategrandorder/images/9/99/Class-Alterego-Gold.png')
.set('beast', 'https://static.wikia.nocookie.net/fategrandorder/images/1/13/Class-Beast.png')
.set('foreigner', 'https://static.wikia.nocookie.net/fategrandorder/images/7/70/Class-Foreigner-Gold.png')