"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helper = __importStar(require("../../helpers/service/index"));
const chalk_1 = __importDefault(require("chalk"));
const date_and_time_1 = __importDefault(require("date-and-time"));
const now = new Date();
class Servants {
    constructor(app, name, servant, skill, nps, npsName) {
        this.app = app;
        this.router = express_1.Router();
        this.app.use(this.router);
        var ascensiones = [...Object.values(servant.extraAssets.charaGraph.ascension)];
        const decks = servant.cards.map(text => {
            return {
                card: text.toLowerCase(),
                face: servant.extraAssets.commands.ascension ? servant.extraAssets.commands.ascension["3"] : "https://i.imgur.com/M2xRDrt.png"
            };
        });
        if (servant.extraAssets.charaGraph.costume) {
            ascensiones.push(...Object.values(servant.extraAssets.charaGraph.costume));
        }
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
                });
            });
            this.loaded(`Nueva ruta creada en ` + chalk_1.default.greenBright('/servant/' + name) + ' servant ' + chalk_1.default.green.bold(servant.name) + ' agregado!');
        }
        catch (e) {
            this.loaded("Ha ocurrido un error! : " + e.message);
        }
    }
    loaded(text) {
        console.log(chalk_1.default.yellowBright(date_and_time_1.default.format(now, 'YYYY/MM/DD') + ': ') + chalk_1.default.cyan("[ROUTER]"), text);
    }
}
exports.default = Servants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmFudC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlcnZhbnRzL3NlcnZhbnQucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQThDO0FBRTlDLG9FQUFzRDtBQUN0RCxrREFBMEI7QUFDMUIsa0VBQWlDO0FBSWpDLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdkIsTUFBcUIsUUFBUTtJQUl6QixZQUFZLEdBQWdCLEVBQUUsSUFBWSxFQUFFLE9BQXdCLEVBQUUsS0FBb0IsRUFBRSxHQUFhLEVBQUUsT0FBaUI7UUFDeEgsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQTtRQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFekIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQyxPQUFPO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlDQUFpQzthQUNqSSxDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQzdFO1FBRUQsSUFBSTtZQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLFNBQVMsRUFBRSxXQUFXO29CQUN0QixPQUFPLEVBQUUsT0FBTztvQkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BFLEtBQUssRUFBRTt3QkFDSCxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO3dCQUM1RCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7d0JBQ0QsSUFBSSxFQUFFOzRCQUNGLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVTs0QkFDMUIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7eUJBQzVDO3FCQUNKO29CQUNELE1BQU0sRUFBRSxLQUFLO29CQUNiLEdBQUcsRUFBRSxHQUFHO29CQUNSLE9BQU8sRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsV0FBVyxHQUFHLGVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQTtTQUU3STtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdEQ7SUFDTCxDQUFDO0lBRU8sTUFBTSxDQUFDLElBQVk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsWUFBWSxDQUFDLHVCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3pHLENBQUM7Q0FDSjtBQXZERCwyQkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIEFwcGxpY2F0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IE5vYmxlUGhhbnRhc20sIFNlcnZhbnQgfSBmcm9tIFwiQGlzYWFjem0vYXBpLWNvbm5lY3RvclwiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvc2VydmljZS9pbmRleCc7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgZGF0ZSBmcm9tICdkYXRlLWFuZC10aW1lJztcbmltcG9ydCB7U2tpbGxSZXR1cm59IGZyb20gXCIuL3NlcnZhbnQuY29udHJvbGxlclwiO1xuaW1wb3J0IE5vYmxlUGhhbnRhc21QYWdlIGZyb20gXCIuLi8uLi8uLi9hcGlzL2F0bGFzL1BhZ2VzL05vYmxlUGhhbnRhc21cIjtcblxuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZhbnRzIHtcbiAgICBwcml2YXRlIGFwcDogQXBwbGljYXRpb247XG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwbGljYXRpb24sIG5hbWU6IHN0cmluZywgc2VydmFudDogU2VydmFudC5TZXJ2YW50LCBza2lsbDogU2tpbGxSZXR1cm5bXSwgbnBzOiBzdHJpbmdbXSwgbnBzTmFtZTogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKVxuXG4gICAgICAgIHRoaXMuYXBwLnVzZSh0aGlzLnJvdXRlcilcblxuICAgICAgICB2YXIgYXNjZW5zaW9uZXMgPSBbLi4uT2JqZWN0LnZhbHVlcyhzZXJ2YW50LmV4dHJhQXNzZXRzLmNoYXJhR3JhcGguYXNjZW5zaW9uKV07XG4gICAgICAgIGNvbnN0IGRlY2tzID0gc2VydmFudC5jYXJkcy5tYXAodGV4dCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmQ6IHRleHQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBmYWNlOiBzZXJ2YW50LmV4dHJhQXNzZXRzLmNvbW1hbmRzLmFzY2Vuc2lvbiA/IHNlcnZhbnQuZXh0cmFBc3NldHMuY29tbWFuZHMuYXNjZW5zaW9uW1wiM1wiXSA6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9NMnhSRHJ0LnBuZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHNlcnZhbnQuZXh0cmFBc3NldHMuY2hhcmFHcmFwaC5jb3N0dW1lKSB7XG4gICAgICAgICAgICBhc2NlbnNpb25lcy5wdXNoKC4uLk9iamVjdC52YWx1ZXMoc2VydmFudC5leHRyYUFzc2V0cy5jaGFyYUdyYXBoLmNvc3R1bWUpKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIuZ2V0KGAvc2VydmFudC8ke25hbWV9YCwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLnJlbmRlcignc2VydmFudCcsIHtcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5zaW9uOiBhc2NlbnNpb25lcyxcbiAgICAgICAgICAgICAgICAgICAgc2VydmFudDogc2VydmFudCxcbiAgICAgICAgICAgICAgICAgICAgcmFyaXR5OiAn4piFJy5yZXBlYXQoc2VydmFudC5yYXJpdHkpLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0ljb246IGhlbHBlci5DbGFzc0ljb25MaXN0LmdldChzZXJ2YW50LmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYXRoQ2hhbmNlOiBoZWxwZXIuYXNQZXJjZW50KHNlcnZhbnQuaW5zdGFudERlYXRoQ2hhbmNlLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZDogZGVja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Rhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogc2VydmFudC5zdGFyQWJzb3JiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbjogaGVscGVyLmFzUGVyY2VudChzZXJ2YW50LnN0YXJHZW4sIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogc2tpbGwsXG4gICAgICAgICAgICAgICAgICAgIG5wczogbnBzLFxuICAgICAgICAgICAgICAgICAgICBucHNOYW1lOiBucHNOYW1lXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMubG9hZGVkKGBOdWV2YSBydXRhIGNyZWFkYSBlbiBgICsgY2hhbGsuZ3JlZW5CcmlnaHQoJy9zZXJ2YW50LycgKyBuYW1lKSArICcgc2VydmFudCAnICsgY2hhbGsuZ3JlZW4uYm9sZChzZXJ2YW50Lm5hbWUpICsgJyBhZ3JlZ2FkbyEnKVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkKFwiSGEgb2N1cnJpZG8gdW4gZXJyb3IhIDogXCIgKyBlLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRlZCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsueWVsbG93QnJpZ2h0KGRhdGUuZm9ybWF0KG5vdywgJ1lZWVkvTU0vREQnKSArICc6ICcpICsgY2hhbGsuY3lhbihcIltST1VURVJdXCIpLCB0ZXh0KVxuICAgIH1cbn0iXX0=