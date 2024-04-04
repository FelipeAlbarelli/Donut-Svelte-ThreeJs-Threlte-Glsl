<script lang="ts">
    const statesLebels  = ['🫣' , '🤯'] ; 

    export let show = false;

    $: label = show ? statesLebels[0] : statesLebels[1];

    const toggleState = () => {
        show = !show;
    }

</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<buttom class="btn" on:click={toggleState}>{label}</buttom>


<style >
    .btn {
        cursor: pointer;
        font-size: 36px;
    }

</style>