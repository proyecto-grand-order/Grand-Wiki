import chalk from 'chalk';
import childProcess from 'child_process';

export default class outProcess {
    constructor() {
        process.on('SIGINT', function() {
            console.clear()
            console.log(chalk.redBright('[SERVIDOR]') + ' se anulo el proceso del servidor ' + chalk.bold('(CTRL + C)'));
            process.exit();
        });
    }
}