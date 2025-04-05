<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import ProjectCard from '$lib/components/shared/ProjectCard.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const projectIdeas = [
    {
      title: 'Aplikacja do wizualizacji równowagi życiowej',
      description: 'Interaktywne narzędzie pomagające użytkownikom śledzić i wizualizować ich równowagę między różnymi obszarami życia.',
      tasks: [
        'System śledzenia aktywności',
        'Interaktywne wykresy',
        'Bazowanie na wartościach użytkownika'
      ],
      tags: ['Aplikacja', 'Vue.js']
    },
    {
      title: 'Digital Bullet Journal',
      description: 'Cyfrowa adaptacja systemu bullet journal z funkcjami wsparcia produktywności i refleksji.',
      tasks: [
        'Customizacja layoutów',
        'Automatyczne linki między wpisami',
        'System przypomnień i przepływu zadań'
      ],
      tags: ['Web App', 'Mobile']
    }
  ];
  
  const singleIdeas = [
    'System automatyzacji rutynowych zadań oparty o wzorce zachowań użytkownika',
    'Wtyczka do VS Code wspierająca programistów w utrzymywaniu focus',
    'Aplikacja wspierająca pary w komunikacji i budowaniu zdrowych nawyków',
    'Generator wyzwań kreatywnych oparty o techniki Leonardo da Vinci',
    'Interaktywny journal dla programistów dokumentujący drogę nauki i projekty'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Pomysły Kreatywne</title>
</svelte:head>

<PageLayout id="ideas" title="Pomysły Kreatywne">
  <div class="mirror-writing">
    Każdy pomysł, choćby najbardziej szalony, zapisz. Nie oceniaj, po prostu twórz. Ocenianie ogranicza, tworzenie wyzwala.
  </div>
  
  <div class="projects">
    {#each projectIdeas as project}
      <ProjectCard 
        title={project.title} 
        description={project.description} 
        tasks={project.tasks} 
        tags={project.tags} 
      />
    {/each}
  </div>
  
  <h2>Pojedyncze pomysły i inspiracje:</h2>
  
  <div class="davinci-note">
    <ul style="list-style-type: none; padding-left: 0;">
      {#each singleIdeas as idea}
        <li>- {idea}</li>
      {/each}
    </ul>
  </div>
  
  <DavinciSketches 
    type="life-balance" 
    title="Architektura aplikacji do równowagi życiowej" 
  />
</PageLayout>
