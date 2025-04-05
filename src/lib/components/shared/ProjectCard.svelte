<script lang="ts">
  import Entry from './Entry.svelte';
  
  export let title: string;
  export let deadline: string = '';
  export let description: string = '';
  export let progress: number = 0;
  export let tasks: Array<string> = [];
  export let tags: Array<string> = [];
</script>

<div class="project-card">
  <h3>{title}</h3>
  
  {#if deadline}
    <div class="deadline">Deadline: {deadline}</div>
  {/if}
  
  {#if description}
    <p>{description}</p>
  {/if}
  
  {#if progress > 0}
    <div class="progress-bar">
      <div class="progress-fill" style="width: {progress}%;"></div>
    </div>
    <div style="text-align: right; font-size: 0.9rem;">{progress}% ukończone</div>
  {/if}
  
  {#if tasks.length > 0}
    <div style="margin-top: 10px;">
      {#each tasks as task}
        <Entry bullet="•" content={task} />
      {/each}
    </div>
  {/if}
  
  <slot />
  
  {#if tags.length > 0}
    <div style="text-align: right; margin-top: 10px;">
      {#each tags as tag}
        <span class="note-tag">{tag}</span>
      {/each}
    </div>
  {/if}
</div>
