<script>
    import polimiLogo from '$lib/assets/polimi-logo.png';
</script>

<footer>
    <img src={polimiLogo} alt="Logo Politecnico di Milano 1863" />
</footer>

<style>
    footer {
        /* Assicuriamoci che prenda tutta la larghezza dello schermo */
        width: 100%;
        
        /* Flexbox per centrare perfettamente il logo */
        display: flex;
        justify-content: center;
        align-items: center;
        
        /* Padding da Figma */
        padding: var(--spacing-4) var(--spacing-10);
        background-color: var(--color-background-primary);
        box-sizing: border-box;
    }

    img {
        /* Altezza estratta dal tuo screenshot di Figma */
        height: 78px;
        width: auto;
        object-fit: contain;
    }
</style>