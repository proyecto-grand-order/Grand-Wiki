"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_descriptor_1 = require("@isaaczm/api-descriptor");
const CardDescription_1 = __importDefault(require("./CardDescription"));
const SkillDescriptor_1 = __importDefault(require("./SkillDescriptor"));
const SkillReferenceDescriptor_1 = __importDefault(require("./SkillReferenceDescriptor"));
const TraitDescription_1 = __importDefault(require("./TraitDescription"));
class Description {
    static renderParticle(partial) {
        return partial.value;
    }
    static renderReferenceAsString(partial) {
        switch (partial.referenceType) {
            case api_descriptor_1.ReferenceType.SKILL:
                if (typeof partial.value === "number") {
                    return SkillReferenceDescriptor_1.default.renderAsString(partial.value);
                }
                else {
                    return SkillDescriptor_1.default.renderAsString(partial.value);
                }
            case api_descriptor_1.ReferenceType.TRAIT:
                return TraitDescription_1.default.renderAsString(partial.value);
            case api_descriptor_1.ReferenceType.CARD:
                return CardDescription_1.default.renderAsString(partial.value);
            default:
                return partial.value.toString();
        }
    }
    static renderText(partial) {
        return partial.value;
    }
    static renderValue(partial) {
        if (partial.valueType === api_descriptor_1.ValueType.PERCENT) {
            return partial.value.toString() + '%';
        }
        return partial.value.toString();
    }
    static renderAsString(descriptor) {
        const partials = descriptor.partials(), fragments = [];
        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];
            switch (partial.type) {
                case api_descriptor_1.PartialType.PARTICLE:
                    fragments.push(Description.renderParticle(partial));
                    break;
                case api_descriptor_1.PartialType.REFERENCE:
                    fragments.push(Description.renderReferenceAsString(partial));
                    break;
                case api_descriptor_1.PartialType.TEXT:
                    fragments.push(Description.renderText(partial));
                    break;
                case api_descriptor_1.PartialType.VALUE:
                    fragments.push(Description.renderValue(partial));
                    break;
                default:
                    fragments.push(partial.value.toString());
            }
        }
        return fragments.join('');
    }
    renderReference(partial) {
        switch (partial.referenceType) {
            case api_descriptor_1.ReferenceType.CARD:
                return new CardDescription_1.default().export(partial.value);
            case api_descriptor_1.ReferenceType.SKILL:
                if (typeof partial.value === "number") {
                    return new SkillReferenceDescriptor_1.default().export(partial.value);
                }
                else {
                    return new SkillDescriptor_1.default().export(partial.value);
                }
            case api_descriptor_1.ReferenceType.TRAIT:
                return new TraitDescription_1.default(partial.value).export();
            default:
                return partial.value.toString();
        }
    }
    export(descriptor) {
        const partials = descriptor.partials();
        const fragments = [];
        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];
            if (partial.type === api_descriptor_1.PartialType.PARTICLE) {
                fragments.push(Description.renderParticle(partial));
            }
            else if (partial.type === api_descriptor_1.PartialType.REFERENCE) {
                fragments.push(this.renderReference(partial));
            }
            else if (partial.type === api_descriptor_1.PartialType.TEXT) {
                fragments.push(Description.renderText(partial));
            }
            else if (partial.type === api_descriptor_1.PartialType.VALUE) {
                fragments.push(Description.renderValue(partial));
            }
            else {
                fragments.push(partial.value.toString());
            }
        }
        return fragments;
    }
}
exports.default = Description;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpcy9hdGxhcy9EZXNjcmlwdG9yL0Rlc2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBU2lDO0FBQ2pDLHdFQUFnRDtBQUNoRCx3RUFBZ0Q7QUFDaEQsMEZBQWtFO0FBQ2xFLDBFQUFrRDtBQUdsRCxNQUFxQixXQUFXO0lBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBd0I7UUFDbEQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxNQUFNLENBQUMsdUJBQXVCLENBQUMsT0FBeUI7UUFDNUQsUUFBUSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzNCLEtBQUssOEJBQWEsQ0FBQyxLQUFLO2dCQUNwQixJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQ25DLE9BQU8sa0NBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDaEU7cUJBQU07b0JBQ0gsT0FBTyx5QkFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3ZEO1lBQ0wsS0FBSyw4QkFBYSxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sMEJBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN6RCxLQUFLLDhCQUFhLENBQUMsSUFBSTtnQkFDbkIsT0FBTyx5QkFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDeEQ7Z0JBQ0ksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZDO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBb0I7UUFDMUMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQXFCO1FBQzVDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSywwQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUN6QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQXNCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFDbEMsU0FBUyxHQUFhLEVBQUUsQ0FBQztRQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLDRCQUFXLENBQUMsUUFBUTtvQkFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3BELE1BQU07Z0JBQ1YsS0FBSyw0QkFBVyxDQUFDLFNBQVM7b0JBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLE9BQTJCLENBQUMsQ0FBQyxDQUFDO29CQUNqRixNQUFNO2dCQUNWLEtBQUssNEJBQVcsQ0FBQyxJQUFJO29CQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDVixLQUFLLDRCQUFXLENBQUMsS0FBSztvQkFDbEIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQXVCLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxNQUFNO2dCQUNWO29CQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUdPLGVBQWUsQ0FBQyxPQUF5QjtRQUU3QyxRQUFRLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDM0IsS0FBSyw4QkFBYSxDQUFDLElBQUk7Z0JBQ25CLE9BQU8sSUFBSSx5QkFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN0RCxLQUFLLDhCQUFhLENBQUMsS0FBSztnQkFDcEIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO29CQUNuQyxPQUFPLElBQUksa0NBQXdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2lCQUM5RDtxQkFBTTtvQkFDSCxPQUFPLElBQUkseUJBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3JEO1lBQ0wsS0FBSyw4QkFBYSxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sSUFBSSwwQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDdkQ7Z0JBQ0ksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBRXZDO0lBRUwsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFzQjtRQUV6QixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1QixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssNEJBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyw0QkFBVyxDQUFDLFNBQVMsRUFBRTtnQkFDL0MsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQTJCLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyw0QkFBVyxDQUFDLElBQUksRUFBRTtnQkFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkQ7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLDRCQUFXLENBQUMsS0FBSyxFQUFFO2dCQUMzQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBdUIsQ0FBQyxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELE9BQU8sU0FBUyxDQUFBO0lBRXBCLENBQUM7Q0FDSjtBQTVHRCw4QkE0R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERlc2NyaXB0b3IsXG4gICAgUGFydGlhbFR5cGUsXG4gICAgUGFydGljbGVQYXJ0aWFsLFxuICAgIFJlZmVyZW5jZVBhcnRpYWwsXG4gICAgUmVmZXJlbmNlVHlwZSxcbiAgICBUZXh0UGFydGlhbCxcbiAgICBWYWx1ZVBhcnRpYWwsXG4gICAgVmFsdWVUeXBlXG59IGZyb20gXCJAaXNhYWN6bS9hcGktZGVzY3JpcHRvclwiO1xuaW1wb3J0IENhcmREZXNjcmlwdGlvbiBmcm9tIFwiLi9DYXJkRGVzY3JpcHRpb25cIjtcbmltcG9ydCBTa2lsbERlc2NyaXB0b3IgZnJvbSBcIi4vU2tpbGxEZXNjcmlwdG9yXCI7XG5pbXBvcnQgU2tpbGxSZWZlcmVuY2VEZXNjcmlwdG9yIGZyb20gXCIuL1NraWxsUmVmZXJlbmNlRGVzY3JpcHRvclwiO1xuaW1wb3J0IFRyYWl0RGVzY3JpcHRpb24gZnJvbSBcIi4vVHJhaXREZXNjcmlwdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2NyaXB0aW9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyByZW5kZXJQYXJ0aWNsZShwYXJ0aWFsOiBQYXJ0aWNsZVBhcnRpYWwpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gcGFydGlhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZW5kZXJSZWZlcmVuY2VBc1N0cmluZyhwYXJ0aWFsOiBSZWZlcmVuY2VQYXJ0aWFsKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChwYXJ0aWFsLnJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUmVmZXJlbmNlVHlwZS5TS0lMTDpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnRpYWwudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNraWxsUmVmZXJlbmNlRGVzY3JpcHRvci5yZW5kZXJBc1N0cmluZyhwYXJ0aWFsLnZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTa2lsbERlc2NyaXB0b3IucmVuZGVyQXNTdHJpbmcocGFydGlhbC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFJlZmVyZW5jZVR5cGUuVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRyYWl0RGVzY3JpcHRpb24ucmVuZGVyQXNTdHJpbmcocGFydGlhbC52YWx1ZSlcbiAgICAgICAgICAgIGNhc2UgUmVmZXJlbmNlVHlwZS5DQVJEOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJkRGVzY3JpcHRpb24ucmVuZGVyQXNTdHJpbmcocGFydGlhbC52YWx1ZSlcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRpYWwudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVuZGVyVGV4dChwYXJ0aWFsOiBUZXh0UGFydGlhbCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBwYXJ0aWFsLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlbmRlclZhbHVlKHBhcnRpYWw6IFZhbHVlUGFydGlhbCk6IHN0cmluZyB7XG4gICAgICAgIGlmIChwYXJ0aWFsLnZhbHVlVHlwZSA9PT0gVmFsdWVUeXBlLlBFUkNFTlQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aWFsLnZhbHVlLnRvU3RyaW5nKCkgKyAnJSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFydGlhbC52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJBc1N0cmluZyhkZXNjcmlwdG9yOiBEZXNjcmlwdG9yKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGFydGlhbHMgPSBkZXNjcmlwdG9yLnBhcnRpYWxzKCksXG4gICAgICAgICAgICBmcmFnbWVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGFydGlhbCA9IHBhcnRpYWxzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHBhcnRpYWwudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUGFydGlhbFR5cGUuUEFSVElDTEU6XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKERlc2NyaXB0aW9uLnJlbmRlclBhcnRpY2xlKHBhcnRpYWwpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQYXJ0aWFsVHlwZS5SRUZFUkVOQ0U6XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKERlc2NyaXB0aW9uLnJlbmRlclJlZmVyZW5jZUFzU3RyaW5nKHBhcnRpYWwgYXMgUmVmZXJlbmNlUGFydGlhbCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBhcnRpYWxUeXBlLlRFWFQ6XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKERlc2NyaXB0aW9uLnJlbmRlclRleHQocGFydGlhbCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBhcnRpYWxUeXBlLlZBTFVFOlxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudHMucHVzaChEZXNjcmlwdGlvbi5yZW5kZXJWYWx1ZShwYXJ0aWFsIGFzIFZhbHVlUGFydGlhbCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudHMucHVzaChwYXJ0aWFsLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50cy5qb2luKCcnKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcmVuZGVyUmVmZXJlbmNlKHBhcnRpYWw6IFJlZmVyZW5jZVBhcnRpYWwpIHtcblxuICAgICAgICBzd2l0Y2ggKHBhcnRpYWwucmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSZWZlcmVuY2VUeXBlLkNBUkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJkRGVzY3JpcHRpb24oKS5leHBvcnQocGFydGlhbC52YWx1ZSlcbiAgICAgICAgICAgIGNhc2UgUmVmZXJlbmNlVHlwZS5TS0lMTDpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnRpYWwudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2lsbFJlZmVyZW5jZURlc2NyaXB0b3IoKS5leHBvcnQocGFydGlhbC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNraWxsRGVzY3JpcHRvcigpLmV4cG9ydChwYXJ0aWFsLnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgUmVmZXJlbmNlVHlwZS5UUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyYWl0RGVzY3JpcHRpb24ocGFydGlhbC52YWx1ZSkuZXhwb3J0KClcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRpYWwudmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBleHBvcnQoZGVzY3JpcHRvcjogRGVzY3JpcHRvcikge1xuXG4gICAgICAgIGNvbnN0IHBhcnRpYWxzID0gZGVzY3JpcHRvci5wYXJ0aWFscygpO1xuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0aWFsID0gcGFydGlhbHNbaV07XG5cbiAgICAgICAgICAgIGlmIChwYXJ0aWFsLnR5cGUgPT09IFBhcnRpYWxUeXBlLlBBUlRJQ0xFKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzLnB1c2goRGVzY3JpcHRpb24ucmVuZGVyUGFydGljbGUocGFydGlhbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0aWFsLnR5cGUgPT09IFBhcnRpYWxUeXBlLlJFRkVSRU5DRSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKHRoaXMucmVuZGVyUmVmZXJlbmNlKHBhcnRpYWwgYXMgUmVmZXJlbmNlUGFydGlhbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0aWFsLnR5cGUgPT09IFBhcnRpYWxUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMucHVzaChEZXNjcmlwdGlvbi5yZW5kZXJUZXh0KHBhcnRpYWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydGlhbC50eXBlID09PSBQYXJ0aWFsVHlwZS5WQUxVRSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKERlc2NyaXB0aW9uLnJlbmRlclZhbHVlKHBhcnRpYWwgYXMgVmFsdWVQYXJ0aWFsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKHBhcnRpYWwudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhZ21lbnRzXG4gICAgICAgIFxuICAgIH1cbn0iXX0=