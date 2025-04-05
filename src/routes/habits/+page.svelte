<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import HabitTracker from '$lib/components/shared/HabitTracker.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const habits = [
    {
      name: 'Poranny spacer',
      days: [true, true, true, false, false, true, null, null, null, null]
    },
    {
      name: 'Medytacja 5 min',
      days: [true, true, false, false, true, true, null, null, null, null]
    },
    {
      name: 'Coding practice',
      days: [false, true, true, true, false, false, null, null, null, null]
    },
    {
      name: 'Czas z rodziną',
      days: [true, false, true, true, true, true, null, null, null, null]
    },
    {
      name: 'Woda 2L',
      days: [true, true, true, true, true, true, null, null, null, null]
    },
    {
      name: 'Trening',
      days: [false, true, false, true, false, false, null, null, null, null]
    },
    {
      name: 'Lektura rozwojowa',
      days: [true, false, true, false, true, false, null, null, null, null]
    },
    {
      name: 'Modlitwa/refleksja',
      days: [true, true, true, true, false, true, null, null, null, null]
    },
    {
      name: 'Czas kreatywny',
      days: [false, true, true, false, false, true, null, null, null, null]
    },
    {
      name: 'Dziennik wdzięczności',
      days: [true, true, true, true, true, true, null, null, null, null]
    }
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Tracking Nawyków</title>
</svelte:head>

<PageLayout id="habits" title="Tracking Nawyków - Maj 2024">
  <HabitTracker habits={habits} daysInMonth={10} />
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h3 style="color: var(--accent);">Najlepsze serie:</h3>
      <p>- Woda: 6 dni z rzędu</p>
      <p>- Dziennik wdzięczności: 6 dni z rzędu</p>
      <p>- Modlitwa/refleksja: 4 dni z rzędu</p>
    </div>
    <div class="side-notes">
      <h3 style="font-family: 'Tangerine', cursive; color: var(--accent);">Obserwacje:</h3>
      <p>Widzę związek między moim porannym spacerem a ogólną energią i kreatywnością w ciągu dnia. Warto kontynuować.</p>
    </div>
  </div>
  
  <DavinciSketches type="rhythm" title="Wzorce i połączenia" />
</PageLayout>
