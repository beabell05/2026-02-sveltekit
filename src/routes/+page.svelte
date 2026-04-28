<script>
    import DesktopTabNavigation from '$lib/components/DesktopTabNavigation.svelte';
    import Project from '$lib/components/Project.svelte';

    // Svelte page data from +page.js
    export let data;

    // All projects from load
    $: projects = data?.projects || [];

    // Selected category for tabs (default: show 'Sanctuary')
    let selectedCategory = 'Sanctuary';

    // Reactive filtered list by selectedCategory
    $: filteredProjects = projects.filter(p => (p.category || '').toLowerCase() === selectedCategory.toLowerCase());
</script>

<main class="page-wrapper">
    <header class="hero-section">
        <h1 class="main-title">
            A personal visual record of traces left behind.
        </h1>

        <div class="lead-text">
            <p>
                From the quiet <span class="keyword">Sanctuary</span> of private spaces to the landscapes of the <span class="keyword">Afar</span>. 
                Across these frames, <span class="keyword">Kinetic</span> movement meets the stillness of monochrome nostalgic <span class="keyword">Echoes</span>. 
                This space is just an invitation to pause over the smallest <span class="keyword">Minutiae</span> and the silent language of <span class="keyword">Gazes</span> met along the way.
            </p>
        </div>

        <!-- Navigation removed: showing all projects -->
    </header>

    <section class="projects-grid">
            <div class="nav-container">
            <DesktopTabNavigation 
                activeCategory={selectedCategory}
                onCategoryChange={(item) => selectedCategory = item}
            />
        </div>

        <div class="grid">
            {#if filteredProjects.length === 0}
                <p class="empty-message">Nessun progetto disponibile per {selectedCategory}.</p>
            {:else}
                {#each filteredProjects as project}
                    <Project {...project} />
                {/each}
            {/if}
        </div>
    </section>
</main>

<style>
    /* Layout Generale */
    .page-wrapper {
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
        gap: var(--spacing-7); /* La riga vuota di respiro tra titolo e paragrafo */
        max-width: 1100px;
    }

    .main-title {
        font-family: var(--font-1);
        font-size: var(--type-h1);
        font-weight: var(--font-weight-medium);
        line-height: 1.1;
        color: var(--color-content-primary);
        margin: 0;
    }

    .lead-text {
        max-width: 934px;
    }

    .lead-text p {
        font-family: var(--font-1);
        font-size: var(--type-h1);
        font-weight: var(--font-weight-medium);
        line-height: 1.3;
        color: var(--color-content-primary);
        margin: 0;
    }

    .keyword {
        color: var(--brand-500);
        font-style: italic;
    }

    .nav-container {
        margin-top: var(--spacing-7); 
    }

    /* Griglia Progetti */
    .projects-grid {
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-8);
    }

    .empty-message {
        grid-column: 1 / -1;
        color: var(--color-content-secondary);
        font-family: var(--font-1);
        font-size: var(--type-h2);
        padding: var(--spacing-10) 0;
    }

    /* Responsive per Tablet e Mobile */
    @media (max-width: 1024px) {
        .page-wrapper {
            padding: var(--spacing-10) var(--spacing-6) var(--spacing-6) var(--spacing-6);
        }
        
        .grid {
            grid-template-columns: 1fr;
        }

        .main-title, .lead-text p {
            font-size: var(--type-h2);
        }
    }
</style>