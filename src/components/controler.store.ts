import { writable } from "svelte/store";


export type ControlerState = {
    color1 : string;
    color2 : string;
}

export const lighnessStore = writable( 0.3)

export const  rotationSpeed = writable(0.5)


export const controlerStore = writable<ControlerState>({
    color1: '#605530',
    color2: '#FBF8DD',
});



export const setState = (x: Partial<ControlerState>) => {
    controlerStore.update( prev => ({
        ...prev,
        ...x
    }))
}