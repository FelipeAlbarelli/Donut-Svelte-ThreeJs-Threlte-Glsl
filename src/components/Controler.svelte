<script lang="ts">
    import { controlerStore, lighnessStore, rotationSpeed, setState } from "./controler.store";
    import Toggle from "./ui/Toggle.svelte";
    import ColorPicker from 'svelte-awesome-color-picker';


    export let autoRotate: boolean
    export let enableDamping: boolean
    export let zoomToCursor: boolean
    export let zoomSpeed: number
    export let minPolarAngle: number
    export let maxPolarAngle: number
    export let enableZoom: boolean;
    
    
    let show = true;
    

    export let rotateSpeed: number = 5;
    export let light = 3;



</script>

<div class="cont">
    <div class="header">
        <Toggle bind:show={show} />
    </div>
    {#if show}
        <div class="main-ui">
            <div class="field">
                vel. rotação : 
                <input 
                    min="0"  max="5" 
                    bind:value={$rotationSpeed} 
                    type="range"  />
            </div>
            <div class="field">
                luminosidade : <input  bind:value={$lighnessStore}  type="range" min="0"  max="1" step="0.02" />
            </div>
            <div class="field">
                cores  : 
            <ColorPicker
                label=""
                on:input={ e => { setState({color1: e.detail.hex}) }}
                hex={$controlerStore.color1 }
            />
            <ColorPicker
                label=""
                on:input={ e => { setState({color2: e.detail.hex}) }}
                hex={$controlerStore.color2 }
            />
            </div>
            
        </div>
            
    {/if}

</div>



<style>
    .cont {
        padding: 8px;
    }

    .main-ui {
        background-color: rgba(255, 255, 255,.3);
    }

</style>