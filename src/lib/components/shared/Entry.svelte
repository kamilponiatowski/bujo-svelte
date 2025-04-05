<script lang="ts">
  export let bullet: string = '•';
  export let color: string = '';
  export let content: string;
</script>

<div class="entry">
  <div class="bullet" style={color ? `color: ${color};` : ''}>
    {bullet}
  </div>
  <div class="entry-content">
    {#if $$slots.default}
      <slot />
    {:else}
      {@html content}
    {/if}
  </div>
</div>
