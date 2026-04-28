<script>
    import DesktopTabNavigation from '$lib/components/DesktopTabNavigation.svelte';
    import Project from '$lib/components/Project.svelte';

    let { data } = $props();
    
    // Categoria iniziale
    let selectedCategory = $state('Echoes');

    // Lista filtrata reattiva
    let filteredProjects = $derived(
        (data?.projects || []).filter(p => p.category === selectedCategory)
    );
</script>

<main class="page-wrapper">
    <header class="hero-section">
        <h1 class="main-title">A personal visual record of traces left behind.</h1>
        <div class="lead-text">
            <p>
                From the quiet <span class="keyword">Sanctuary</span> of private spaces to the landscapes of the <span class="keyword">Afar</span>. 
                Across these frames, <span class="keyword">Kinetic</span> movement meets the stillness of monochrome nostalgic <span class="keyword">Echoes</span>. 
                This space is just an invitation to pause over the smallest <span class="keyword">Minutiae</span> and the silent language of <span class="keyword">Gazes</span> met along the way.
            </p>
        </div>

        <div class="nav-container">
            <DesktopTabNavigation 
                activeCategory={selectedCategory} 
                onCategoryChange={(item) => selectedCategory = item} 
            />
        </div>
    </header>

    <section class="projects-grid">
        <div class="grid">
            {#if filteredProjects.length === 0}
                <p class="empty-message">Nessun progetto trovato in {selectedCategory}.</p>
            {:else}
                {#each filteredProjects as project}
                    <Project {...project} />
                {/each}
            {/if}
        </div>
    </section>
</main>

<style>
    .page-wrapper {
        /* Figma: 160px sopra, 80px lati */
        padding: var(--spacing-11) var(--spacing-10) var(--spacing-10) var(--spacing-10);
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-10);
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-7); /* Riga vuota (40px) tra titolo e testo */
        max-width: 1100px;
    }

    .main-title, .lead-text p {
        font-family: var(--font-1);
        font-size: var(--type-h1);
        font-weight: var(--font-weight-medium);
        color: var(--color-content-primary);
        line-height: 1.1;
        margin: 0;
    }

    .lead-text p { line-height: 1.3; max-width: 934px; }
    .keyword { color: var(--brand-500); font-style: italic; }

    .nav-container { margin-top: var(--spacing-7); }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-5); /* Gap esatto di 24px da Figma */
    }

    .empty-message { 
        grid-column: 1 / -1; 
        color: var(--color-content-secondary); 
        padding: var(--spacing-10) 0;
    }
</style>