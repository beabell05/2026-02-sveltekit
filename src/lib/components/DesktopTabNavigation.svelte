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
        background: transparent;
        border: none;
        color: #ffffff; /* <-- MODIFICA: Testo di default sempre bianco */
        padding: calc(var(--size-3)) calc(var(--size-6));
        border-radius: 999px;
        cursor: pointer;
        font-size: var(--type-h2);
        font-family: var(--font-primary);
        font-weight: var(--font-weight-medium);
        transition: all 0.2s ease-out;
    }

    .tab.active {
        background-color: var(--hex-brand-500);
        color: #ffffff;
    }

    .tab:not(.active):hover {
        color: var(--hex-brand-500); /* <-- MODIFICA: Al passaggio del mouse diventa viola */
    }
</style>