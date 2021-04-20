import fetch from "node-fetch";

export const MapSkillTranslated = new Map();

export default class SkillTranslate {
   static async getAllSkills() {
        const req = await fetch('https://script.google.com/macros/s/AKfycbw7b6uT64xgGM5koIS2jaqhrB-Ahj2c-sDQKvEVv4lfi6AxAUqNekDfPw7Z03GFGlfiHQ/exec')
        const res = await req.json()

        const datos = res.data;

        for(const data of datos) {
            MapSkillTranslated.set(data.Id+data['Skills ID'], {
                name: data['Skills NAMES'],
                detail: data['Skills DETAILS'],
                servant: {
                    name: data.Name,
                    id: data.Id
                }
            })
        }
    }
    
}