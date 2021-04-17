"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const handleActionSection_1 = require("../../../apis/atlas/Descriptor/Func/handleActionSection");
const handleTargetSection_1 = require("../../../apis/atlas/Descriptor/Func/handleTargetSection");
const NpTranslate_1 = __importDefault(require("../../../apis/atlas/Descriptor/NpTranslate"));
const SkillTranslate_1 = __importDefault(require("../../../apis/atlas/Descriptor/SkillTranslate"));
class TranslateModule {
    static async TranslateTargetDescription() {
        await handleTargetSection_1.targetDescriptionsTranslate().finally(() => {
            console.log(chalk_1.default.greenBright('[TRADUCCION] Traduccion de ' + chalk_1.default.bold('Target Descripticion') + ' Aplicada correctamente!'));
        });
    }
    static async TranslateFuncs() {
        await handleActionSection_1.TranslateFuncDescriptions().finally(() => {
            console.log(chalk_1.default.greenBright('[TRADUCCION] Traduccion de ' + chalk_1.default.bold('Funcs') + ' Aplicada correctamente!'));
        });
    }
    static async TranslateSvtSkills() {
        await SkillTranslate_1.default.getAllSkills().finally(() => {
            console.log(chalk_1.default.greenBright('[TRADUCCION] Traduccion de ' + chalk_1.default.bold('Skills') + ' Aplicada correctamente!'));
        });
    }
    static async TranslateSvtNps() {
        await NpTranslate_1.default.getAllNP().finally(() => {
            console.log(chalk_1.default.greenBright('[TRADUCCION] Traduccion de ' + chalk_1.default.bold('Noble Phantams') + ' Aplicada correctamente!'));
        });
    }
    static async init() {
        console.log(chalk_1.default.yellowBright('[TRADUCCION] Empezado traducir ' + chalk_1.default.bold('MODULOS') + '!'));
        await this.TranslateTargetDescription();
        await this.TranslateFuncs();
        await this.TranslateSvtSkills();
        await this.TranslateSvtNps();
        console.log(chalk_1.default.yellowBright('[TRADUCCION] Traduccion de los modulos terminado correctamente!'));
    }
}
exports.default = TranslateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmFudC50cmFuc2xhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmVyL3JvdXRlcy9zZXJ2YW50cy9zZXJ2YW50LnRyYW5zbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixpR0FBb0c7QUFDcEcsaUdBQXNHO0FBQ3RHLDZGQUFxRTtBQUNyRSxtR0FBMkU7QUFFM0UsTUFBcUIsZUFBZTtJQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQjtRQUNuQyxNQUFNLGlEQUEyQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNwSSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWM7UUFDdkIsTUFBTSwrQ0FBeUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsV0FBVyxDQUFDLDZCQUE2QixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ3JILENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1FBQzNCLE1BQU0sd0JBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUN0SCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWU7UUFDeEIsTUFBTSxxQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsV0FBVyxDQUFDLDZCQUE2QixHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDOUgsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRyxNQUFNLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFBO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDL0IsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsWUFBWSxDQUFDLGlFQUFpRSxDQUFDLENBQUMsQ0FBQTtJQUN0RyxDQUFDO0NBQ0o7QUFqQ0Qsa0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRnVuY0Rlc2NyaXB0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvRnVuYy9oYW5kbGVBY3Rpb25TZWN0aW9uXCI7XG5pbXBvcnQgeyB0YXJnZXREZXNjcmlwdGlvbnNUcmFuc2xhdGUgfSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0Z1bmMvaGFuZGxlVGFyZ2V0U2VjdGlvblwiO1xuaW1wb3J0IE5QVHJhbnNsYXRlIGZyb20gXCIuLi8uLi8uLi9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvTnBUcmFuc2xhdGVcIjtcbmltcG9ydCBTa2lsbFRyYW5zbGF0ZSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hdGxhcy9EZXNjcmlwdG9yL1NraWxsVHJhbnNsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0ZU1vZHVsZSB7XG4gICAgc3RhdGljIGFzeW5jIFRyYW5zbGF0ZVRhcmdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICBhd2FpdCB0YXJnZXREZXNjcmlwdGlvbnNUcmFuc2xhdGUoKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuQnJpZ2h0KCdbVFJBRFVDQ0lPTl0gVHJhZHVjY2lvbiBkZSAnICsgY2hhbGsuYm9sZCgnVGFyZ2V0IERlc2NyaXB0aWNpb24nKSArICcgQXBsaWNhZGEgY29ycmVjdGFtZW50ZSEnKSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBhc3luYyBUcmFuc2xhdGVGdW5jcygpIHtcbiAgICAgICAgYXdhaXQgVHJhbnNsYXRlRnVuY0Rlc2NyaXB0aW9ucygpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW5CcmlnaHQoJ1tUUkFEVUNDSU9OXSBUcmFkdWNjaW9uIGRlICcgKyBjaGFsay5ib2xkKCdGdW5jcycpICsgJyBBcGxpY2FkYSBjb3JyZWN0YW1lbnRlIScpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgVHJhbnNsYXRlU3Z0U2tpbGxzKCkge1xuICAgICAgICBhd2FpdCBTa2lsbFRyYW5zbGF0ZS5nZXRBbGxTa2lsbHMoKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuQnJpZ2h0KCdbVFJBRFVDQ0lPTl0gVHJhZHVjY2lvbiBkZSAnICsgY2hhbGsuYm9sZCgnU2tpbGxzJykgKyAnIEFwbGljYWRhIGNvcnJlY3RhbWVudGUhJykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBUcmFuc2xhdGVTdnROcHMoKSB7XG4gICAgICAgIGF3YWl0IE5QVHJhbnNsYXRlLmdldEFsbE5QKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbkJyaWdodCgnW1RSQURVQ0NJT05dIFRyYWR1Y2Npb24gZGUgJyArIGNoYWxrLmJvbGQoJ05vYmxlIFBoYW50YW1zJykgKyAnIEFwbGljYWRhIGNvcnJlY3RhbWVudGUhJykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay55ZWxsb3dCcmlnaHQoJ1tUUkFEVUNDSU9OXSBFbXBlemFkbyB0cmFkdWNpciAnICsgY2hhbGsuYm9sZCgnTU9EVUxPUycpICsgJyEnKSk7XG4gICAgICAgIGF3YWl0IHRoaXMuVHJhbnNsYXRlVGFyZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICBhd2FpdCB0aGlzLlRyYW5zbGF0ZUZ1bmNzKClcbiAgICAgICAgYXdhaXQgdGhpcy5UcmFuc2xhdGVTdnRTa2lsbHMoKVxuICAgICAgICBhd2FpdCB0aGlzLlRyYW5zbGF0ZVN2dE5wcygpXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnllbGxvd0JyaWdodCgnW1RSQURVQ0NJT05dIFRyYWR1Y2Npb24gZGUgbG9zIG1vZHVsb3MgdGVybWluYWRvIGNvcnJlY3RhbWVudGUhJykpXG4gICAgfVxufSJdfQ==