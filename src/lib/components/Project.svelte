<script>
  export let data = {};
  const title = data.title ?? 'Project Name';
  const year = data.year ?? '';
  const href = data.link ?? '#';
  const thumb = data.thumbnail ?? '/images/imgImg.jpg';
</script>

<a class="project" href={href} target="_blank" rel="noopener noreferrer">
  <div class="img-box">
    <img src={thumb} alt={title} />
    <div class="hover" aria-hidden="true"></div>
  </div>

  <div class="meta">
    <span class="title">{title}</span>
    <span class="sep"> / </span>
    <span class="year">{year}</span>
  </div>
</a>

<style>
  .project { display: block; color: inherit; text-decoration: none; }

.img-box {
    position: relative;
    overflow: hidden;
    background-color: var(--color-brand); /* Sfondo viola che si vedrà in trasparenza */
    border-radius: var(--size-2); /* Mantieni il tuo border-radius */
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Effetto di default: sfocato e semi-trasparente per far passare il viola sotto */
    filter: blur(10px);
    opacity: 0.5;
    transition: all 0.4s ease-in-out;
}

/* Cosa succede quando passi il mouse sulla card */
.img-box:hover img {
    filter: blur(0);
    opacity: 1;
}

  .meta { margin-top: var(--size-3); display:flex; gap: var(--size-1); align-items: baseline; }
  .title { color: var(--color-ink); font-family: var(--font-primary); font-weight: 500; }
  .year, .sep { color: var(--color-ink-secondary); }

</style>
