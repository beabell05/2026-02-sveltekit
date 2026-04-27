<script>
    import favicon from '$lib/assets/favicon.svg';

    /* ==========================================
       1. STILI GLOBALI E TOKEN
       ========================================== */
    import '$lib/styles/reset.css';
    import '$lib/styles/tokens.css'; /* Carica tutti i colori, misure e tipografia */
    import '$lib/styles/base.css';
    import '$lib/styles/utilities.css';

    /* ==========================================
       2. COMPONENTI DI LAYOUT
       ========================================== */
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    /* ==========================================
       3. GESTIONE DEL CONTENUTO (SVELTE 5)
       ========================================== */
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link href="https://fonts.bunny.net/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" crossorigin />
</svelte:head>

<Header />

{@render children()}

<Footer />