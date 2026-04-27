<script>
    import DesktopTabNavigation from '$lib/components/DesktopTabNavigation.svelte';
    import Project from '$lib/components/Project.svelte';

    // Riceviamo i dati dal caricamento della pagina (+page.js)
    let { data } = $props();
    
    // Fallback per i progetti
    let projects = $derived(data?.projects || []);
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
            {/each} </div>
    </section>
</main>

<style>
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
        
        /* Modifica il gap da --spacing-3 a un token più grande!
           --spacing-7 corrisponde a 40px, che equivale all'altezza di una riga.
           (Se lo vuoi ancora più staccato, puoi provare --spacing-8 che è 56px) 
        */
        gap: var(--spacing-7); 
        
        max-width: 1100px;
    }

    .lead-text {
        max-width: 934px;
    }

    .nav-container {
        margin-top: var(--spacing-7); /* Sostituisce il vecchio 40px */
    }

    .main-title {
        font-family: var(--font-1);
        font-size: var(--type-h1);
        font-weight: var(--font-weight-medium);
        line-height: 1.1;
        color: var(--color-content-primary);
        margin: 0;
    }

  .lead-text p {
        font-family: var(--font-1);
        font-size: var(--type-h1);
        font-weight: var(--font-weight-medium); /* <-- AGGIUNGI QUESTA RIGA */
        line-height: 1.3;
        color: var(--color-content-primary);
        margin: 0;
    }

    .keyword {
        color: var(--brand-500);
        font-style: italic;
    }

    .projects-grid {
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-8);
    }

    /* Responsive */
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