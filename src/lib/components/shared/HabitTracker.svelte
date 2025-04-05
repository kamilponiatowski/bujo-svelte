<script lang="ts">
  type Habit = {
    name: string;
    days: Array<boolean | null>;
  };

  export let daysInMonth = 31;
  export let habits: Habit[] = [];
  
  // Tworzymy tablicę od 1 do daysInMonth
  $: dayNumbers = Array.from({ length: daysInMonth }, (_, i) => i + 1);
</script>

<table class="habit-tracker">
  <thead>
    <tr>
      <th class="habit-name">Nawyk</th>
      {#each dayNumbers as day}
        <th>{day}</th>
      {/each}
      {#if dayNumbers.length < 31}
        <th>...</th>
        <th>31</th>
      {/if}
    </tr>
  </thead>
  
  <tbody>
    {#each habits as habit}
      <tr>
        <td class="habit-name">{habit.name}</td>
        {#each habit.days as completed}
          <td>
            {#if completed === true}
              ✓
            {/if}
          </td>
        {/each}
        
        {#if habit.days.length < daysInMonth}
          <td>...</td>
          <td></td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>