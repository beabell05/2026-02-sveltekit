<script>
    // Usiamo $props() di Svelte 5 invece del vecchio createEventDispatcher
    let {
        items = [
            'Sanctuary',
            'Afar',
            'Echoes',
            'Kinetic',
            'Minutiae',
            'Gazes'
        ],
        // Riceviamo la categoria attualmente selezionata da +page.svelte
        activeCategory = 'Sanctuary',
        // Riceviamo la funzione che cambia la categoria quando clicchi
        onCategoryChange
    } = $props();
</script>

<div class="tabs" role="tablist" aria-label="Sections">
    {#each items as item}
        <button
            class="tab"
            class:active={item === activeCategory}
            role="tab"
            aria-selected={item === activeCategory}
            onclick={() => onCategoryChange(item)}>
            {item}
        </button>
    {/each}
</div>

<style>
    .tabs {
        display: flex;
        gap: var(--spacing-5);
        align-items: center;
    }

    .tab {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--radius-full); /* Arrotondamento a pillola */
        cursor: pointer;
        font-size: var(--type-h2);
        font-family: var(--font-1);
        font-weight: var(--font-weight-medium);
        transition: all 0.2s ease-out;
    }

    /* Stile per il tab selezionato (la tua pillola viola) */
    .tab.active {
        background-color: var(--brand-500);
        color: #ffffff;
    }

    /* Effetto hover solo per i tab inattivi: il testo diventa viola passandoci sopra */
    .tab:not(.active):hover {
        color: var(--brand-500);
    }
</style>