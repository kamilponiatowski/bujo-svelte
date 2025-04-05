<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const reflectionQuestions = [
    {
      question: 'W jakich momentach czułem się najbardziej "sobą" w tym tygodniu?',
      answer: 'Podczas tworzenia nowego komponentu - pełne skupienie i flow. Także podczas niedzielnej rozmowy z żoną o naszych planach.'
    },
    {
      question: 'Gdzie widziałem ślady dobra/Boga w codzienności?',
      answer: 'W pomocy, którą otrzymałem od kolegi przy trudnym zadaniu. W pięknie budzącej się wiosny.'
    },
    {
      question: 'Co chciałbym zmienić/kultywować?',
      answer: 'Bardziej ufać procesowi, mniej kontrolować. Doceniać małe chwile z bliskimi.'
    }
  ];
  
  const inspiringQuotes = [
    '"Nie możesz przeżyć dnia bez wpływu na świat wokół ciebie. To, czym się dzielisz, może być pomocne albo szkodliwe, ale nie możesz tego uniknąć." - Jane Goodall',
    '"Miarą życia nie jest jego długość, ale głębokość." - Ralph Waldo Emerson',
    '"Spełniaj swoją wolę, wykorzystując talenty, które otrzymałeś. Jest tylko jedna rzecz, którą możesz kontrolować – wysiłek, jaki wkładasz w swoje życie." - Papież Franciszek'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Refleksje Duchowe</title>
</svelte:head>

<PageLayout id="reflection" title="Refleksje Duchowe">
  <div class="quote">
    "Jestem człowiekiem relacji, pasji i wizji. Moje życie to podróż ku prawdzie, rozwojowi i dobroci. Będę żyć w zgodzie ze sobą – tworzyć, kochać i działać. Z miłością do siebie i świata."
  </div>
  
  <div class="daily-log">
    <div class="date-header">
      <h3>Refleksja tygodniowa: 29 kwietnia - 5 maja</h3>
    </div>
    
    <div class="leonardo-layout">
      <div class="main-notes">
        <h4 style="color: var(--accent);">Pytania przewodnie:</h4>
        {#each reflectionQuestions as reflection, index}
          <Entry bullet={(index + 1) + "."} content={`<em>${reflection.question}</em><br>${reflection.answer}`} />
        {/each}
      </div>
      <div class="side-notes">
        Pamiętaj, że duchowość wyraża się w codzienności - w sposobie, w jaki traktujesz ludzi, w jakości Twojej pracy, w szacunku dla siebie i świata.
      </div>
    </div>
  </div>
  
  <h2>Teksty i myśli inspirujące:</h2>
  
  {#each inspiringQuotes as quote}
    <Entry bullet="!" content={quote} />
  {/each}
  
  <DavinciSketches type="circle-balance" title="Cykl wzrostu duchowego" />
</PageLayout>
