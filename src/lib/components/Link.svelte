<script>
    import Icon from "$lib/components/Icon.svelte";

    let {
        ref = '#',
        title = null,
        children,
        leadingIcon = null,
        trailingIcon = null
    } = $props();
</script>

<a href={ref} {title} class="link">
    {#if leadingIcon}
        <Icon name={leadingIcon} />
    {/if}
    
    {#if children}
        {@render children()}
    {:else if title}
        {title}
    {/if}
    
    {#if trailingIcon}
        <Icon name={trailingIcon} />
    {/if}
</a>

<style>
 .link {
        display: inline-flex;
        align-items: center;
        gap: var(--size-2);
        color: var(--color-ink);
        text-decoration: none;
        position: relative;
        font-family: var(--font-primary);
        font-weight: var(--font-weight-medium);
        
        /* 👇 MODIFICA QUI: cambiamo da --type-body a --type-h2 */
        font-size: var(--type-h2); 
        
        transition: color 0.3s ease;
    }

    .link:hover {
        /* Manteniamo il testo bianco anche in hover per far risaltare solo la linea */
        color: var(--color-link); 
    }

    /* La linea della sottolineatura (invisibile di default) */
    .link::after {
        content: '';
        position: absolute;
        bottom: -4px; /* Distanza dal testo */
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--hex-brand-500); /* Il tuo viola */
        transform: scaleX(0); /* Nascosta */
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    /* Quando passi il mouse, la linea appare da sinistra verso destra */
    .link:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
</style>