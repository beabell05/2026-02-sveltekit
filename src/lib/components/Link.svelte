<script>
	import Icon from "$lib/components/Icon.svelte";

	export let ref = '#';
	export let title = null;
	export let leadingIcon = null;
	export let trailingIcon = null;
</script>

<a href={ref}>
	{#if leadingIcon}
		<Icon name={leadingIcon} />
	{/if}

	<slot>{title}</slot>

	{#if trailingIcon}
		<Icon name={trailingIcon} />
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: var(--size-1);
		transition: color 0.75s var(--ease-out-quart);
	}

	a:hover {
		color: var(--color-link);
	}
</style>