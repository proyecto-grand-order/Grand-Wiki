"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class outProcess {
    constructor() {
        process.on('SIGINT', function () {
            console.clear();
            console.log(chalk_1.default.redBright('[SERVIDOR]') + ' se anulo el proceso del servidor ' + chalk_1.default.bold('(CTRL + C)'));
            process.exit();
        });
    }
}
exports.default = outProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNvbGUvb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRzFCLE1BQXFCLFVBQVU7SUFDM0I7UUFDSSxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsb0NBQW9DLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVJELDZCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG91dFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBwcm9jZXNzLm9uKCdTSUdJTlQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkQnJpZ2h0KCdbU0VSVklET1JdJykgKyAnIHNlIGFudWxvIGVsIHByb2Nlc28gZGVsIHNlcnZpZG9yICcgKyBjaGFsay5ib2xkKCcoQ1RSTCArIEMpJykpO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=