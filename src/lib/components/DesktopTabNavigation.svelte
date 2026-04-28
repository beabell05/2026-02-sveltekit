<script>
    let { 
        items = ['Sanctuary', 'Afar', 'Echoes', 'Kinetic', 'Minutiae', 'Gazes'],
        activeCategory, 
        onCategoryChange 
    } = $props();
</script>

<div class="tabs">
    {#each items as item}
        <button
            class="tab"
            class:active={item === activeCategory}
            onclick={() => onCategoryChange(item)}>
            {item}
        </button>
    {/each}
</div>

<style>
    .tabs { display: flex; gap: var(--spacing-5); align-items: center; }

    .tab {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--radius-full);
        cursor: pointer;
        font-size: var(--type-h2);
        font-family: var(--font-1);
        transition: all 0.2s ease;
    }

    .tab.active { background-color: var(--brand-500); }
    .tab:not(.active):hover { color: var(--brand-500); }
</style>