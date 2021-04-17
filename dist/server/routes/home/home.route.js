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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helpers = __importStar(require("../../helpers/service/index"));
class Home {
    constructor(app, servant) {
        this.app = app;
        this.router = express_1.Router();
        this.app.use(this.router);
        var servants = new Map();
        servant.forEach((servant) => {
            servants.set(`[${servant.collectionNo}] - ${servant.name}`, `${helpers.ClassIconList.get(servant.className.toLowerCase()) || helpers.ClassIconList.get('beast')}`);
        });
        try {
            this.router.get('/', (req, res) => {
                res.render('home', {
                    datos: JSON.stringify(Object.fromEntries(servants))
                });
            });
            this.loaded('Router (Home) cargado con exito! Path("/")');
        }
        catch (e) {
            this.loaded("Ha ocurrido un error! : " + e.message);
        }
    }
    loaded(text) {
        console.log("[ROUTER]", text);
    }
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL2hvbWUvaG9tZS5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBOEM7QUFDOUMscUVBQXVEO0FBRXZELE1BQXFCLElBQUk7SUFJckIsWUFBWSxHQUFnQixFQUFFLE9BQTBCO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUE7UUFFdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3pCLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7UUFFeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUN6QyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3RLLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSTtZQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEQsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUE7U0FDNUQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3REO0lBQ0wsQ0FBQztJQUVPLE1BQU0sQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Q0FDSjtBQTlCRCx1QkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2YW50IH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCB7IFJvdXRlciwgQXBwbGljYXRpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzL3NlcnZpY2UvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcbiAgICBwcml2YXRlIGFwcDogQXBwbGljYXRpb247XG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwbGljYXRpb24sIHNlcnZhbnQ6IFNlcnZhbnQuU2VydmFudFtdKSB7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwXG4gICAgICAgIHRoaXMucm91dGVyID0gUm91dGVyKClcblxuICAgICAgICB0aGlzLmFwcC51c2UodGhpcy5yb3V0ZXIpXG4gICAgICAgIHZhciBzZXJ2YW50cyA9IG5ldyBNYXAoKVxuICAgICAgICBcbiAgICAgICAgc2VydmFudC5mb3JFYWNoKChzZXJ2YW50OiBTZXJ2YW50LlNlcnZhbnQpID0+IHtcbiAgICAgICAgICAgIHNlcnZhbnRzLnNldChgWyR7c2VydmFudC5jb2xsZWN0aW9uTm99XSAtICR7c2VydmFudC5uYW1lfWAsIGAke2hlbHBlcnMuQ2xhc3NJY29uTGlzdC5nZXQoc2VydmFudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKSkgfHwgaGVscGVycy5DbGFzc0ljb25MaXN0LmdldCgnYmVhc3QnKX1gKSAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLnJlbmRlcignaG9tZScsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0b3M6IEpTT04uc3RyaW5naWZ5KE9iamVjdC5mcm9tRW50cmllcyhzZXJ2YW50cykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmxvYWRlZCgnUm91dGVyIChIb21lKSBjYXJnYWRvIGNvbiBleGl0byEgUGF0aChcIi9cIiknKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZChcIkhhIG9jdXJyaWRvIHVuIGVycm9yISA6IFwiICsgZS5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkZWQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1JPVVRFUl1cIiwgdGV4dClcbiAgICB9XG59Il19