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
        background-color: var(--brand-500);
        border-radius: var(--radius-s);
    }

    .img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(10px);
        opacity: 0.5;
        transition: all 0.4s ease-in-out;
    }

    .img-box:hover img {
        filter: blur(0);
        opacity: 1;
    }

    .meta {
        margin-top: var(--spacing-3);
        display: flex;
        gap: var(--spacing-1);
        align-items: baseline;
    }

    .title {
        color: var(--color-content-primary);
        font-family: var(--font-1);
        font-weight: var(--font-weight-medium);
    }

    .year, .sep {
        color: var(--color-content-secondary);
    }
</style>