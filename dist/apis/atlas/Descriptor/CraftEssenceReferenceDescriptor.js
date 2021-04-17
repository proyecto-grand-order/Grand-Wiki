"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = __importDefault(require("../Api"));
const CraftEssenceDescriptor_1 = __importDefault(require("./CraftEssenceDescriptor"));
// When is loaded this archive create Cache For Craft Essence
let cacheCE = new Map();
class CraftEssenceReferenceDescriptor {
    async getCE(id) {
        if (cacheCE.has(id)) {
            return cacheCE.get(id);
        }
        //@ts-ignore
        const ce = await Api_1.default.craftEssence(id);
        if (ce === undefined)
            return undefined;
        cacheCE.set(id, ce);
        return ce;
    }
    async export(id) {
        const craftEsence = await this.getCE(id);
        if (craftEsence === undefined) {
            return `[Craft Essence: ${id}]`;
        }
        //@ts-ignore
        return new CraftEssenceDescriptor_1.default().export(craftEsence);
    }
}
exports.default = CraftEssenceReferenceDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JhZnRFc3NlbmNlUmVmZXJlbmNlRGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGlzL2F0bGFzL0Rlc2NyaXB0b3IvQ3JhZnRFc3NlbmNlUmVmZXJlbmNlRGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGlEQUF5QjtBQUN6QixzRkFBOEQ7QUFFOUQsNkRBQTZEO0FBQzdELElBQUksT0FBTyxHQUEyQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBRS9ELE1BQXFCLCtCQUErQjtJQUVoRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVU7UUFDbEIsSUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUN6QjtRQUVELFlBQVk7UUFDWixNQUFNLEVBQUUsR0FBOEIsTUFBTSxhQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUcsRUFBRSxLQUFLLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNuQixPQUFPLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxXQUFXLEdBQThCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwRSxJQUFHLFdBQVcsS0FBSyxTQUFTLEVBQzVCO1lBQ0ksT0FBTyxtQkFBbUIsRUFBRSxHQUFHLENBQUE7U0FDbEM7UUFFRCxZQUFZO1FBQ1osT0FBTyxJQUFJLGdDQUFzQixFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNELENBQUM7Q0FDSjtBQTFCRCxrREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NyYWZ0RXNzZW5jZSwgUmVnaW9ufSBmcm9tIFwiQGF0bGFzYWNhZGVteS9hcGktY29ubmVjdG9yXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9BcGlcIjtcbmltcG9ydCBDcmFmdEVzc2VuY2VEZXNjcmlwdG9yIGZyb20gXCIuL0NyYWZ0RXNzZW5jZURlc2NyaXB0b3JcIjtcblxuLy8gV2hlbiBpcyBsb2FkZWQgdGhpcyBhcmNoaXZlIGNyZWF0ZSBDYWNoZSBGb3IgQ3JhZnQgRXNzZW5jZVxubGV0IGNhY2hlQ0U6IE1hcDxudW1iZXIsIENyYWZ0RXNzZW5jZS5DcmFmdEVzc2VuY2U+ID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYWZ0RXNzZW5jZVJlZmVyZW5jZURlc2NyaXB0b3Ige1xuXG4gICAgYXN5bmMgZ2V0Q0UoaWQ6IG51bWJlcik6IFByb21pc2U8Q3JhZnRFc3NlbmNlLkNyYWZ0RXNzZW5jZT4ge1xuICAgICAgICBpZihjYWNoZUNFLmhhcyhpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZUNFLmdldChpZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjZTogQ3JhZnRFc3NlbmNlLkNyYWZ0RXNzZW5jZSA9IGF3YWl0IEFwaS5jcmFmdEVzc2VuY2UoaWQpO1xuICAgICAgICBpZihjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIFxuICAgICAgICBjYWNoZUNFLnNldChpZCwgY2UpXG4gICAgICAgIHJldHVybiBjZVxuICAgIH1cblxuICAgIGFzeW5jIGV4cG9ydChpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNyYWZ0RXNlbmNlOiBDcmFmdEVzc2VuY2UuQ3JhZnRFc3NlbmNlID0gYXdhaXQgdGhpcy5nZXRDRShpZCk7XG4gICAgICAgIFxuICAgICAgICBpZihjcmFmdEVzZW5jZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gYFtDcmFmdCBFc3NlbmNlOiAke2lkfV1gXG4gICAgICAgIH1cblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5ldyBDcmFmdEVzc2VuY2VEZXNjcmlwdG9yKCkuZXhwb3J0KGNyYWZ0RXNlbmNlKVxuICAgIH1cbn0iXX0=