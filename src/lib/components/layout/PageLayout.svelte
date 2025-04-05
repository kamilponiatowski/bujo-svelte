<script lang="ts">
  export let title: string;
  export let id: string;
</script>

<div id={id} class="page">
  <h1>{title}</h1>
  <slot />
</div>
