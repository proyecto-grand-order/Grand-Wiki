"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapNpTranslate = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.MapNpTranslate = new Map();
class NPTranslate {
    static async getAllNP() {
        const req = await node_fetch_1.default('https://script.google.com/macros/s/AKfycbxG-P3mYNyBcTatybUNl0D9y6m59PpnGxD_3vk5v6NKLCamA5I6aOW7Oa6deSJfDlfD/exec');
        const res = await req.json();
        const datos = res.data;
        for (const data of datos) {
            exports.MapNpTranslate.set(data['Np Id'], {
                name: data['Np Name'],
                detail: data['Np Detail']
            });
        }
    }
}
exports.default = NPTranslate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnBUcmFuc2xhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9EZXNjcmlwdG9yL05wVHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDREQUErQjtBQUVsQixRQUFBLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBRXhDLE1BQXFCLFdBQVc7SUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0JBQUssQ0FBQyxrSEFBa0gsQ0FBQyxDQUFBO1FBQzNJLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1FBRTVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdkIsS0FBSSxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDckIsc0JBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUIsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0NBRUo7QUFmRCw4QkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuXG5leHBvcnQgY29uc3QgTWFwTnBUcmFuc2xhdGUgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5QVHJhbnNsYXRlIHtcbiAgIHN0YXRpYyBhc3luYyBnZXRBbGxOUCgpIHtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieEctUDNtWU55QmNUYXR5YlVObDBEOXk2bTU5UHBuR3hEXzN2azV2Nk5LTENhbUE1STZhT1c3T2E2ZGVTSmZEbGZEL2V4ZWMnKVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpXG5cbiAgICAgICAgY29uc3QgZGF0b3MgPSByZXMuZGF0YTtcblxuICAgICAgICBmb3IoY29uc3QgZGF0YSBvZiBkYXRvcykge1xuICAgICAgICAgICAgTWFwTnBUcmFuc2xhdGUuc2V0KGRhdGFbJ05wIElkJ10sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhWydOcCBOYW1lJ10sXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBkYXRhWydOcCBEZXRhaWwnXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iXX0=