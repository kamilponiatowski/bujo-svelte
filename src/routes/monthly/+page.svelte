<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import MonthGrid from '$lib/components/shared/MonthGrid.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  
  const monthEvents = [
    { day: 1, content: 'Start projektu X' },
    { day: 3, content: 'Deadline A' },
    { day: 6, content: 'Spotkanie zespołu' },
    { day: 8, content: 'Prezentacja' },
    { day: 10, content: 'Randka 19:00' },
    { day: 15, content: 'Deadline projektu' },
    { day: 25, content: 'Urodziny Kasi' },
    { day: 31, content: 'Zakończenie miesiąca' }
  ];
  
  const monthlyGoals = [
    'Ukończyć projekt X',
    'Przeczytać 2 książki rozwojowe',
    '12 treningów (3x w tygodniu)',
    '4 randki z żoną (1x w tygodniu)'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Miesięczny Przegląd</title>
</svelte:head>

<PageLayout id="monthly" title="Miesięczny Przegląd - Maj 2024">
  <MonthGrid 
    month="maj" 
    year={2024} 
    currentDay={6} 
    events={monthEvents} 
  />
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h3 style="color: var(--accent);">Cele miesięczne:</h3>
      {#each monthlyGoals as goal, index}
        <Entry bullet={(index + 1) + "."} content={goal} />
      {/each}
    </div>
    <div class="side-notes">
      "Dobry plan to połowa sukcesu. Ale pamiętaj, by zostawić miejsce na spontaniczność - to, co najpiękniejsze, często wydarza się niespodziewanie."
    </div>
  </div>
</PageLayout>
