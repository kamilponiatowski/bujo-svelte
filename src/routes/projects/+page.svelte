<script lang="ts">
  import PageLayout from '$lib/components/layout/PageLayout.svelte';
  import ProjectCard from '$lib/components/shared/ProjectCard.svelte';
  import Entry from '$lib/components/shared/Entry.svelte';
  import DavinciSketches from '$lib/components/svg/DavinciSketches.svelte';
  
  const projects = [
    {
      title: 'Nowa funkcjonalność dla klienta X',
      deadline: '15 maja 2024',
      description: 'Implementacja interaktywnego dashboardu z wizualizacją danych.',
      progress: 65,
      tasks: [
        'Dokończyć komponent wykresu',
        'Testy user flow',
        'Finalna prezentacja dla klienta'
      ]
    },
    {
      title: 'Refaktoryzacja kodu Legacy',
      deadline: '30 maja 2024',
      description: 'Modernizacja starego systemu, migracja do Vue 3.',
      progress: 30,
      tasks: [
        'Modularyzacja komponentów',
        'Implementacja Composition API',
        'Aktualizacja dokumentacji'
      ]
    },
    {
      title: 'Nowa strona dla małej firmy',
      deadline: '20 maja 2024',
      description: 'Projekt freelance - strona dla lokalnego biznesu.',
      progress: 10,
      tasks: [
        'Przygotować makiety',
        'Zebrać materiały od klienta',
        'Rozpocząć implementację'
      ]
    }
  ];
  
  const skills = [
    'Vue.js - Composition API & TypeScript',
    'UX Design - Testowanie użyteczności',
    'Optymalizacja wydajności aplikacji'
  ];
</script>

<svelte:head>
  <title>Bullet Journal - Projekty Zawodowe</title>
</svelte:head>

<PageLayout id="projects" title="Projekty Zawodowe">
  <div class="projects">
    {#each projects as project}
      <ProjectCard 
        title={project.title} 
        deadline={project.deadline} 
        description={project.description} 
        progress={project.progress} 
        tasks={project.tasks} 
      />
    {/each}
  </div>
  
  <DavinciSketches type="project-concept" title="Spółka z przyjaciółmi - koncepcja" />
  
  <div class="leonardo-layout">
    <div class="main-notes">
      <h2>Kluczowe skillsy do rozwoju:</h2>
      {#each skills as skill, index}
        <Entry bullet={(index + 1) + "."} content={skill} />
      {/each}
    </div>
    <div class="side-notes">
      Pamiętaj by planować spotkania z przyjaciółmi dotyczące spółki - regularność jest kluczem. Nawet krótka sesja burzy mózgów co tydzień to krok do przodu.
    </div>
  </div>
</PageLayout>