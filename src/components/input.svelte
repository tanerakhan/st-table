<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const handleInput = (e: Event): void => {
        dispatch('inputValue', e);
    }

    export let placeholder:string;
    export let className:string;
    export let id:string;
</script>

<input on:input={handleInput} class={className} {placeholder} {id} />