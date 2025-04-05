<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  
  const values = [
    { 
      bullet: '1.', 
      content: '<strong>Bliskość i relacje</strong> – Relacje są moim centrum. Potrzebuję bliskości, szczerości, zrozumienia i wspólnego wzrastania.'
    },
    {
      bullet: '2.',
      content: '<strong>Rozwój i samorealizacja</strong> – Realizuję swoje plany, uczę się, rozwijam. Kiedy tworzę, oddycham pełnią życia.'
    },
    {
      bullet: '3.',
      content: '<strong>Dobro i empatia</strong> – Wybieram dobro. Mówię o emocjach, nie duszę ich. Pomagam, nie obciążając.'
    },
    {
      bullet: '4.',
      content: '<strong>Wolność działania</strong> – Potrzebuję przestrzeni i swobody wyboru. Moje decyzje są wyrazem mojego serca.'
    },
    {
      bullet: '5.',
      content: '<strong>Kreatywność i innowacja</strong> – Tworzę z pasją. Lubię zaskakiwać, inspirować i działać niestandardowo.'
    }
  ];
  
  const principles = [
    {
      bullet: '🔹',
      content: '<strong>Kieruj się:</strong> Autentycznością i spokojną komunikacją, harmonią działania i odpoczynku, tworzeniem czegoś własnego. Obserwuj emocje – są Twoim kompasem.'
    },
    {
      bullet: '🔸',
      content: '<strong>Unikaj:</strong> Poświęcania siebie bez wzajemności, osób zamkniętych na rozmowę i refleksję, tłumienia kreatywności przez perfekcjonizm.'
    },
    {
      bullet: '🌟',
      content: '<strong>Pracuj nad:</strong> Komunikacją w relacjach, akceptacją błędów, regularnym tworzeniem przestrzeni tylko dla siebie, zaufaniem do procesu życia.'
    }
  ];
  
  const rituals = [
    {
      bullet: '🌞',
      content: '<strong>Rano:</strong> Zadaj sobie pytanie – <em>"Jak dziś mogę być sobą?"</em>'
    },
    {
      bullet: '🌙',
      content: '<strong>Wieczorem:</strong> Zapytaj – <em>"Co dziś było w zgodzie ze mną?"</em>'
    }
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Moje Wartości</title>
</svelte:head>

<PageLayout id="values" title="Moje Wartości i Definicja Sukcesu">
  <div class="quote">
    "Dla mnie sukces to nieustanny taniec między tworzeniem wartości dla innych a harmonią we własnym życiu. To przestrzeń, w której moja kreatywność i pasja znajdują ujście w projektach, które pomagają ludziom, a jednocześnie rozwijają mnie zawodowo."
  </div>
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h2>Moje kluczowe wartości:</h2>
      {#each values as value}
        <Entry bullet={value.bullet} content={value.content} />
      {/each}
    </div>
    <div class="side-notes">
      "Twoją wartością jest to, co robisz każdego dnia, a nie to, co obiecujesz sobie, że zrobisz kiedyś."
      <br><br>
      Pamiętaj o rytmie - cykliczne powroty do swoich wartości jak pory roku pomagają utrzymać właściwy kierunek.
    </div>
  </div>
  
  <h2>Moje zasady życia:</h2>
  {#each principles as principle}
    <Entry bullet={principle.bullet} content={principle.content} />
  {/each}
  
  <div class="davinci-sketch">
    <div class="sketch-title">Pytania pomocnicze przy podejmowaniu decyzji</div>
    <div style="padding: 10px 20px; font-style: italic;">
      <p>- Czy to mnie zbliża do życia w zgodzie ze sobą?</p>
      <p>- Czy to wspiera moje wartości (np. bliskość, wolność, rozwój)?</p>
      <p>- Czy robię to z miłości, czy z lęku?</p>
    </div>
  </div>
  
  <h2>Codzienny rytuał przypomnienia:</h2>
  {#each rituals as ritual}
    <Entry bullet={ritual.bullet} content={ritual.content} />
  {/each}
</PageLayout>
