<script>
    import polimiLogo from '$lib/assets/polimi-logo.png';
</script>

<footer>
    <img src={polimiLogo} alt="Politecnico di Milano" />
</footer>

<style>
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: var(--spacing-4) var(--spacing-10);
        background-color: var(--color-background-primary);
        box-sizing: border-box;
    }

    img { height: 78px; width: auto; object-fit: contain; }
</style>