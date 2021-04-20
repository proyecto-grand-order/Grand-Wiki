import { Servant } from "@isaaczm/api-connector";
import fetch from "node-fetch";

export default class ApiMerged {
    static getNA = async (): Promise<Servant.Servant[]> => {
        const req = await fetch('https://api.atlasacademy.io/export/NA/nice_servant.json')
        const res = await req.json();
        return res;
    }

    static getJP = async (): Promise<Servant.Servant[]> => {
        const req = await fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
        const res = req.json();
        return res
    }

    static mergeApis = async ():Promise<Servant.Servant[]> => {
        const na = await ApiMerged.getNA()
        const jp = await ApiMerged.getJP()
    
        for (const svt of jp) {
            const { id, skills, noblePhantasms } = svt;
    
            if (na.find(sv => sv.id === id)) {
                const svtNA = na.find(sv => sv.id === id)
                
                // Skills
                for (const skill of skills) {
                    const skillNA = svtNA.skills.find(sk => sk.id === skill.id);
    
                    if (skillNA) {
                        skill.name = skillNA.name;
                        skill.detail = skillNA.detail;
                    }
                }

                // Noble Phantams
                for (const np of noblePhantasms) {
                    const npNA = svtNA.noblePhantasms.find(n => n.id === np.id);

                    if(npNA) {
                        np.name = npNA.name
                        np.detail = npNA.detail
                    } 
                }
            }
        }
    
        return jp
    }
}