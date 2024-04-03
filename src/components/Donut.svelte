
<script>
  import { Group } from 'three'
  import { T, forwardEventHandlers } from '@threlte/core'
  import { useGltf } from '@threlte/extras'

  export const ref = new Group()

  const gltf = useGltf('/assets/Donut.glb', { useDraco: true })

  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Mesh geometry={gltf.nodes.Torus001.geometry} material={gltf.materials['Material.002']} position={[0, 0.36, 0]} />
    <T.Mesh geometry={gltf.nodes.Torus.geometry} material={gltf.materials['Material.002']} position={[0, 0.36, 0]} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
