<script>
    import Link from '$lib/components/Link.svelte';
</script>

<header>
    <Link title="W-D" ref="/" />

    <nav>
        <Link title="About" ref="/about" />
        <Link title="@webdesign_ddc" ref="https://www.instagram.com/webdesign_ddc" />
    </nav>
</header>

<style>
    header {
        /* SPAZIATURE CON I TOKEN */
        /* Usa --size-6 (32px) per il padding verticale e --size-10 per quello orizzontale */
        padding: var(--size-6) var(--size-10); 
        
        /* TIPOGRAFIA CON I TOKEN */
        font-family: var(--font-primary);
        font-size: var(--size-5);
        font-weight: var(--font-weight-medium);
        color: var(--color-ink);

        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box; 
        
        /* EFFETTO STICKY & GLASSMORPHISM */
        position: sticky;
        top: 0;
        z-index: 100;
        
        /* Qui usiamo rgba perché i token base solitamente non supportano l'opacità, 
           a meno che tu non abbia un token specifico tipo var(--color-glass) */
        background-color: rgba(0, 0, 0, 0.4); 
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

    nav {
        display: flex;
        gap: var(--size-5); 
        align-items: center;
    }
</style>