import { writable } from "svelte/store";
import { defaultPalletHx } from "../constants";


export type ControlerState = {
    color1 : string;
    color2 : string;
}

export const lighnessStore = writable( 0.3)

export const  rotationSpeed = writable(0.5)


export const controlerStore = writable<ControlerState>({
    color1: defaultPalletHx[1],
    color2: defaultPalletHx[3],
});



export const setState = (x: Partial<ControlerState>) => {
    controlerStore.update( prev => ({
        ...prev,
        ...x
    }))
}