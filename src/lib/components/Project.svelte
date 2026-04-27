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
    width: 100%;
    aspect-ratio: 664 / 400;
    overflow: hidden;
    filter: blur(0);
  }

  .img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: translateY(-10%);
  }

  .img-box .hover {
    position: absolute;
    inset: 0;
    background: var(--hex-brand-500);
    mix-blend-mode: soft-light;
    opacity: 0.9;
    pointer-events: none;
  }

  .meta { margin-top: var(--size-3); display:flex; gap: var(--size-1); align-items: baseline; }
  .title { color: var(--color-ink); font-family: var(--font-primary); font-weight: 500; }
  .year, .sep { color: var(--color-ink-secondary); }

</style>
