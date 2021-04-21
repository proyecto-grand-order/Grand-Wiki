import imageToBase from "image-to-base64";

const EncodeBase64 = async (url: string) => {
    const encoded = await imageToBase(url);
    return encoded
}
 
export default async function (ascensiones: string[], rarity: string): Promise<string[]> {
    return Promise.all(ascensiones.map(async (asc) => {
        const encodedImages = await EncodeBase64(asc)
        return `
        <div class="splide__slide">
            <a href="data:image/png;base64,${encodedImages}" data-lightbox="image" data-title="Ascension {{@key}}º">
                <div style="background-image: url(data:image/png;base64,${encodedImages});" class="heading-frame">
                    <h2>${rarity}</h2>
                </div>
            </a>
        </div>`
    }))

}