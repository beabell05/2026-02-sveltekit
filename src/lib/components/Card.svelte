<script>
  import '../styles/components.css';
  export let item = { src: '', title: 'Project', year: '' };
</script>

<article class="card">
  <div class="img-box">
    <img src={item.src} alt={item.title} loading="lazy" />
    <div class="overlay" aria-hidden="true"></div>
  </div>
  <div class="card-meta">
    <div>
      <div class="title">{item.title}</div>
      <div class="meta">/ {item.year}</div>
    </div>
    {#if item.arrow}
      <img class="arrow" src={item.arrow} alt="open" loading="lazy" />
    {/if}
  </div>
</article>
