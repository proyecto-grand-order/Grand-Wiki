export default class Repeat {
    protected hbs: ExpressHandlebars;

    constructor(hbs) {
        this.hbs = hbs

        this.hbs.create({
            helpers: {
                repeat: function(value: string, n: number) {
                    var text = value.repeat(n)
                    return text
                }
            }
        })
        
    }
}