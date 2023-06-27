import { proxy } from "valtio";

const state = proxy ({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './eighteen.png',
    fullDecal: './eighteen.png',
})

export default state;