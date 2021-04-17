"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapSkillTranslated = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.MapSkillTranslated = new Map();
class SkillTranslate {
    static async getAllSkills() {
        const req = await node_fetch_1.default('https://script.google.com/macros/s/AKfycbw7b6uT64xgGM5koIS2jaqhrB-Ahj2c-sDQKvEVv4lfi6AxAUqNekDfPw7Z03GFGlfiHQ/exec');
        const res = await req.json();
        const datos = res.data;
        for (const data of datos) {
            exports.MapSkillTranslated.set(data.Id + data['Skills ID'], {
                name: data['Skills NAMES'],
                detail: data['Skills DETAILS'],
                servant: {
                    name: data.Name,
                    id: data.Id
                }
            });
        }
    }
}
exports.default = SkillTranslate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxUcmFuc2xhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9EZXNjcmlwdG9yL1NraWxsVHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDREQUErQjtBQUVsQixRQUFBLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFFNUMsTUFBcUIsY0FBYztJQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVk7UUFDcEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUE7UUFDN0ksTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFNUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUV2QixLQUFJLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUNyQiwwQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5QixPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtpQkFDZDthQUNKLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztDQUVKO0FBbkJELGlDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuXG5leHBvcnQgY29uc3QgTWFwU2tpbGxUcmFuc2xhdGVkID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbFRyYW5zbGF0ZSB7XG4gICBzdGF0aWMgYXN5bmMgZ2V0QWxsU2tpbGxzKCkge1xuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3N2I2dVQ2NHhnR001a29JUzJqYXFockItQWhqMmMtc0RRS3ZFVnY0bGZpNkF4QVVxTmVrRGZQdzdaMDNHRkdsZmlIUS9leGVjJylcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKVxuXG4gICAgICAgIGNvbnN0IGRhdG9zID0gcmVzLmRhdGE7XG5cbiAgICAgICAgZm9yKGNvbnN0IGRhdGEgb2YgZGF0b3MpIHtcbiAgICAgICAgICAgIE1hcFNraWxsVHJhbnNsYXRlZC5zZXQoZGF0YS5JZCtkYXRhWydTa2lsbHMgSUQnXSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbJ1NraWxscyBOQU1FUyddLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZGF0YVsnU2tpbGxzIERFVEFJTFMnXSxcbiAgICAgICAgICAgICAgICBzZXJ2YW50OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSJdfQ==