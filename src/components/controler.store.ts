import { derived, writable } from "svelte/store";
import { defaultPalletHx } from "../constants";

import frag from '../shaders/frag1.glsl?raw'
import vertex from '../shaders/vertex1.glsl?raw'
import { Color } from "three";
import type { RgbaColor } from "svelte-awesome-color-picker";


export type ControlerState = {
    color1 : RgbaColor;
    color2 : RgbaColor;

}

export const lighnessStore = writable( 0.3)

export const  rotationSpeed = writable(0.5)
export const  fragShader = writable(frag  )

export const  vertexShader = writable( vertex )


export const  glow1 = writable(false)
export const  glow2 = writable(false)


export const controlerStore = writable<ControlerState>({
    color1:  {r: 0.5 * 255 , g: 0.1 * 255 , b: 0.5 * 255 , a: 1 },
    color2:  {r: 0.0 * 255 , g: 0.5 * 255 , b: 0.5 * 255 , a: 1},
});

export const colorsState = derived( controlerStore , ({color1,color2}) => {
    return {
        colorA : new Color(color1.r / 255 ,color1.g / 255 ,color1.b / 255),
        colorB : new Color(color2.r / 255 ,color2.g / 255 ,color2.b / 255),
    }
})



export const setState = (x: Partial<ControlerState>) => {
    controlerStore.update( prev => ({
        ...prev,
        ...x
    }))
}