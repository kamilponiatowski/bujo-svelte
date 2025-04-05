<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  
  const mondayGratitude = [
    'Spokojny poranek i czas na spacer przed pracą, który dał mi energię na cały dzień.',
    'Inspirującą rozmowę z kolegą z zespołu, która dała mi nowy pomysł na projekt.',
    'Ciepłą kolację z żoną i śmiech podczas wspólnego oglądania serialu.'
  ];
  
  const tuesdayGratitude = [
    'Pochwałę od klienta za szybkie rozwiązanie problemu.',
    'Smaczną kawę, która pomogła mi przetrwać intensywny poranek.',
    'Piękną pogodę i kwitnące drzewa, które zauważyłem w drodze do pracy.'
  ];
  
  const gratitudePatterns = [
    'Spokojne chwile z bliskimi',
    'Małe sukcesy zawodowe',
    'Momenty z naturą',
    'Drobne przyjemności dnia codziennego'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Dziennik Wdzięczności</title>
</svelte:head>

<PageLayout id="gratitude" title="Dziennik Wdzięczności">
  <div class="quote">
    "Wdzięczność zmienia perspektywę. Sprawia, że widzimy obfitość zamiast braku, możliwości zamiast ograniczeń."
  </div>
  
  <div class="daily-log">
    <div class="date-header">
      <h3>Poniedziałek, 6 maja 2024</h3>
    </div>
    
    <h4 style="color: var(--accent);">Dziś jestem wdzięczny za:</h4>
    {#each mondayGratitude as item, index}
      <Entry bullet={(index + 1) + "."} content={item} />
    {/each}
  </div>
  
  <div class="daily-log">
    <div class="date-header">
      <h3>Wtorek, 7 maja 2024</h3>
    </div>
    
    <h4 style="color: var(--accent);">Dziś jestem wdzięczny za:</h4>
    {#each tuesdayGratitude as item, index}
      <Entry bullet={(index + 1) + "."} content={item} />
    {/each}
  </div>
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h2>Wzorce wdzięczności:</h2>
      <p>Zauważam, że najczęściej doceniam:</p>
      <ul>
        {#each gratitudePatterns as pattern}
          <li>{pattern}</li>
        {/each}
      </ul>
    </div>
    <div class="side-notes">
      Zwróć uwagę na to, jak wdzięczność zmienia Twoje postrzeganie problemów. Ten sam "problem" widziany przez pryzmat wdzięczności staje się często wyzwaniem lub nawet szansą.
    </div>
  </div>
  
  <div class="davinci-note">
    <p style="text-align: center; font-size: 1.2rem;">
      Wdzięczność to nie tylko stan umysłu, to praktyka - codzienny trening dostrzegania dobra w zwyczajności.
    </p>
  </div>
</PageLayout>
