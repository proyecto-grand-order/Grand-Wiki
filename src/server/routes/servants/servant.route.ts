import { Router, Application } from "express";
import { Servant } from "@isaaczm/api-connector";
import * as helper from '../../helpers/service/index';
import chalk from "chalk";
import date from 'date-and-time';
import {SkillReturn} from "./servant.controller";
import PreloadImageToBase64 from "./servant.preloadImage";
import servantPreloadImage from "./servant.preloadImage";

const now = new Date();
export default class Servants {
    private app: Application;
    private router: Router;

    constructor(app: Application, name: string, servant: Servant.Servant, skill: SkillReturn[], nps: string[], npsName: string[], ascensionsEncoded: string[]) {
        this.app = app
        this.router = Router()

        this.app.use(this.router)

        const decks = servant.cards.map(text => {
            return {
                card: text.toLowerCase(),
                face: servant.extraAssets.commands.ascension ? servant.extraAssets.commands.ascension["3"] : "https://i.imgur.com/M2xRDrt.png"
            }
        })


        try {
            this.router.get(`/servant/${name}`, async (req, res) => {
                res.render('servant', {
                    ascension: ascensionsEncoded,
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