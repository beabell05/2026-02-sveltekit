<script>
    import Icon from "$lib/components/Icon.svelte";

    export let ref = '#';
    export let title = null;
    export let leadingIcon = null;
    export let trailingIcon = null;
</script>

<a href={ref} {title} class="link">
    {#if leadingIcon}
        <Icon name={leadingIcon} />
    {/if}
    <slot>
        {#if title}{title}{/if}
    </slot>
    
    {#if trailingIcon}
        <Icon name={trailingIcon} />
    {/if}
</a>

<style>
    .link {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2);
        color: var(--color-content-primary);
        text-decoration: none;
        position: relative;
        font-family: var(--font-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--type-h2);
        transition: color 0.3s ease;
    }

    .link:hover {
        color: var(--color-links-hover);
    }

    .link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--brand-500);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    .link:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
</style>