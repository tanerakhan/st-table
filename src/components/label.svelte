<script lang="ts">
    export let forHtml:string;
    export let className:string;
    export let label:string;
</script>
<label for={forHtml} class={className}>{label}</label>