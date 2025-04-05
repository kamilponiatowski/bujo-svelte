<script lang="ts">
    import PageLayout from '$lib/components/layout/PageLayout.svelte';
    import Entry from '$lib/components/shared/Entry.svelte';
    import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
    
    const basicSymbols = [
      { bullet: '•', content: 'Zadanie do wykonania' },
      { bullet: '✓', content: 'Zadanie wykonane' },
      { bullet: '>', content: 'Zadanie przeniesione (migrate)' },
      { bullet: '<', content: 'Zadanie oddelegowane' },
      { bullet: '×', content: 'Zadanie anulowane' },
      { bullet: '○', content: 'Wydarzenie' },
      { bullet: '-', content: 'Notatka' },
      { bullet: '*', content: 'Priorytet' },
      { bullet: '!', content: 'Inspiracja' },
      { bullet: '♥', content: 'Wartość/Refleksja osobista' }
    ];
    
    const colorSymbols = [
      { bullet: '•', content: 'Praca/Projekty zawodowe', color: '#0077cc' },
      { bullet: '•', content: 'Rodzina/Relacje', color: '#009933' },
      { bullet: '•', content: 'Rozwój osobisty', color: '#cc3300' },
      { bullet: '•', content: 'Kreatywność/Hobby', color: '#9900cc' },
      { bullet: '•', content: 'Duchowość/Refleksja', color: '#cc9900' }
    ];
  </script>
  
  <svelte:head>
    <title>Bullet Journal - Legenda</title>
  </svelte:head>
  
  <PageLayout id="key" title="Key - Legenda">
    <div class="leonardo-layout">
      <div class="main-notes">
        <h2>Symbole podstawowe</h2>
        {#each basicSymbols as symbol}
          <Entry bullet={symbol.bullet} content={symbol.content} />
        {/each}
      </div>
      <div class="side-notes">
        Oznaczenia pomagają szybko zorientować się w statusie zadań i typach wpisów. Możesz stworzyć własne symbole, które mają dla Ciebie znaczenie.
        <br><br>
        Regularnie przeglądaj swoje wpisy, by przenosić zadania i śledzić postępy.
      </div>
    </div>
    
    <h2>Kolorowe oznaczenia</h2>
    {#each colorSymbols as symbol}
      <Entry bullet={symbol.bullet} content={symbol.content} color={symbol.color} />
    {/each}
    
    <DavinciSketches type="journal-layout" title="Układ strony dziennika" />
  </PageLayout>