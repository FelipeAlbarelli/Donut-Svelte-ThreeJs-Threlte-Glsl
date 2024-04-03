<script lang="ts">
  import { Canvas } from '@threlte/core'
    import MainScene from './MainScene.svelte';
    import Controler from './Controler.svelte';
  let autoRotate: boolean = false
  let enableDamping: boolean = true
  let rotateSpeed: number = 1
  let zoomToCursor: boolean = false
  let zoomSpeed: number = 1
  let minPolarAngle: number = 0
  let maxPolarAngle: number = Math.PI
  let enableZoom: boolean = true


</script>

  <Canvas>
    <MainScene
      {enableDamping}
      {autoRotate}
      rotSpeedY={rotateSpeed}
      {zoomToCursor}
      {zoomSpeed}
      {minPolarAngle}
      {maxPolarAngle}
      {enableZoom}
    />
    </Canvas>

<style>
  div {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgb(14, 22, 37);
  }
</style>