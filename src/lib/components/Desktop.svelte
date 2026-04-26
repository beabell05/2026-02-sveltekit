<script>
  import { onMount } from 'svelte';
  import DesktopTabNavigation from './DesktopTabNavigation.svelte';
  import TopBar from './TopBar.svelte';
  import CardGrid from './CardGrid.svelte';
  import '../styles/components.css';

  // Default to dark theme to match the Figma reference
  onMount(() => {
    try {
      document.documentElement.setAttribute('data-theme', 'dark');
    } catch (e) {
      // noop for SSR
    }
  });
</script>

<main class="desktop">
  <div class="content">
    <TopBar />

    <header class="hero">
      <h1>
        A personal visual record of traces left behind.
      </h1>
      <p>
        From the quiet <span class="accent italic">Sanctuary</span> of private spaces to the landscapes of the <span class="accent italic">Afar</span>. Across these views, <span class="accent italic">Kinetic</span> movement meets the stillness of monochrome nostalgic <span class="accent italic">Echoes</span>. This space is just an invitation to pause over the smallest <span class="accent italic">Minutiae</span> and the silent language of <span class="accent italic">Gazes</span> met along the way.
      </p>
    </header>

    <DesktopTabNavigation />

    <CardGrid />
  </div>
</main>
