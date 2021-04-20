import chalk from "chalk";
import { TranslateFuncDescriptions } from "../../../apis/atlas/Descriptor/Func/handleActionSection";
import { targetDescriptionsTranslate } from "../../../apis/atlas/Descriptor/Func/handleTargetSection";
import NPTranslate from "../../../apis/atlas/Descriptor/NpTranslate";
import SkillTranslate from "../../../apis/atlas/Descriptor/SkillTranslate";

export default class TranslateModule {
    static async TranslateTargetDescription() {
        await targetDescriptionsTranslate().finally(() => {
            console.log(chalk.greenBright('[TRADUCCION] Traduccion de ' + chalk.bold('Target Descripticion') + ' Aplicada correctamente!'));
        })
    }
    
    static async TranslateFuncs() {
        await TranslateFuncDescriptions().finally(() => {
            console.log(chalk.greenBright('[TRADUCCION] Traduccion de ' + chalk.bold('Funcs') + ' Aplicada correctamente!'));
        })
    }

    static async TranslateSvtSkills() {
        await SkillTranslate.getAllSkills().finally(() => {
            console.log(chalk.greenBright('[TRADUCCION] Traduccion de ' + chalk.bold('Skills') + ' Aplicada correctamente!'));
        })
    }

    static async TranslateSvtNps() {
        await NPTranslate.getAllNP().finally(() => {
            console.log(chalk.greenBright('[TRADUCCION] Traduccion de ' + chalk.bold('Noble Phantams') + ' Aplicada correctamente!'));
        })
    }

    static async init() {
        console.log(chalk.yellowBright('[TRADUCCION] Empezado traducir ' + chalk.bold('MODULOS') + '!'));
        await this.TranslateTargetDescription()
        await this.TranslateFuncs()
        await this.TranslateSvtSkills()
        await this.TranslateSvtNps()
        console.log(chalk.yellowBright('[TRADUCCION] Traduccion de los modulos terminado correctamente!'))
    }
}