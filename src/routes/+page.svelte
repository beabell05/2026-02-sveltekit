

<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";
	import DesktopTabNavigation from "$lib/components/DesktopTabNavigation.svelte";

	export let data = { years: [] };

	let currentYear = data.years?.[0]?.number ?? null;

	$: projects = currentYear != null ? data.years.find((year) => year.number == currentYear)?.projects ?? [] : [];

</script>

<section class="safe-area hero">
	<h1>
		A personal visual record of traces left behind.
	</h1>

	<p class="lead">
		From the quiet <span class="accent">Sanctuary</span> of private spaces to the landscapes of the <span class="accent">Afar</span>. Across these frames, <span class="accent italic">Kinetic</span> movement meets the stillness of monochrome nostalgic <span class="accent italic">Echoes</span>. This space is just an invitation to pause over the smallest <span class="accent italic">Minutiae</span> and the silent language of <span class="accent italic">Gazes</span> met along the way.
	</p>

				<DesktopTabNavigation />

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
		font-size: var(--type-hero);
		max-width: 70ch;
		margin-bottom: var(--size-4);
		color: var(--color-ink);
		font-family: var(--font-primary);
		font-weight: var(--font-weight-medium);
	}

	.lead {
		font-size: var(--type-h2);
		max-width: 70ch;
		color: var(--color-ink);
		margin-top: var(--size-4);
		line-height: 1.5;
	}

	.accent { color: var(--hex-brand-500); font-weight: var(--font-weight-medium); }
	.italic { font-style: italic; }

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