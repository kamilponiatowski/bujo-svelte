<script lang="ts">
  export let type: 'circle-balance' | 'rhythm' | 'project-concept' | 'journal-layout' | 'life-balance' | 'family-project' = 'rhythm';
  export let title: string = '';
</script>

<div class="davinci-sketch">
  {#if title}
    <div class="sketch-title">{title}</div>
  {/if}
  
  <div class="sketch">
    {#if type === 'rhythm'}
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="none"/>
        <path d="M50,100 Q150,50 250,100" stroke="#873c1f" fill="none" stroke-width="2"/>
        <path d="M50,110 Q150,170 250,110" stroke="#873c1f" fill="none" stroke-width="2"/>
        <circle cx="150" cy="100" r="40" stroke="#873c1f" fill="none" stroke-width="2"/>
        <line x1="110" y1="100" x2="190" y2="100" stroke="#873c1f" stroke-width="2"/>
        <line x1="150" y1="60" x2="150" y2="140" stroke="#873c1f" stroke-width="2"/>
      </svg>
    {:else if type === 'journal-layout'}
      <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="95%" height="180" fill="none" stroke="#873c1f" stroke-width="1"/>
        <line x1="10" y1="50" x2="95%" y2="50" stroke="#873c1f" stroke-width="1"/>
        <text x="50%" y="35" text-anchor="middle" fill="#873c1f" font-family="'Tangerine', cursive" font-size="20">Data i dzień tygodnia</text>
        <line x1="30%" y1="50" x2="30%" y2="190" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="15%" y="75" text-anchor="middle" fill="#873c1f" font-size="12">Zadania</text>
        <text x="65%" y="75" text-anchor="middle" fill="#873c1f" font-size="12">Notatki/Refleksje</text>
        <line x1="10" y1="155" x2="95%" y2="155" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="50%" y="175" text-anchor="middle" fill="#873c1f" font-size="12">Wdzięczność dnia</text>
      </svg>
    {:else if type === 'life-balance'}
      <svg width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="150" r="120" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <circle cx="250" cy="150" r="80" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <circle cx="250" cy="150" r="40" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        
        <line x1="250" y1="30" x2="250" y2="270" stroke="#873c1f" stroke-width="1"/>
        <line x1="130" y1="150" x2="370" y2="150" stroke="#873c1f" stroke-width="1"/>
        <line x1="170" y1="70" x2="330" y2="230" stroke="#873c1f" stroke-width="1"/>
        <line x1="170" y1="230" x2="330" y2="70" stroke="#873c1f" stroke-width="1"/>
        
        <text x="250" y="20" text-anchor="middle" fill="#873c1f" font-size="12">Rodzina/Związek</text>
        <text x="380" y="150" text-anchor="start" fill="#873c1f" font-size="12">Praca/Projekty</text>
        <text x="340" y="250" text-anchor="start" fill="#873c1f" font-size="12">Zdrowie/Energia</text>
        <text x="160" y="250" text-anchor="end" fill="#873c1f" font-size="12">Duchowość</text>
        <text x="120" y="150" text-anchor="end" fill="#873c1f" font-size="12">Kreatywność</text>
        <text x="160" y="50" text-anchor="end" fill="#873c1f" font-size="12">Rozwój osobisty</text>
        
        <!-- Data points -->
        <circle cx="250" cy="70" r="5" fill="#873c1f"/> <!-- Rodzina: 8 -->
        <circle cx="310" cy="150" r="5" fill="#873c1f"/> <!-- Praca: 7 -->
        <circle cx="290" cy="194" r="5" fill="#873c1f"/> <!-- Zdrowie: 5 -->
        <circle cx="210" cy="222" r="5" fill="#873c1f"/> <!-- Duchowość: 3 -->
        <circle cx="178" cy="150" r="5" fill="#873c1f"/> <!-- Kreatywność: 4 -->
        <circle cx="202" cy="106" r="5" fill="#873c1f"/> <!-- Rozwój: 6 -->
        
        <!-- Connect dots -->
        <path d="M250,70 L310,150 L290,194 L210,222 L178,150 L202,106 Z" fill="rgba(135, 60, 31, 0.2)" stroke="#873c1f" stroke-width="1"/>
      </svg>
    {:else if type === 'circle-balance'}
      <svg width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="125" r="100" fill="none" stroke="#873c1f" stroke-width="1"/>
        
        <circle cx="250" cy="25" r="20" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="250" y="30" text-anchor="middle" fill="#873c1f" font-size="12">Inspiracja</text>
        
        <circle cx="350" cy="125" r="20" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="350" y="130" text-anchor="middle" fill="#873c1f" font-size="12">Działanie</text>
        
        <circle cx="250" cy="225" r="20" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="250" y="230" text-anchor="middle" fill="#873c1f" font-size="12">Refleksja</text>
        
        <circle cx="150" cy="125" r="20" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="150" y="130" text-anchor="middle" fill="#873c1f" font-size="12">Integracja</text>
        
        <path d="M270,25 Q320,50 350,105" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <path d="M350,145 Q320,200 270,225" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <path d="M230,225 Q180,200 150,145" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <path d="M150,105 Q180,50 230,25" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
      </svg>
    {:else if type === 'project-concept'}
      <svg width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="125" rx="200" ry="100" fill="none" stroke="#873c1f" stroke-width="1"/>
        
        <circle cx="150" cy="90" r="40" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="150" y="95" text-anchor="middle" fill="#873c1f">UI/UX</text>
        
        <circle cx="220" cy="170" r="40" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="220" y="175" text-anchor="middle" fill="#873c1f">Frontend</text>
        
        <circle cx="350" cy="90" r="40" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="350" y="95" text-anchor="middle" fill="#873c1f">Backend</text>
        
        <circle cx="300" cy="170" r="40" fill="none" stroke="#873c1f" stroke-width="1"/>
        <text x="300" y="175" text-anchor="middle" fill="#873c1f">Marketing</text>
        
        <line x1="150" y1="130" x2="220" y2="130" stroke="#873c1f" stroke-width="1"/>
        <line x1="220" y1="130" x2="300" y2="130" stroke="#873c1f" stroke-width="1"/>
        <line x1="300" y1="130" x2="350" y2="130" stroke="#873c1f" stroke-width="1"/>
        <line x1="150" y1="130" x2="350" y2="130" stroke="#873c1f" stroke-width="1"/>
        
        <text x="250" y="40" text-anchor="middle" fill="#873c1f" font-family="'Tangerine', cursive" font-size="24">Produkty Cyfrowe</text>
      </svg>
    {:else if type === 'family-project'}
      <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="120" fill="none" stroke="#873c1f" stroke-width="1"/>
        <path d="M50,50 L200,10 L350,50" fill="none" stroke="#873c1f" stroke-width="1"/>
        <rect x="150" y="100" width="50" height="70" fill="none" stroke="#873c1f" stroke-width="1"/>
        <rect x="160" y="110" width="30" height="30" fill="none" stroke="#873c1f" stroke-width="1"/>
        <circle cx="260" cy="110" r="20" fill="none" stroke="#873c1f" stroke-width="1"/>
        <path d="M240,150 Q260,120 280,150" fill="none" stroke="#873c1f" stroke-width="1"/>
        <path d="M80,130 Q120,110 160,130" fill="none" stroke="#873c1f" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="200" y="190" text-anchor="middle" fill="#873c1f" font-size="12">Wspólny projekt domku dla ptaków</text>
      </svg>
    {/if}
  </div>
  
  <slot />
</div>
