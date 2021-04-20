import fetch from "node-fetch";

export const MapNpTranslate = new Map();

export default class NPTranslate {
   static async getAllNP() {
        const req = await fetch('https://script.google.com/macros/s/AKfycbxG-P3mYNyBcTatybUNl0D9y6m59PpnGxD_3vk5v6NKLCamA5I6aOW7Oa6deSJfDlfD/exec')
        const res = await req.json()

        const datos = res.data;

        for(const data of datos) {
            MapNpTranslate.set(data['Np Id'], {
                name: data['Np Name'],
                detail: data['Np Detail']
            })
        }
    }
    
}