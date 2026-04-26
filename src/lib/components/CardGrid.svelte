<script>
  import Card from './Card.svelte';
  import { assets } from '../data/assets';
  import '../styles/components.css';
  export let items = assets;
</script>

<section class="card-grid" aria-label="Projects">
  {#each items as item}
    <Card {item} />
  {/each}
</section>
