<script lang="ts">
    import { tweened } from "svelte/motion";
    import { fragShader , vertexShader , controlerStore, colorsState } from "./controler.store";
    import { onMount } from "svelte";
    import { T, useTask } from '@threlte/core'
    import { Color, Material, Mesh, ShaderMaterial, Uniform, Vector3 } from "three";
    import { interactivity } from "@threlte/extras";
    import { color } from "three/examples/jsm/nodes/Nodes.js";

    interactivity()

    const colorA = new Uniform($colorsState.colorA)
    const colorB = new Uniform($colorsState.colorB)


    export let timerSpeed = 1;

    
    const pulseTimer = tweened(0.1 )

    pulseTimer.set( 100 , {
        duration : 100_000 / timerSpeed
    });

    let shader : ShaderMaterial;


    $: shaders = {frag: $fragShader , vertex: $vertexShader}

    $: {
       if (shader && ($fragShader || $vertexShader) ) {
            shader.setValues({
                fragmentShader: $fragShader,
                vertexShader: $vertexShader,
            })

            shader.needsUpdate= true;
       }
    }

    colorsState.subscribe( state => {
       console.log( colorA )
    })

    useTask( delta => {
        if (!shader) return;


    })



    onMount( () => {
        // shader.uniforms.colorA = colorA
    })


    let click = false;

    const handleClick = () => {
        console.log($colorsState)
    }


</script>

<svelte:body 
    on:click={() => {click = !click;  handleClick()}}
/>

<!-- <T.Mesh 
    bind:ref={thisMesh}
    material={material}
/> -->

<T.ShaderMaterial
    bind:ref={shader}
    wireframe={false}
    uniforms={{
        pulseTimer: {
            value: 0
        },
        colorA : colorA,
        colorB : colorB
    }}

    uniforms.pulseTimer.value={$pulseTimer}
    uniforms.colorA.value={$colorsState.colorA}
    uniforms.colorB.value={$colorsState.colorB}
>

</T.ShaderMaterial>