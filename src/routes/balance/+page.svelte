<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const balanceAreas = [
    {
      area: 'Rodzina/Związek',
      rating: 8,
      reflection: 'Wspólny weekend i dobra komunikacja. Wyzwaniem był brak czasu w środku tygodnia.'
    },
    {
      area: 'Rozwój osobisty',
      rating: 6,
      reflection: 'Przeczytana książka, ale zabrakło konsekwencji w codziennych praktykach.'
    },
    {
      area: 'Praca/Projekty',
      rating: 7,
      reflection: 'Ukończony ważny feature. Problem z rozpraszaniem przy nowych zadaniach.'
    },
    {
      area: 'Kreatywność',
      rating: 4,
      reflection: 'Mało czasu na tworzenie nowych rzeczy. Potrzeba więcej przestrzeni.'
    },
    {
      area: 'Zdrowie/Energia',
      rating: 5,
      reflection: 'Tylko 2 treningi. Za mało snu w środku tygodnia.'
    },
    {
      area: 'Duchowość',
      rating: 3,
      reflection: 'Minimalne praktyki, brak głębszej refleksji. Obszar do poprawy.'
    }
  ];
  
  const observations = [
    'Najsilniejszy obszar: <strong>Rodzina/Związek</strong> - utrzymywać dobre praktyki komunikacji i wspólny czas.',
    'Obszary wymagające uwagi: <strong>Duchowość i Kreatywność</strong> - wbudować w codzienny harmonogram.',
    'Związek między obszarami: niski poziom energii wpływa na kreatywność i duchowość.'
  ];
  
  const nextWeekPlan = [
    '<strong>Zdrowie:</strong> 3 treningi (pon, śr, pt) + wcześniejsze chodzenie spać (22:30)',
    '<strong>Duchowość:</strong> 10 minut porannej refleksji + wieczorne zapiski',
    '<strong>Kreatywność:</strong> Zablokować środę 19:00-20:00 na projekt osobisty'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Śledzenie Równowagi Życiowej</title>
</svelte:head>

<PageLayout id="balance" title="Śledzenie Równowagi Życiowej">
  <table class="values-table">
    <thead>
      <tr>
        <th>Tydzień: 29 kwietnia - 5 maja 2024</th>
        <th class="rating">Ocena (1-10)</th>
        <th class="reflection">Refleksja</th>
      </tr>
    </thead>
    <tbody>
      {#each balanceAreas as area}
        <tr>
          <td>{area.area}</td>
          <td class="rating">{area.rating}</td>
          <td class="reflection">{area.reflection}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <DavinciSketches type="life-balance" title="Wizualizacja równowagi" />
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h2>Obserwacje i wnioski:</h2>
      {#each observations as observation, index}
        <Entry bullet={(index + 1) + "."} content={observation} />
      {/each}
    </div>
    <div class="side-notes">
      "Równowaga to nie punkt docelowy, ale ciągły proces. Nie chodzi o perfekcję, ale o świadome wybory i regularne korekty kursu."
    </div>
  </div>
  
  <h2>Plan działania na następny tydzień:</h2>
  {#each nextWeekPlan as plan}
    <Entry bullet="•" content={plan} />
  {/each}
</PageLayout>