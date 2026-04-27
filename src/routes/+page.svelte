<script>
    import DesktopTabNavigation from '$lib/components/DesktopTabNavigation.svelte';
    import Project from '$lib/components/Project.svelte';

    // Assumiamo che i progetti arrivino dal file +page.js
    export let data;
    
    // Fallback se i dati non sono ancora pronti
    $: projects = data?.projects || [];
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

        <div class="nav-container">
            <DesktopTabNavigation />
        </div>
    </header>

    <section class="projects-grid">
        <div class="grid">
            {#each projects as project}
                <Project {...project} />
            {/each}
        </div>
    </section>
</main>

<style>
    .page-wrapper {
        padding: var(--size-10);
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--size-10);
    }

   .hero-section {
        display: flex;
        flex-direction: column;
        gap: var(--size-8); /* Mantieni uno spazio generoso */
        max-width: 1100px;
    }

    .main-title {
        font-family: var(--font-primary);
        /* TORNIAMO AL GRANDE: 40px */
        font-size: var(--type-h1); 
        font-weight: var(--font-weight-medium);
        line-height: var(--leading-h1, 1.1); 
        color: var(--color-ink);
        margin: 0;
    }

    .lead-text p {
        font-family: var(--font-primary);
        /* ANCHE QUI 40px, per renderli un blocco unico visivamente */
        font-size: var(--type-h1); 
        line-height: 1.4; 
        color: var(--color-ink);
        margin: 0;
    }

    .lead-text {
        max-width: 900px;
    }

   

    .keyword {
        color: var(--hex-brand-500);
        font-style: italic;
    }

    .nav-container {
        margin-top: var(--size-4);
    }

    /* Griglia Progetti */
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--size-8);
    }

    @media (max-width: 1024px) {
        .grid {
            grid-template-columns: 1fr;
        }
        .page-wrapper {
            padding: var(--size-6);
        }
    }
</style>