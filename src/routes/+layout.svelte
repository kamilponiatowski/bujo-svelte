<script lang="ts">
  import '$lib/styles/app.scss';
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<div class="container">
  <Sidebar activeRoute={$page.url.pathname} />
  
  <main class="main-content">
    {#key $page.url.pathname}
      <div 
        in:fly={{ y: 20, duration: 300, delay: 300, easing: quintOut }}
        out:fly={{ y: -20, duration: 300, easing: quintOut }}
      >
        <slot />
      </div>
    {/key}
  </main>
</div>