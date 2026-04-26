<script>
  import '../styles/components.css';

  import '../styles/components.css';
  export let tabs = ["Sanctuary", "Afar", "Echoes", "Kinetic", "Minutiae", "Gazes"];
  let active = 0;
  const select = (i) => (active = i);

  // keyboard navigation: left/right arrows move between tabs
  function handleKeydown(e, i) {
    if (e.key === 'ArrowRight') {
      select((i + 1) % tabs.length);
    } else if (e.key === 'ArrowLeft') {
      select((i - 1 + tabs.length) % tabs.length);
    }
  }
</script>

<nav class="tab-nav" role="tablist" aria-label="Categories">
  {#each tabs as tab, i}
    <button
      class="tab"
      role="tab"
      aria-selected={i===active}
      tabindex={i===active?0:-1}
      on:click={() => select(i)}
      on:keydown={(e) => handleKeydown(e, i)}
    >
      {tab}
    </button>
  {/each}
</nav>

 
