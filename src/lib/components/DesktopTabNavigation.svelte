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
        gap: var(--spacing-5);
        align-items: center;
    }

    .tab {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--radius-full);
        cursor: pointer;
        font-size: var(--type-h2);
        font-family: var(--font-1);
        font-weight: var(--font-weight-medium);
        transition: all 0.2s ease-out;
    }

    .tab.active {
        background-color: var(--brand-500);
        color: #ffffff;
    }

    .tab:not(.active):hover {
        color: var(--brand-500);
    }
</style>