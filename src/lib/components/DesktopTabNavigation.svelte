<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items = [
    'Sanctuary',
    'Afar',
    'Echoes',
    'Kinetic',
    'Minutiae',
    'Gazes'
  ];

  let active = items[0];

  function select(item) {
    active = item;
    dispatch('select', { item });
  }
</script>

<div class="tabs" role="tablist" aria-label="Sections">
  {#each items as item}
    <button
      class="tab"
      class:active={item === active}
      role="tab"
      aria-selected={item === active}
      on:click={() => select(item)}>
      {item}
    </button>
  {/each}
</div>

<style>
  .tabs {
    display: flex;
    gap: var(--size-6);
    margin-top: var(--size-6);
    align-items: center;
  }

  .tab {
    background: rgba(255,255,255,0.03);
    color: var(--color-ink-secondary);
    border: 1px solid rgba(255,255,255,0.04);
    padding: calc(var(--size-3)) calc(var(--size-6));
    border-radius: 999px;
    cursor: pointer;
    font-size: var(--type-h2);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
    transition: background-color 220ms cubic-bezier(.2,.9,.3,1), color 180ms ease, box-shadow 220ms ease;
  }

  .tab.active {
    background: linear-gradient(90deg, var(--hex-brand-500), var(--hex-brand-600));
    color: var(--color-ink-inverted);
    box-shadow: 0 10px 30px rgba(138,56,245,0.18), 0 2px 8px rgba(0,0,0,0.6) inset;
    border: 1px solid rgba(0,0,0,0.2);
  }

  .tab:hover {
    background: rgba(255,255,255,0.05);
    color: var(--color-ink);
  }
</style>
