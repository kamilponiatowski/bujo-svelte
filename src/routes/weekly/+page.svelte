<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  
  const weekDays = [
    {
      day: 'PON 06',
      tasks: [
        'Code review',
        'Spotkanie team 14:00'
      ],
      notes: [
        'Nowy pomysł na feature X'
      ]
    },
    {
      day: 'WTO 07',
      tasks: [
        'Dokończyć feature A',
        'Telefon do klienta'
      ],
      notes: []
    },
    {
      day: 'ŚRO 08',
      tasks: [
        'Prezentacja projektu',
        'Rezerwacja restauracji'
      ],
      notes: []
    },
    {
      day: 'CZW 09',
      tasks: [
        'Szkolenie Vue 10:00',
        'Piłka z kumplami 18:00'
      ],
      notes: []
    },
    {
      day: 'PIĄ 10',
      tasks: [
        'Retrospektywa sprintu',
        'Randka z żoną 19:00'
      ],
      notes: []
    },
    {
      day: 'SOB 11',
      tasks: [
        'Spacer w parku',
        'Projekt osobisty'
      ],
      notes: []
    },
    {
      day: 'NIE 12',
      tasks: [
        'Planowanie tygodnia',
        'Relaks z rodziną'
      ],
      notes: []
    }
  ];
  
  const priorities = [
    'Dokończyć feature A',
    'Czas dla rodziny w weekend',
    'Ćwiczyć 3x w tygodniu'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Tygodniowy Przegląd</title>
</svelte:head>

<PageLayout id="weekly" title="Tygodniowy Przegląd">
  <h2>Tydzień 19: 6-12 maja 2024</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <th style="width: 15%; border: 1px solid var(--line-color); padding: 10px; background-color: rgba(200, 178, 115, 0.3);">Dzień</th>
      <th style="width: 40%; border: 1px solid var(--line-color); padding: 10px; background-color: rgba(200, 178, 115, 0.3);">Zadania</th>
      <th style="border: 1px solid var(--line-color); padding: 10px; background-color: rgba(200, 178, 115, 0.3);">Notatki</th>
    </tr>
    {#each weekDays as day}
      <tr>
        <td style="border: 1px solid var(--line-color); padding: 10px; font-weight: bold;">{day.day}</td>
        <td style="border: 1px solid var(--line-color); padding: 10px;">
          {#each day.tasks as task}
            <div class="entry">
              <div class="bullet">•</div>
              <div class="entry-content">{task}</div>
            </div>
          {/each}
        </td>
        <td style="border: 1px solid var(--line-color); padding: 10px;">
          {#each day.notes as note}
            <div class="entry">
              <div class="bullet">•</div>
              <div class="entry-content">{note}</div>
            </div>
          {/each}
        </td>
      </tr>
    {/each}
  </table>
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h3 style="color: var(--accent);">Priorytety tygodnia:</h3>
      {#each priorities as priority, index}
        <Entry bullet={(index + 1) + "."} content={priority} />
      {/each}
    </div>
    <div class="side-notes">
      <h3 style="font-family: 'Tangerine', cursive; color: var(--accent);">Refleksja:</h3>
      <p>Udało się znaleźć więcej czasu na rodzinę, ale zabrakło na projekt osobisty. W przyszłym tygodniu lepiej zbalansuję czas.</p>
    </div>
  </div>
</PageLayout>
