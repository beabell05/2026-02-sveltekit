<script>
    import Link from '$lib/components/Link.svelte';
</script>

<header>
    <Link title="W-D" ref="/" />

    <nav>
        <Link title="About" ref="https://www.instagram.com/beatricebellettini/" />
        <Link title="@webdesign_ddc" ref="https://www.instagram.com/webdesign_ddc" />
    </nav>
</header>

<style>
    header {
        /* SPAZIATURE E TIPOGRAFIA CON I NUOVI TOKEN */
        padding: var(--spacing-6) var(--spacing-10);
        font-family: var(--font-1);
        font-size: var(--type-h2);
        font-weight: var(--font-weight-medium);
        color: var(--color-content-primary);

        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        
        /* EFFETTO STICKY */
        position: sticky;
        top: 0;
        z-index: 100;
        /* Usiamo il tuo nero di base per l'opacità */
        background-color: rgba(0, 0, 0, 0.084); 
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

    nav {
        display: flex;
        gap: var(--spacing-5);
        align-items: center;
    }
</style>