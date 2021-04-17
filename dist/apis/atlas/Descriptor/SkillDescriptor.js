"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillDescriptor {
    static renderAsString(skill) {
        const name = skill.name ? skill.name : `Skill: ${skill.id}`;
        return `[${name}]`;
    }
    replaces(str) {
        var str = str
            .replace(/恐怖/g, 'Stun');
        // Replace Chance
        return str;
    }
    export(skill) {
        return `${skill.icon ? `<img src="${skill.icon}" style="height: 30px; vertical-align: middle;">` : ' '} [${skill.name ? this.replaces(skill.name) : `Skill: ${skill.id}`}]`;
    }
}
exports.default = SkillDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxEZXNjcmlwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvYXRsYXMvRGVzY3JpcHRvci9Ta2lsbERlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFxQixlQUFlO0lBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBa0I7UUFDcEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFNUQsT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBVztRQUN4QixJQUFJLEdBQUcsR0FBRyxHQUFHO2FBQ1osT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN2QixpQkFBaUI7UUFDakIsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBQ3JCLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEtBQUssQ0FBQyxJQUFJLGtEQUFrRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDaEwsQ0FBQztDQUNKO0FBakJELGtDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNraWxsIH0gZnJvbSBcIkBpc2FhY3ptL2FwaS1jb25uZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxEZXNjcmlwdG9yIHtcbiAgICBzdGF0aWMgcmVuZGVyQXNTdHJpbmcoc2tpbGw6IFNraWxsLlNraWxsKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHNraWxsLm5hbWUgPyBza2lsbC5uYW1lIDogYFNraWxsOiAke3NraWxsLmlkfWA7XG5cbiAgICAgICAgcmV0dXJuIGBbJHtuYW1lfV1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVwbGFjZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgc3RyID0gc3RyXG4gICAgICAgIC5yZXBsYWNlKC/mgZDmgJYvZywgJ1N0dW4nKVxuICAgICAgICAvLyBSZXBsYWNlIENoYW5jZVxuICAgICAgICByZXR1cm4gc3RyXG4gICAgfVxuXG4gICAgZXhwb3J0KHNraWxsOiBTa2lsbC5Ta2lsbCkge1xuICAgICAgICByZXR1cm4gYCR7c2tpbGwuaWNvbiA/IGA8aW1nIHNyYz1cIiR7c2tpbGwuaWNvbn1cIiBzdHlsZT1cImhlaWdodDogMzBweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5gIDogJyAnfSBbJHtza2lsbC5uYW1lID8gdGhpcy5yZXBsYWNlcyhza2lsbC5uYW1lKSA6IGBTa2lsbDogJHtza2lsbC5pZH1gfV1gO1xuICAgIH1cbn0iXX0=