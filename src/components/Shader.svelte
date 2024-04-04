<script lang="ts">
    import { tweened } from "svelte/motion";
    import { fragShader , vertexShader } from "./controler.store";
    import { onMount } from "svelte";
    import { T, useTask } from '@threlte/core'
    import { Material, Mesh, ShaderMaterial } from "three";
    import { interactivity } from "@threlte/extras";
    const pulseTimer = tweened(0)
    interactivity()


    let shader : ShaderMaterial;


    $: shaders = {frag: $fragShader , vertex: $vertexShader}

    $: {
       if (shader && $fragShader && $vertexShader ) {
            shader.setValues({
                fragmentShader: $fragShader,
                vertexShader: $vertexShader,
            })

            shader.needsUpdate= true;
       }
    }

    onMount( () => {
      pulseTimer.set(60 * 60 * 2 , {duration: 60 * 60 * 2})
      console.log({frag: $fragShader , ver: $vertexShader})
    })
    let click = false;
</script>

<svelte:body 
    on:click={() => {click = !click; shader.setValues({fragmentShader: $fragShader}) ; shader.needsUpdate = true; }}
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
        }
    }}
    uniforms.pulseTimer.value={$pulseTimer}
/>