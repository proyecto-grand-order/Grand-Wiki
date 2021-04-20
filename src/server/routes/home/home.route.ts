import { Servant } from "@isaaczm/api-connector";
import { Router, Application } from "express";
import * as helpers from '../../helpers/service/index';

export default class Home {
    private app: Application;
    private router: Router;

    constructor(app: Application, servant: Servant.Servant[]) {
        this.app = app
        this.router = Router()

        this.app.use(this.router)
        var servants = new Map()
        
        servant.forEach((servant: Servant.Servant) => {
            servants.set(`[${servant.collectionNo}] - ${servant.name}`, `${helpers.ClassIconList.get(servant.className.toLowerCase()) || helpers.ClassIconList.get('beast')}`)    
        })

        try {
            this.router.get('/', (req, res) => {
                res.render('home', {
                    datos: JSON.stringify(Object.fromEntries(servants))
                })
            })
            this.loaded('Router (Home) cargado con exito! Path("/")')
        } catch (e) {
            this.loaded("Ha ocurrido un error! : " + e.message)
        }
    }

    private loaded(text: string) {
        console.log("[ROUTER]", text)
    }
}