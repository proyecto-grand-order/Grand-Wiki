"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repeat {
    constructor(hbs) {
        this.hbs = hbs;
        this.hbs.create({
            helpers: {
                repeat: function (value, n) {
                    var text = value.repeat(n);
                    return text;
                }
            }
        });
    }
}
exports.default = Repeat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZlci9oZWxwZXJzL3JlcGVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLE1BQU07SUFHdkIsWUFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFFZCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNaLE9BQU8sRUFBRTtnQkFDTCxNQUFNLEVBQUUsVUFBUyxLQUFhLEVBQUUsQ0FBUztvQkFDckMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDMUIsT0FBTyxJQUFJLENBQUE7Z0JBQ2YsQ0FBQzthQUNKO1NBQ0osQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUNKO0FBaEJELHlCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdCB7XG4gICAgcHJvdGVjdGVkIGhiczogRXhwcmVzc0hhbmRsZWJhcnM7XG5cbiAgICBjb25zdHJ1Y3RvcihoYnMpIHtcbiAgICAgICAgdGhpcy5oYnMgPSBoYnNcblxuICAgICAgICB0aGlzLmhicy5jcmVhdGUoe1xuICAgICAgICAgICAgaGVscGVyczoge1xuICAgICAgICAgICAgICAgIHJlcGVhdDogZnVuY3Rpb24odmFsdWU6IHN0cmluZywgbjogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gdmFsdWUucmVwZWF0KG4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59Il19