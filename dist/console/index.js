"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boxen_1 = __importDefault(require("boxen"));
const chalk_1 = __importDefault(require("chalk"));
const common_tags_1 = require("common-tags");
const settings_1 = require("../server/settings");
class listened {
    static BoxListen(str) {
        return boxen_1.default(common_tags_1.stripIndents `
        ${chalk_1.default.underline.yellowBright('Proyecto Grand Order - Wiki')}
        Servidor iniciado en el puerto (${chalk_1.default.bold(settings_1.port)}) y alojado en (${chalk_1.default.bold(str)})
        Si quieres cancelar el servidor en local por favor presione ${chalk_1.default.bold('CTRL + C')}
        ${chalk_1.default.redBright(chalk_1.default.bold('Recuerda!') + ' puedes ver los los de la carga mas arriba.')}
        `, { padding: 1, align: "center" });
    }
}
exports.default = listened;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc29sZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixrREFBMEI7QUFDMUIsNkNBQTJDO0FBRTNDLGlEQUEwQztBQUUxQyxNQUFxQixRQUFRO0lBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBVztRQUV4QixPQUFPLGVBQUssQ0FBQywwQkFBWSxDQUFBO1VBQ3ZCLGVBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDOzBDQUMzQixlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUksQ0FBQyxtQkFBbUIsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7c0VBQ3RCLGVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1VBQ2xGLGVBQUssQ0FBQyxTQUFTLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQztTQUN6RixFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUVyQyxDQUFDO0NBQ0o7QUFYRCwyQkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib3hlbiBmcm9tIFwiYm94ZW5cIjtcbmltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcbmltcG9ydCB7IHN0cmlwSW5kZW50cyB9IGZyb20gXCJjb21tb24tdGFnc1wiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcG9ydCB9IGZyb20gXCIuLi9zZXJ2ZXIvc2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdGVuZWQge1xuICAgIHN0YXRpYyBCb3hMaXN0ZW4oc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3hlbihzdHJpcEluZGVudHNgXG4gICAgICAgICR7Y2hhbGsudW5kZXJsaW5lLnllbGxvd0JyaWdodCgnUHJveWVjdG8gR3JhbmQgT3JkZXIgLSBXaWtpJyl9XG4gICAgICAgIFNlcnZpZG9yIGluaWNpYWRvIGVuIGVsIHB1ZXJ0byAoJHtjaGFsay5ib2xkKHBvcnQpfSkgeSBhbG9qYWRvIGVuICgke2NoYWxrLmJvbGQoc3RyKX0pXG4gICAgICAgIFNpIHF1aWVyZXMgY2FuY2VsYXIgZWwgc2Vydmlkb3IgZW4gbG9jYWwgcG9yIGZhdm9yIHByZXNpb25lICR7Y2hhbGsuYm9sZCgnQ1RSTCArIEMnKX1cbiAgICAgICAgJHtjaGFsay5yZWRCcmlnaHQoY2hhbGsuYm9sZCgnUmVjdWVyZGEhJykgKyAnIHB1ZWRlcyB2ZXIgbG9zIGxvcyBkZSBsYSBjYXJnYSBtYXMgYXJyaWJhLicpfVxuICAgICAgICBgLCB7cGFkZGluZzogMSwgYWxpZ246IFwiY2VudGVyXCJ9KVxuXG4gICAgfVxufSJdfQ==