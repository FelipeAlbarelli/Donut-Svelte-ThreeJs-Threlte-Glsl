<script lang="ts">
    import { tweened } from "svelte/motion";
    import { fragShader , vertexShader } from "./controler.store";
    import { onMount } from "svelte";
    import { T, useTask } from '@threlte/core'
    import type { ShaderMaterial } from "three";
    const pulseTimer = tweened(0)


    let shader : ShaderMaterial;


    let fragShaderText = $fragShader

    fragShader.subscribe( newValue => {
        if (!shader) return;
        // shader.needsUpdate= true;
        console.log('update')
    })

    onMount( () => {
      pulseTimer.set(60 * 60 * 2 , {duration: 60 * 60 * 2})
      console.log({frag: $fragShader , ver: $vertexShader})
    })
    
</script>

<T.ShaderMaterial
    on:onMount={ ref => {
        shader = ref;
    }}
    fragShader={$fragShader}
    vertexShader={$vertexShader}
    wireframe={false}
    uniforms={{
        pulseTimer: {
            value: 0
        }
    }}
    uniforms.pulseTimer.value={$pulseTimer}
/>