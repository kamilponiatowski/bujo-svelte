<script lang="ts">
  import Entry from './Entry.svelte';
  
  export let date: string;
  export let dayNumber: number | null = null;
  export let entries: Array<{ bullet: string; content: string; color?: string }> = [];
  export let sideNote: string = '';
  export let gratitude: string = '';
</script>

<div class="daily-log">
  <div class="date-header">
    <h3>{date}</h3>
    {#if dayNumber}
      <span class="note-tag">Dzień {dayNumber} / 366</span>
    {/if}
  </div>
  
  <div class="leonardo-layout">
    <div class="main-notes">
      {#each entries as entry}
        <Entry bullet={entry.bullet} color={entry.color} content={entry.content} />
      {/each}
      <slot name="entries" />
    </div>
    
    {#if sideNote || $$slots.sideNote}
      <div class="side-notes">
        {#if sideNote}
          {sideNote}
        {:else}
          <slot name="sideNote" />
        {/if}
      </div>
    {/if}
  </div>
  
  {#if gratitude || $$slots.gratitude}
    <h4 style="margin-top: 20px;">Wdzięczność dnia:</h4>
    {#if gratitude}
      <p><em>{gratitude}</em></p>
    {:else}
      <slot name="gratitude" />
    {/if}
  {/if}
  
  <slot />
</div>
