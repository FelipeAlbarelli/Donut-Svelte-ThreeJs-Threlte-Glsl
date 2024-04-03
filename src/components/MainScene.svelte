<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { Gizmo, OrbitControls, interactivity } from '@threlte/extras'
    import { BoxGeometry, MeshStandardMaterial } from 'three'
    import JustDonut from './JustDonut.svelte';
    import { spring } from 'svelte/motion';
    import { DEG2RAD } from 'three/src/math/MathUtils.js';
  
    export let autoRotate: boolean
    export let enableDamping: boolean
    export let rotateSpeed: number = 0.5
    export let zoomToCursor: boolean
    export let zoomSpeed: number
    export let minPolarAngle: number
    export let maxPolarAngle: number
    export let enableZoom: boolean;



    interactivity()
    const scale = spring(1)
    let rotation = 0
    useTask((delta) => {
      rotation += (delta * rotateSpeed)
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
      {rotateSpeed}
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
  <T.AmbientLight intensity={0.3} />
  
  <T.GridHelper args={[10, 10]} />

  <T.Mesh 
    position.y={1}

    rotation.y={rotation}
    rotation.z={60 * DEG2RAD}
  >
    <JustDonut
      mat1={new MeshStandardMaterial({color: 'blue'})}
      mat2={new MeshStandardMaterial({color: 'red'})}
    > 
    </JustDonut>

  </T.Mesh>
  
  <!-- <T.Mesh
    position.y={1}
    geometry={new BoxGeometry(2, 2, 2)}
    material={new MeshStandardMaterial()}
  />
   -->