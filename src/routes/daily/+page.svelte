<script lang="ts">
    import PageLayout from '$lib/components/layout/PageLayout.svelte';
    import DailyLog from '$lib/components/shared/DailyLog.svelte';
    
    const mondayEntries = [
      { bullet: '•', content: 'Wykonać code review dla projektu X' },
      { bullet: '✓', content: 'Poranny spacer 20 minut' },
      { bullet: '•', content: 'Zaplanować spotkanie z zespołem' },
      { bullet: '-', content: 'Pomysł: Nowa funkcjonalność dla klienta Y' },
      { bullet: '!', content: '"Nie porównuj swojego początku z czyimś środkiem drogi"' },
      { bullet: '♥', content: 'Dziś czułem spokój podczas porannego spaceru' }
    ];
    
    const tuesdayEntries = [
      { bullet: '•', content: 'Dokończyć feature A' },
      { bullet: '•', content: 'Telefon do klienta' },
      { bullet: '•', content: 'Trening 30 min' },
      { bullet: '○', content: '19:00 - Rozmowa z przyjacielem o projekcie' },
      { bullet: '-', content: 'Sprawdzić nową bibliotekę Vue 3 Composition API' }
    ];
  </script>
  
  <svelte:head>
    <title>Bullet Journal - Dziennik Dzienny</title>
  </svelte:head>
  
  <PageLayout id="daily" title="Dziennik Dzienny">
    <DailyLog 
      date="Poniedziałek, 6 maja 2024" 
      dayNumber={126} 
      entries={mondayEntries}
      sideNote="Pomysł do rozwinięcia: Interfejs który pomoże ludziom w wizualizacji ich postępów w różnych obszarach życia"
      gratitude="Jestem wdzięczny za spokojny poranek i inspirującą rozmowę z kolegą z zespołu."
    />
    
    <DailyLog 
      date="Wtorek, 7 maja 2024" 
      dayNumber={127} 
      entries={tuesdayEntries}
      sideNote="Pamiętaj aby zarezerwować wieczór tylko dla rodziny. Żadnych urządzeń elektronicznych po 21:00."
      gratitude="Uzupełnij wieczorem..."
    />
    
    <div class="text-center mt-xl">
      <button>Dodaj nowy wpis dziennika</button>
    </div>
  </PageLayout>