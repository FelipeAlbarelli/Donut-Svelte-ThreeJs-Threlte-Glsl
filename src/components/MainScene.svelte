<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { Gizmo, OrbitControls, interactivity , FakeGlowMaterial, Outlines } from '@threlte/extras'
    import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
    import JustDonut from './JustDonut.svelte';
    import { spring, tweened } from 'svelte/motion';
    import { DEG2RAD } from 'three/src/math/MathUtils.js';
    import { controlerStore, fragShader, glow1, glow2 , lighnessStore, rotationSpeed } from './controler.store';
    import { color } from 'three/examples/jsm/nodes/Nodes.js';
    import { OutlineEffect } from 'three/examples/jsm/Addons.js';
    import { onMount } from 'svelte';
    import Shader from './Shader.svelte';
  
    export let autoRotate: boolean
    export let enableDamping: boolean
    export let rotSpeedX: number = 0.25
    export let zoomToCursor: boolean
    export let zoomSpeed: number
    export let minPolarAngle: number
    export let maxPolarAngle: number
    export let enableZoom: boolean;
    let cursorOn = false;


    $: {
      if (cursorOn) {
        scale.set(1.3 , {soft: true})
      } else {
        scale.set(1 )
      }
    }

    $: glows = [$glow1 , $glow2]


    interactivity()
    const scale = spring(1)



    let rotY = 0;
    let rotX = 0;
    useTask((delta) => {
      // if (!cursorOn) return;
      rotY += (delta * $rotationSpeed);
      rotX += (delta * rotSpeedX);
    })
    // npx @threlte/gltf@latest src/assets/Donut.glb --transform
  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[10, 5, 10]}
    lookAt.y={0.5}
  >
    <OrbitControls
      {enableDamping}
      {autoRotate}
      {zoomToCursor}
      {zoomSpeed}
      {minPolarAngle}
      {maxPolarAngle}
      {enableZoom}
    />
  </T.PerspectiveCamera>
  
  <Gizmo
    horizontalPlacement="left"
    paddingX={20}
    paddingY={20}
  />
  
  <T.DirectionalLight
    position.y={10}
    position.z={10}
  />
  <T.AmbientLight intensity={$lighnessStore} />
  
  <T.GridHelper args={[10, 10]} />

  <T.Mesh 
   rotation.y={rotY *0.2}
   on:pointerenter={(e) => {cursorOn = true ;}}
   on:pointerleave={(e) => {cursorOn = false ; }}
  >

    <T.Mesh 
      position.y={1}
      rotation.z={45 * DEG2RAD}
      >
      <T.Mesh      
      rotation.y={rotX}
      position.y={0}
      scale={$scale * 1.5}

      > 
        <JustDonut
        > 
          <svelte:fragment slot="mat-top" >
            <Shader />
            <!-- <T.MeshToonMaterial
              color={$controlerStore.color1}
            /> -->

            {#if $glow1}
            <Outlines 
              color={$controlerStore.color1}
            />
            {/if}
          </svelte:fragment>
          <svelte:fragment slot="mat-bot" >

          <Shader />

          <!-- <T.MeshToonMaterial
              color={$controlerStore.color2}
            /> -->
            {#if $glow2}
            <Outlines 
              color={$controlerStore.color2}
            />
            {/if}

          </svelte:fragment>

        </JustDonut>
      </T.Mesh>
    </T.Mesh>
  </T.Mesh>
  
  <!-- <T.Mesh
    position.y={1}
    geometry={new BoxGeometry(2, 2, 2)}
    material={new MeshStandardMaterial()}
  />
   -->