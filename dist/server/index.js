"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const home_route_1 = __importDefault(require("./routes/home/home.route"));
const http_1 = require("http");
const servant_route_1 = __importDefault(require("./routes/servants/servant.route"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const repeat_1 = __importDefault(require("./helpers/repeat"));
const chalk_1 = __importDefault(require("chalk"));
const cli_spinner_1 = __importDefault(require("cli-spinner"));
const console_1 = __importDefault(require("../console"));
const out_1 = __importDefault(require("../console/out"));
const morgan_1 = __importDefault(require("morgan"));
const servant_controller_1 = __importDefault(require("./routes/servants/servant.controller"));
const servant_translate_1 = __importDefault(require("./routes/servants/servant.translate"));
const TraitDescription_1 = __importDefault(require("../apis/atlas/Descriptor/TraitDescription"));
const NoblePhantasm_1 = __importDefault(require("../apis/atlas/Pages/NoblePhantasm"));
const ip_1 = __importDefault(require("ip"));
const NpTranslate_1 = require("../apis/atlas/Descriptor/NpTranslate");
const index_servant_api_1 = __importDefault(require("./index.servant.api"));
const list_route_1 = __importDefault(require("./routes/list/list.route"));
class Servidor {
    constructor(settings) {
        this.settings = settings;
        // Console Spinner
        const Spinner = cli_spinner_1.default.Spinner;
        this.spinner = new Spinner({
            text: chalk_1.default.blueBright('[SERVER]') + ' Pidiendo datos a https://api.atlasacademy.io %s',
            stream: process.stderr,
            onTick: function (msg) {
                this.clearLine(this.stream);
                this.stream.write(msg);
            }
        });
        this.spinner.setSpinnerString('▁▃▄▅▆▇█▇▆▅▄▃');
    }
    TranslateNP(servant) {
        const root = [];
        servant.noblePhantasms.forEach(np => {
            if (NpTranslate_1.MapNpTranslate.has(np.id)) {
                const NpTralated = NpTranslate_1.MapNpTranslate.get(np.id);
                root.push(NpTralated.name);
            }
            else {
                root.push(np.name);
            }
        });
        return root;
    }
    async getServants() {
        this.spinner.start();
        const req = await index_servant_api_1.default.mergeApis();
        const res = req;
        this.spinner.stop();
        console.log(chalk_1.default.blueBright('\n[SERVER]') + " Servants " + chalk_1.default.bold(res.length) + ' guardados en el cache!');
        return res;
    }
    async loadSkills(servant) {
        var { skills } = servant;
        var cache = [];
        for (const skill of skills) {
            cache.push(await new servant_controller_1.default(skill, servant).get());
        }
        return cache;
    }
    async init() {
        this.server = express_1.default();
        this.server.use(express_1.default.json());
        this.server.use(morgan_1.default(`${chalk_1.default.cyan('[:method]')} Path[ :url ] ${'Code[ ' + chalk_1.default.bold(':status ]')} Time[ :response-time ms ] Length[ :res[content-length] ]`));
        this.server.use(cors_1.default({
            origin: true,
            credentials: false
        }));
        this.server.use(express_1.default.static("public"));
        // Out process
        new out_1.default();
        // Helpers
        new repeat_1.default(express_handlebars_1.default);
        // Middleaware
        this.server.engine('.hbs', express_handlebars_1.default({ extname: '.hbs' }));
        this.server.set('view engine', '.hbs');
        // Loaders
        await TraitDescription_1.default.traitList();
        // Translate Loaded
        await servant_translate_1.default.init();
        // Router loader
        const svts = await this.getServants();
        new home_route_1.default(this.server, svts);
        new list_route_1.default(this.server, svts);
        for (const svt of svts) {
            const nps = await Promise.all(svt.noblePhantasms.map(async (np) => {
                return new NoblePhantasm_1.default(np, 5, 5, svt).return();
            }));
            const npsName = this.TranslateNP(svt);
            const skills = await this.loadSkills(svt);
            new servant_route_1.default(this.server, String(svt.collectionNo), svt, skills, nps, npsName);
        }
        // Start Server
        const servidor = http_1.createServer(this.server).listen(this.settings.port, () => {
            console.clear();
            // @ts-ignore
            console.log(console_1.default.BoxListen(ip_1.default.address()));
        });
    }
}
exports.default = Servidor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQStDO0FBQy9DLGdEQUF3QjtBQUN4QiwwRUFBNEM7QUFDNUMsK0JBQW9DO0FBSXBDLG9GQUF1RDtBQUN2RCw0RUFBd0M7QUFDeEMsOERBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiw4REFBNEM7QUFDNUMseURBQWtDO0FBQ2xDLHlEQUF3QztBQUN4QyxvREFBNEI7QUFDNUIsOEZBQW9GO0FBQ3BGLDRGQUFrRTtBQUNsRSxpR0FBeUU7QUFFekUsc0ZBQWtFO0FBQ2xFLDRDQUFvQjtBQUNwQixzRUFBc0U7QUFDdEUsNEVBQTRDO0FBQzVDLDBFQUE0QztBQUU1QyxNQUFxQixRQUFRO0lBS3pCLFlBQW1CLFFBQWtCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLGtCQUFrQjtRQUNsQixNQUFNLE9BQU8sR0FBRyxxQkFBSSxDQUFDLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO1lBQ3ZCLElBQUksRUFBRSxlQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGtEQUFrRDtZQUN2RixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsTUFBTSxFQUFFLFVBQVUsR0FBRztnQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDSixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFTyxXQUFXLENBQUMsT0FBd0I7UUFDeEMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFB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LENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQTNHRCwyQkEyR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBIb21lIGZyb20gXCIuL3JvdXRlcy9ob21lL2hvbWUucm91dGVcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzL2luZGV4XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IE5vYmxlUGhhbnRhc20sIFNlcnZhbnQgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0IFNlcnZhbnRzIGZyb20gXCIuL3JvdXRlcy9zZXJ2YW50cy9zZXJ2YW50LnJvdXRlXCI7XG5pbXBvcnQgZXhwaGJzIGZyb20gJ2V4cHJlc3MtaGFuZGxlYmFycyc7XG5pbXBvcnQgUmVwZWF0IGZyb20gXCIuL2hlbHBlcnMvcmVwZWF0XCI7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHNwaW4sIHsgU3Bpbm5lciB9IGZyb20gXCJjbGktc3Bpbm5lclwiO1xuaW1wb3J0IGxpc3RlbmVkIGZyb20gXCIuLi9jb25zb2xlXCI7XG5pbXBvcnQgb3V0UHJvY2VzcyBmcm9tIFwiLi4vY29uc29sZS9vdXRcIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IFNraWxsQ29udHJvbGxlciwgeyBTa2lsbFJldHVybiB9IGZyb20gXCIuL3JvdXRlcy9zZXJ2YW50cy9zZXJ2YW50LmNvbnRyb2xsZXJcIjtcbmltcG9ydCBUcmFuc2xhdGVNb2R1bGUgZnJvbSBcIi4vcm91dGVzL3NlcnZhbnRzL3NlcnZhbnQudHJhbnNsYXRlXCI7XG5pbXBvcnQgVHJhaXREZXNjcmlwdGlvbiBmcm9tIFwiLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL1RyYWl0RGVzY3JpcHRpb25cIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBOb2JsZVBoYW50YXNtUGFnZSBmcm9tIFwiLi4vYXBpcy9hdGxhcy9QYWdlcy9Ob2JsZVBoYW50YXNtXCI7XG5pbXBvcnQgaXAgZnJvbSAnaXAnO1xuaW1wb3J0IHsgTWFwTnBUcmFuc2xhdGUgfSBmcm9tIFwiLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL05wVHJhbnNsYXRlXCI7XG5pbXBvcnQgQXBpTWVyZ2VkIGZyb20gXCIuL2luZGV4LnNlcnZhbnQuYXBpXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9yb3V0ZXMvbGlzdC9saXN0LnJvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZpZG9yIHtcbiAgICBwcm90ZWN0ZWQgc2VydmVyOiBBcHBsaWNhdGlvbjtcbiAgICBwcm90ZWN0ZWQgc2V0dGluZ3M6IHNldHRpbmdzO1xuICAgIHByb3RlY3RlZCBzcGlubmVyOiBTcGlubmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3NcblxuICAgICAgICAvLyBDb25zb2xlIFNwaW5uZXJcbiAgICAgICAgY29uc3QgU3Bpbm5lciA9IHNwaW4uU3Bpbm5lcjtcblxuICAgICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgU3Bpbm5lcih7XG4gICAgICAgICAgICB0ZXh0OiBjaGFsay5ibHVlQnJpZ2h0KCdbU0VSVkVSXScpICsgJyBQaWRpZW5kbyBkYXRvcyBhIGh0dHBzOi8vYXBpLmF0bGFzYWNhZGVteS5pbyAlcycsXG4gICAgICAgICAgICBzdHJlYW06IHByb2Nlc3Muc3RkZXJyLFxuICAgICAgICAgICAgb25UaWNrOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxpbmUodGhpcy5zdHJlYW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zcGlubmVyLnNldFNwaW5uZXJTdHJpbmcoJ+KWgeKWg+KWhOKWheKWhuKWh+KWiOKWh+KWhuKWheKWhOKWgycpXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgVHJhbnNsYXRlTlAoc2VydmFudDogU2VydmFudC5TZXJ2YW50KSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBbXVxuICAgICAgICBzZXJ2YW50Lm5vYmxlUGhhbnRhc21zLmZvckVhY2gobnAgPT4ge1xuICAgICAgICAgICAgaWYoTWFwTnBUcmFuc2xhdGUuaGFzKG5wLmlkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IE5wVHJhbGF0ZWQgPSBNYXBOcFRyYW5zbGF0ZS5nZXQobnAuaWQpO1xuICAgICAgICAgICAgICAgIHJvb3QucHVzaChOcFRyYWxhdGVkLm5hbWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QucHVzaChucC5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcm9vdFxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0U2VydmFudHMoKTogUHJvbWlzZTxTZXJ2YW50LlNlcnZhbnRbXT4ge1xuICAgICAgICB0aGlzLnNwaW5uZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgQXBpTWVyZ2VkLm1lcmdlQXBpcygpXG4gICAgICAgIGNvbnN0IHJlczogU2VydmFudC5TZXJ2YW50W10gPSByZXE7XG4gICAgICAgIHRoaXMuc3Bpbm5lci5zdG9wKClcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuYmx1ZUJyaWdodCgnXFxuW1NFUlZFUl0nKSArIFwiIFNlcnZhbnRzIFwiICsgY2hhbGsuYm9sZChyZXMubGVuZ3RoKSArICcgZ3VhcmRhZG9zIGVuIGVsIGNhY2hlIScpXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRTa2lsbHMoc2VydmFudDogU2VydmFudC5TZXJ2YW50KSB7XG4gICAgICAgIHZhciB7IHNraWxscyB9ID0gc2VydmFudDtcbiAgICAgICAgdmFyIGNhY2hlID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgICAgY2FjaGUucHVzaChhd2FpdCBuZXcgU2tpbGxDb250cm9sbGVyKHNraWxsLCBzZXJ2YW50KS5nZXQoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMuc2VydmVyID0gZXhwcmVzcygpXG4gICAgICAgIHRoaXMuc2VydmVyLnVzZShleHByZXNzLmpzb24oKSlcbiAgICAgICAgdGhpcy5zZXJ2ZXIudXNlKG1vcmdhbihgJHtjaGFsay5jeWFuKCdbOm1ldGhvZF0nKX0gUGF0aFsgOnVybCBdICR7J0NvZGVbICcgKyBjaGFsay5ib2xkKCc6c3RhdHVzIF0nKX0gVGltZVsgOnJlc3BvbnNlLXRpbWUgbXMgXSBMZW5ndGhbIDpyZXNbY29udGVudC1sZW5ndGhdIF1gKSlcbiAgICAgICAgdGhpcy5zZXJ2ZXIudXNlKGNvcnMoe1xuICAgICAgICAgICAgb3JpZ2luOiB0cnVlLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IGZhbHNlXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLnNlcnZlci51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIikpO1xuICAgICAgICBcblxuICAgICAgICAvLyBPdXQgcHJvY2Vzc1xuICAgICAgICBuZXcgb3V0UHJvY2VzcygpXG5cbiAgICAgICAgLy8gSGVscGVyc1xuICAgICAgICBuZXcgUmVwZWF0KGV4cGhicylcbiAgICAgICAgLy8gTWlkZGxlYXdhcmVcbiAgICAgICAgdGhpcy5zZXJ2ZXIuZW5naW5lKCcuaGJzJywgZXhwaGJzKHsgZXh0bmFtZTogJy5oYnMnIH0pKTtcbiAgICAgICAgdGhpcy5zZXJ2ZXIuc2V0KCd2aWV3IGVuZ2luZScsICcuaGJzJyk7XG5cbiAgICAgICAgLy8gTG9hZGVyc1xuICAgICAgICBhd2FpdCBUcmFpdERlc2NyaXB0aW9uLnRyYWl0TGlzdCgpXG5cbiAgICAgICAgLy8gVHJhbnNsYXRlIExvYWRlZFxuICAgICAgICBhd2FpdCBUcmFuc2xhdGVNb2R1bGUuaW5pdCgpXG5cbiAgICAgICAgLy8gUm91dGVyIGxvYWRlclxuICAgICAgICBjb25zdCBzdnRzID0gYXdhaXQgdGhpcy5nZXRTZXJ2YW50cygpO1xuICAgICAgICBuZXcgSG9tZSh0aGlzLnNlcnZlciwgc3Z0cylcbiAgICAgICAgbmV3IExpc3QodGhpcy5zZXJ2ZXIsIHN2dHMpXG5cbiAgICAgICAgZm9yIChjb25zdCBzdnQgb2Ygc3Z0cykge1xuICAgICAgICAgICAgY29uc3QgbnBzID0gYXdhaXQgUHJvbWlzZS5hbGwoc3Z0Lm5vYmxlUGhhbnRhc21zLm1hcChhc3luYyAobnApID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5vYmxlUGhhbnRhc21QYWdlKG5wLCA1LCA1LCBzdnQpLnJldHVybigpXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGNvbnN0IG5wc05hbWUgPSB0aGlzLlRyYW5zbGF0ZU5QKHN2dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2tpbGxzOiBTa2lsbFJldHVybltdID0gYXdhaXQgdGhpcy5sb2FkU2tpbGxzKHN2dClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3IFNlcnZhbnRzKHRoaXMuc2VydmVyLCBTdHJpbmcoc3Z0LmNvbGxlY3Rpb25ObyksIHN2dCwgc2tpbGxzLCBucHMsIG5wc05hbWUpXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFN0YXJ0IFNlcnZlclxuICAgICAgICBjb25zdCBzZXJ2aWRvciA9IGNyZWF0ZVNlcnZlcih0aGlzLnNlcnZlcikubGlzdGVuKHRoaXMuc2V0dGluZ3MucG9ydCwgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0ZW5lZC5Cb3hMaXN0ZW4oaXAuYWRkcmVzcygpKSlcbiAgICAgICAgfSlcbiAgICB9XG59Il19