import express, { Application } from "express";
import cors from 'cors';
import Home from "./routes/home/home.route";
import { createServer } from "http";
import { settings } from "./settings/index";
import { Servant } from "@isaaczm/api-connector";
import Servants from "./routes/servants/servant.route";
import exphbs from 'express-handlebars';
import Repeat from "./helpers/repeat";
import chalk from 'chalk';
import spin, { Spinner } from "cli-spinner";
import listened from "../console";
import outProcess from "../console/out";
import morgan from "morgan";
import SkillController, { SkillReturn } from "./routes/servants/servant.controller";
import TranslateModule from "./routes/servants/servant.translate";
import TraitDescription from "../apis/atlas/Descriptor/TraitDescription";
import NoblePhantasmPage from "../apis/atlas/Pages/NoblePhantasm";
import ip from 'ip';
import { MapNpTranslate } from "../apis/atlas/Descriptor/NpTranslate";
import ApiMerged from "./index.servant.api";
import List from "./routes/list/list.route";

export default class Servidor {
    protected server: Application;
    protected settings: settings;
    protected spinner: Spinner;

    public constructor(settings: settings) {
        this.settings = settings

        // Console Spinner
        const Spinner = spin.Spinner;

        this.spinner = new Spinner({
            text: chalk.blueBright('[SERVER]') + ' Pidiendo datos a https://api.atlasacademy.io %s',
            stream: process.stderr,
            onTick: function (msg) {
                this.clearLine(this.stream);
                this.stream.write(msg);
            }
        })

        this.spinner.setSpinnerString('▁▃▄▅▆▇█▇▆▅▄▃')
    }
    
    private TranslateNP(servant: Servant.Servant) {
        const root = []
        servant.noblePhantasms.forEach(np => {
            if(MapNpTranslate.has(np.id)) {
                const NpTralated = MapNpTranslate.get(np.id);
                root.push(NpTralated.name)
            } else {
                root.push(np.name)
            }
        })
        return root
    }

    private async getServants(): Promise<Servant.Servant[]> {
        this.spinner.start();
        const req = await ApiMerged.mergeApis()
        const res: Servant.Servant[] = req;
        this.spinner.stop()
        console.log(chalk.blueBright('\n[SERVER]') + " Servants " + chalk.bold(res.length) + ' guardados en el cache!')
        return res
    }

    private async loadSkills(servant: Servant.Servant) {
        var { skills } = servant;
        var cache = []

        for (const skill of skills) {
            cache.push(await new SkillController(skill, servant).get())
        }

        return cache
    }

    public async init(): Promise<void> {

        this.server = express()
        this.server.use(express.json())
        this.server.use(morgan(`${chalk.cyan('[:method]')} Path[ :url ] ${'Code[ ' + chalk.bold(':status ]')} Time[ :response-time ms ] Length[ :res[content-length] ]`))
        this.server.use(cors({
            origin: true,
            credentials: false
        }))
        this.server.use(express.static("public"));
        

        // Out process
        new outProcess()

        // Helpers
        new Repeat(exphbs)
        // Middleaware
        this.server.engine('.hbs', exphbs({ extname: '.hbs' }));
        this.server.set('view engine', '.hbs');

        // Loaders
        await TraitDescription.traitList()

        // Translate Loaded
        await TranslateModule.init()

        // Router loader
        const svts = await this.getServants();
        new Home(this.server, svts)
        new List(this.server, svts)

        for (const svt of svts) {
            const nps = await Promise.all(svt.noblePhantasms.map(async (np) => {
                return new NoblePhantasmPage(np, 5, 5, svt).return()
            }))
            const npsName = this.TranslateNP(svt)
            
            const skills: SkillReturn[] = await this.loadSkills(svt)            
            new Servants(this.server, String(svt.collectionNo), svt, skills, nps, npsName)
        }


        // Start Server
        const servidor = createServer(this.server).listen(this.settings.port, (): void => {
            console.clear()
            // @ts-ignore
            console.log(listened.BoxListen(ip.address()))
        })
    }
}