"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../helpers/service/index");
class List {
    constructor(app, servant) {
        this.app = app;
        this.router = express_1.Router();
        this.servants = servant;
        this.app.use(this.router);
        try {
            this.router.get("/servants", (req, res) => {
                res.render("lista.hbs", {
                    list: this.GetList(),
                    clases: Object.values(Object.fromEntries(index_1.ClassIconList))
                });
            });
            this.loaded('Router (Servants) cargado con exito! Path("/servants")');
        }
        catch (e) {
            this.loaded("Ha ocurrido un error! : " + e.message);
        }
    }
    GetList() {
        const servants = this.servants;
        return servants.map((servant) => {
            if (servant.extraAssets.commands.ascension === undefined) {
            }
            else {
                var head = {
                    className: servant.className,
                    img: `<img id="HeadTable" src="${servant.extraAssets.commands.ascension["1"]}" alt="${servant.className}">`
                };
            }
            return {
                id: servant.collectionNo,
                rarity: '★'.repeat(servant.rarity),
                name: servant.name,
                class: index_1.ClassIconList.get(servant.className),
                head
            };
        });
    }
    loaded(text) {
        console.log("[ROUTER]", text);
    }
}
exports.default = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL2xpc3QvbGlzdC5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE4QztBQUM5Qyx1REFBNEQ7QUFFNUQsTUFBcUIsSUFBSTtJQUt2QixZQUFZLEdBQWdCLEVBQUUsT0FBMEI7UUFDdEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsSUFBSTtZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNwQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFhLENBQUMsQ0FBQztpQkFDM0QsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDdkU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVPLE9BQU87UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBRTVCLElBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTthQUV4RDtpQkFBTTtnQkFDSCxJQUFJLElBQUksR0FBRztvQkFDUCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7b0JBQzVCLEdBQUcsRUFBRSw0QkFBNEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLE9BQU8sQ0FBQyxTQUFTLElBQUk7aUJBQzlHLENBQUE7YUFDSjtZQUVELE9BQU87Z0JBQ0gsRUFBRSxFQUFFLE9BQU8sQ0FBQyxZQUFZO2dCQUN4QixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ2xCLEtBQUssRUFBRSxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUMzQyxJQUFJO2FBQ1AsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLE1BQU0sQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQW5ERCx1QkFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2YW50IH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcbmltcG9ydCB7IFJvdXRlciwgQXBwbGljYXRpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgQ2xhc3NJY29uTGlzdCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3NlcnZpY2UvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gIHByaXZhdGUgYXBwOiBBcHBsaWNhdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBzZXJ2YW50czogU2VydmFudC5TZXJ2YW50W107XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHBsaWNhdGlvbiwgc2VydmFudDogU2VydmFudC5TZXJ2YW50W10pIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMuc2VydmFudHMgPSBzZXJ2YW50XG5cbiAgICB0aGlzLmFwcC51c2UodGhpcy5yb3V0ZXIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucm91dGVyLmdldChcIi9zZXJ2YW50c1wiLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnJlbmRlcihcImxpc3RhLmhic1wiLCB7XG4gICAgICAgICAgICBsaXN0OiB0aGlzLkdldExpc3QoKSxcbiAgICAgICAgICAgIGNsYXNlczogT2JqZWN0LnZhbHVlcyhPYmplY3QuZnJvbUVudHJpZXMoQ2xhc3NJY29uTGlzdCkpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRlZCgnUm91dGVyIChTZXJ2YW50cykgY2FyZ2FkbyBjb24gZXhpdG8hIFBhdGgoXCIvc2VydmFudHNcIiknKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxvYWRlZChcIkhhIG9jdXJyaWRvIHVuIGVycm9yISA6IFwiICsgZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIEdldExpc3QoKSB7XG4gICAgY29uc3Qgc2VydmFudHMgPSB0aGlzLnNlcnZhbnRzO1xuICAgIHJldHVybiBzZXJ2YW50cy5tYXAoKHNlcnZhbnQpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKHNlcnZhbnQuZXh0cmFBc3NldHMuY29tbWFuZHMuYXNjZW5zaW9uID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlYWQgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzZXJ2YW50LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBpbWc6IGA8aW1nIGlkPVwiSGVhZFRhYmxlXCIgc3JjPVwiJHtzZXJ2YW50LmV4dHJhQXNzZXRzLmNvbW1hbmRzLmFzY2Vuc2lvbltcIjFcIl19XCIgYWx0PVwiJHtzZXJ2YW50LmNsYXNzTmFtZX1cIj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBzZXJ2YW50LmNvbGxlY3Rpb25ObyxcbiAgICAgICAgICAgIHJhcml0eTogJ+KYhScucmVwZWF0KHNlcnZhbnQucmFyaXR5KSxcbiAgICAgICAgICAgIG5hbWU6IHNlcnZhbnQubmFtZSxcbiAgICAgICAgICAgIGNsYXNzOiBDbGFzc0ljb25MaXN0LmdldChzZXJ2YW50LmNsYXNzTmFtZSksXG4gICAgICAgICAgICBoZWFkXG4gICAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRlZCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcIltST1VURVJdXCIsIHRleHQpO1xuICB9XG59XG4iXX0=