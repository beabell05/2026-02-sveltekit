

<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";

	export let data = { years: [] };

	let currentYear = data.years?.[0]?.number ?? null;

	$: projects = currentYear != null ? data.years.find((year) => year.number == currentYear)?.projects ?? [] : [];

</script>

<section class="safe-area hero">
<h1>
A personal visual record of traces left behind.

From the quiet Sanctuary of private spaces to the landscapes of the Afar. Across these views, Kinetic movement meets the stillness of monochrome nostalgic Echoes. This space is just an invitation to pause over the smallest Minutiae and the silent language of Gazes met along the way.
</h1> 
</section>
<nav class="safe-area filters">
{#each data.years as year}
<Filter bind:group={currentYear} value={year.number} /> 
{/each}
</nav>

<section class="safe-area projects">
{#each projects as project}
<Project data={project.data} />
{/each}
</section>


<style>
	.hero {
		padding-block: var(--size-11);
	}

	.hero h1 {
		font-size: var(--size-7);
		max-width: 35ch;
	}

	.filters {
		display: flex;
		align-items: center;
		gap: var(--size-5);
	}

	.projects {
		padding-block: var(--size-7);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-5);
	}
</style>