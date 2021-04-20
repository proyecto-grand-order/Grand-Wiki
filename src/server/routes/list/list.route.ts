import { Servant } from "@isaaczm/api-connector";
import { Router, Application } from "express";
import { ClassIconList } from "../../helpers/service/index";

export default class List {
  private app: Application;
  private router: Router;
  private servants: Servant.Servant[];

  constructor(app: Application, servant: Servant.Servant[]) {
    this.app = app;
    this.router = Router();
    this.servants = servant

    this.app.use(this.router);

    try {
      this.router.get("/servants", (req, res) => {
        res.render("lista.hbs", {
            list: this.GetList(),
            clases: Object.values(Object.fromEntries(ClassIconList))
        });
      });
      this.loaded('Router (Servants) cargado con exito! Path("/servants")');
    } catch (e) {
      this.loaded("Ha ocurrido un error! : " + e.message);
    }
  }

  private GetList() {
    const servants = this.servants;
    return servants.map((servant) => {
        
        if(servant.extraAssets.commands.ascension === undefined) {

        } else {
            var head = {
                className: servant.className,
                img: `<img id="HeadTable" src="${servant.extraAssets.commands.ascension["1"]}" alt="${servant.className}">`
            }
        }
    
        return {
            id: servant.collectionNo,
            rarity: '★'.repeat(servant.rarity),
            name: servant.name,
            class: ClassIconList.get(servant.className),
            head
        };
    });
  }

  private loaded(text: string) {
    console.log("[ROUTER]", text);
  }
}
