export default class QuestDescriptor {
    protected text: string;
    protected questId: number;
    protected questPhase: number;

    public constructor(text: string, questId: number, questPhase: number) {
        this.text = text;
        this.questId = questId;
        this.questPhase = questPhase;
    }

    Quest() {
        if(this.text) {
            return `${this.text}`
        } else {
            const prefix = Math.floor(this.questId / 1000000);
            let type = "";

            switch (prefix) {
                case 91:
                    type = 'Interlude';
                    break;
                case 94:
                    type = 'Strengthening';
                    break;
                default:
                    type = 'Main';
                    break;
            }

            return `${type} Quest`;
        }
    }
}