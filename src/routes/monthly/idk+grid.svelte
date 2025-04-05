<script lang="ts">
  export let month: string;
  export let year: number;
  export let currentDay: number | null = null;
  
  type DayEvent = {
    day: number;
    content: string;
  };
  
  export let events: DayEvent[] = [];
  
  const daysOfWeek = ['PON', 'WTO', 'ŚRO', 'CZW', 'PIĄ', 'SOB', 'NIE'];
  
  // Generowanie danych kalendarza
  function generateCalendarData(month: number, year: number) {
    // Pierwszego dnia miesiąca
    const firstDay = new Date(year, month, 1);
    // Ostatniego dnia miesiąca
    const lastDay = new Date(year, month + 1, 0);
    
    // Potrzebujemy wiedzieć, który dzień tygodnia jest pierwszym dniem miesiąca (0 = niedziela, 1 = poniedziałek, itd.)
    let firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Konwersja na poniedziałek=0, niedziela=6
    
    // Liczba dni w miesiącu
    const daysInMonth = lastDay.getDate();
    
    // Liczba dni w poprzednim miesiącu
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // Stworzenie tablicy dni
    const days = [];
    
    // Dni z poprzedniego miesiąca
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        month: 'prev',
        content: ''
      });
    }
    
    // Dni z bieżącego miesiąca
    for (let i = 1; i <= daysInMonth; i++) {
      const event = events.find(e => e.day === i);
      days.push({
        day: i,
        month: 'current',
        content: event ? event.content : ''
      });
    }
    
    // Dni z następnego miesiąca (aby uzupełnić siatkę)
    const remainingDays = 42 - days.length; // 6 tygodni po 7 dni
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        month: 'next',
        content: ''
      });
    }
    
    return days;
  }
  
  $: monthIndex = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 
                 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
                 .findIndex(m => m.toLowerCase() === month.toLowerCase());
  
  $: days = generateCalendarData(monthIndex, year);
</script>

<div class="month-grid">
  {#each daysOfWeek as day}
    <div class="day-header">{day}</div>
  {/each}
  
  {#each days as { day, month, content }, i}
    <div 
      class="day-cell"
      class:current-day={month === 'current' && day === currentDay}
      style={month !== 'current' ? 'opacity: 0.5;' : ''}
    >
      <div class="day-number">{day}</div>
      {#if content}
        <div class="entry-content">{content}</div>
      {/if}
    </div>
  {/each}
</div>
