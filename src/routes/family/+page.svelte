<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const dailyActivities = [
    'Wspólna kolacja bez elektroniki',
    '15-minutowa rozmowa o dniu',
    'Krótki spacer wieczorny'
  ];
  
  const weekendActivities = [
    'Wycieczka do lasu/parku',
    'Wspólne gotowanie',
    'Gry planszowe',
    'Kino domowe'
  ];
  
  const specialActivities = [
    'Rocznica: Weekend w górach',
    'Urodziny: Domowa niespodzianka',
    'Święta: Wspólne pieczenie i dekorowanie'
  ];
  
  const familyGoals = [
    'Wycieczka do Zakopanego w sierpniu',
    'Wspólny mini-projekt redekoracji pokoju',
    'Założenie małego ogródka na balkonie'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Czas dla Rodziny</title>
</svelte:head>

<PageLayout id="family" title="Czas dla Rodziny">
  <div class="leonardo-layout">
    <div class="main-notes">
      <h2>Aktywności z Rodziną - Pomysły</h2>
      
      <h3 style="margin-top: 20px; color: var(--accent);">Codzienne:</h3>
      {#each dailyActivities as activity}
        <Entry bullet="•" content={activity} />
      {/each}
      
      <h3 style="margin-top: 20px; color: var(--accent);">Weekendowe:</h3>
      {#each weekendActivities as activity}
        <Entry bullet="•" content={activity} />
      {/each}
      
      <h3 style="margin-top: 20px; color: var(--accent);">Specjalne:</h3>
      {#each specialActivities as activity}
        <Entry bullet="•" content={activity} />
      {/each}
    </div>
    <div class="side-notes">
      <h3 style="font-family: 'Tangerine', cursive; color: var(--accent);">Zrozumienie potrzeb:</h3>
      <p>Każdy ma inny język miłości. Pytaj i obserwuj, co jest najważniejsze dla Twoich bliskich - czas, słowa uznania, drobne upominki czy pomoc.</p>
      <br>
      <p>Wartościowy czas to nie ilość godzin, ale jakość uwagi i obecności.</p>
    </div>
  </div>
  
  <h2>Wspólne cele rodzinne:</h2>
  {#each familyGoals as goal, index}
    <Entry bullet={(index + 1) + "."} content={goal} />
  {/each}
  
  <DavinciSketches type="family-project" title="Projekt na wspólny czas - idea" />
</PageLayout>
