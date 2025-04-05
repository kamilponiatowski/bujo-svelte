<script lang="ts">
  export let activeRoute: string;

  const navLinks = [
    { path: '/', label: 'Index', id: 'index' },
    { path: '/daily', label: 'Dziennik', id: 'daily' },
    { path: '/weekly', label: 'Tygodniowy widok', id: 'weekly' },
    { path: '/monthly', label: 'Miesięczny widok', id: 'monthly' },
    { path: '/habits', label: 'Tracking nawyków', id: 'habits' },
    { path: '/values', label: 'Moje wartości', id: 'values' },
    { path: '/projects', label: 'Projekty', id: 'projects' },
    { path: '/family', label: 'Czas dla rodziny', id: 'family' },
    { path: '/ideas', label: 'Pomysły kreatywne', id: 'ideas' },
    { path: '/gratitude', label: 'Dziennik wdzięczności', id: 'gratitude' },
    { path: '/reflection', label: 'Refleksje duchowe', id: 'reflection' },
    { path: '/balance', label: 'Równowaga życiowa', id: 'balance' }
  ];

  $: isActive = (path: string) => {
    if (path === '/' && activeRoute === '/') return true;
    if (path !== '/' && activeRoute.startsWith(path)) return true;
    return false;
  };
</script>

<aside class="sidebar">
  <h2>Mój Journal</h2>
  <ul class="nav-links">
    {#each navLinks as { path, label, id }}
      <li class={isActive(path) ? 'active' : ''}>
        <a href={path} data-id={id}>{label}</a>
      </li>
    {/each}
  </ul>
</aside>
