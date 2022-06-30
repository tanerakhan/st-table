<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    export let className:string|undefined = undefined;
    export let type:string="button"
    export let label:string|undefined = undefined
    export let id:string|undefined = undefined
    export let dataModalToggle:string|undefined = undefined
    export let prefix:boolean=false;
    export let prefixItem:string|undefined = undefined;
    
    const dispatcher = createEventDispatcher();
    const handleClick = (e: Event): void => { dispatcher('click', e) };
</script>

<button on:click={handleClick} data-modal-toggle={dataModalToggle} class={className} {type} {id}> 
    {#if prefix}
        {prefixItem} 
    {:else}
        {label}
    {/if}
</button>