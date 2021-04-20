import boxen from "boxen";
import chalk from "chalk";
import { stripIndents } from "common-tags";
import { Application } from "express";
import { port } from "../server/settings";

export default class listened {
    static BoxListen(str: string) {
        
        return boxen(stripIndents`
        ${chalk.underline.yellowBright('Proyecto Grand Order - Wiki')}
        Servidor iniciado en el puerto (${chalk.bold(port)}) y alojado en (${chalk.bold(str)})
        Si quieres cancelar el servidor en local por favor presione ${chalk.bold('CTRL + C')}
        ${chalk.redBright(chalk.bold('Recuerda!') + ' puedes ver los los de la carga mas arriba.')}
        `, {padding: 1, align: "center"})

    }
}