<script lang="ts">
  import { Canvas } from '@threlte/core'
    import MyCanva from './components/Canva.svelte';
    import Controler from './components/Controler.svelte';

  let autoRotate: boolean = false
  let enableDamping: boolean = true
  let rotateSpeed: number = 1
  let zoomToCursor: boolean = false
  let zoomSpeed: number = 1
  let minPolarAngle: number = 0
  let maxPolarAngle: number = Math.PI
  let enableZoom: boolean = true


  
</script>
<div class="canva-cont">
  <MyCanva>
  </MyCanva>
</div>


  <Controler
    bind:enableDamping
    bind:autoRotate
    bind:rotateSpeed
    bind:zoomToCursor
    bind:zoomSpeed
    bind:minPolarAngle
    bind:maxPolarAngle
    bind:enableZoom
  />
<style>
  .canva-cont {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(14, 22, 37);
  }
</style>