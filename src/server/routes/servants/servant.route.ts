import { Router, Application } from "express";
import { Servant } from "@isaaczm/api-connector";
import * as helper from '../../helpers/service/index';
import chalk from "chalk";
import date from 'date-and-time';
import {SkillReturn} from "./servant.controller";

const now = new Date();
export default class Servants {
    private app: Application;
    private router: Router;

    constructor(app: Application, name: string, servant: Servant.Servant, skill: SkillReturn[], nps: string[], npsName: string[]) {
        this.app = app
        this.router = Router()

        this.app.use(this.router)
        
        var ascensiones = [...Object.values(servant.extraAssets.charaGraph.ascension)];
        
        if (servant.extraAssets.charaGraph.costume) {
            ascensiones.push(...Object.values(servant.extraAssets.charaGraph.costume))
        }
        
        const decks = servant.cards.map(text => {
            return {
                card: text.toLowerCase(),
                face: servant.extraAssets.commands.ascension ? servant.extraAssets.commands.ascension["3"] : "https://i.imgur.com/M2xRDrt.png"
            }
        })


        try {
            this.router.get(`/servant/${name}`, async (req, res) => {
                res.render('servant', {
                    ascension: ascensiones,
                    servant: servant,
                    rarity: '★'.repeat(servant.rarity),
                    classIcon: helper.ClassIconList.get(servant.className.toLowerCase()),
                    stats: {
                        deathChance: helper.asPercent(servant.instantDeathChance, 1),
                        decks: {
                            card: decks,
                        },
                        star: {
                            weight: servant.starAbsorb,
                            gen: helper.asPercent(servant.starGen, 1)
                        }
                    },
                    skills: skill,
                    nps: nps,
                    npsName: npsName
                })
            })

            this.loaded(`Nueva ruta creada en ` + chalk.greenBright('/servant/' + name) + ' servant ' + chalk.green.bold(servant.name) + ' agregado!')

        } catch (e) {
            this.loaded("Ha ocurrido un error! : " + e.message)
        }
    }

    private loaded(text: string) {
        console.log(chalk.yellowBright(date.format(now, 'YYYY/MM/DD') + ': ') + chalk.cyan("[ROUTER]"), text)
    }
}