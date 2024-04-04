import { writable } from "svelte/store";
import { defaultPalletHx } from "../constants";

import frag from '../shaders/frag1.glsl?raw'
import vertex from '../shaders/vertex1.glsl?raw'


export type ControlerState = {
    color1 : string;
    color2 : string;

}

export const lighnessStore = writable( 0.3)

export const  rotationSpeed = writable(0.5)
export const  fragShader = writable(frag  )

export const  vertexShader = writable( vertex )


export const  glow1 = writable(false)
export const  glow2 = writable(false)


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