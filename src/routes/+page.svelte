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
        /* Figma: 160px sopra/sotto, 80px ai lati */
        padding: 160px var(--size-10) var(--size-10) var(--size-10);
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--size-10);
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        gap: 10px; /* Figma: il titolo e il paragrafo sono vicinissimi */
        max-width: 1100px;
    }

    .lead-text {
        max-width: 934px; /* Misura esatta estratta dal tuo Figma */
    }

    .nav-container {
        margin-top: 40px; /* Distanza esatta tra testo e tab in Figma */
    }

    .main-title {
        font-family: var(--font-primary);
        font-size: var(--type-h1); /* 40px */
        font-weight: var(--font-weight-medium);
        line-height: 1.1;
        color: var(--color-ink);
        margin: 0;
    }



    .lead-text p {
        font-family: var(--font-primary);
        font-size: var(--type-h1); /* 40px per uniformità con il titolo */
        line-height: 1.3;
        color: var(--color-ink);
        margin: 0;
    }

    /* Parole chiave viola e corsive */
    .keyword {
        color: var(--hex-brand-500);
        font-style: italic;
    }

    /* Griglia Progetti */
    .projects-grid {
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 colonne */
        gap: var(--size-8); /* Spazio tra le card (solitamente 32px o 40px) */
    }

    /* Responsive per Tablet e Mobile */
    @media (max-width: 1024px) {
        .page-wrapper {
            padding: 80px var(--size-6) var(--size-6) var(--size-6);
        }
        
        .grid {
            grid-template-columns: 1fr;
        }

        .main-title, .lead-text p {
            font-size: var(--type-h2); /* Riduciamo a 24px su schermi piccoli */
        }
    }
</style>