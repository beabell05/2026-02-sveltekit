<script>
    let { title = 'Project Name', year = '', thumbnail = '', link = '#' } = $props();
</script>

<a class="project" href={link} target="_blank">
    <div class="img-box">
        <img src={thumbnail} alt={title} />
    </div>
    <div class="meta">
        <span class="title">{title}</span>
        <span class="sep">/</span>
        <span class="year">{year}</span>
    </div>
</a>

<style>
    .project {
        display: flex;
        flex-direction: column;
        gap: 10px; /* Distanza tra foto e testo */
        text-decoration: none;
    }

    .img-box {
        width: 100%;
        aspect-ratio: 83 / 50; /* Proporzione esatta 664x400 */
        overflow: hidden;
        background-color: var(--brand-500);
        border-radius: var(--radius-none); /* Spigoli vivi */
    }

    .img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(10px);
        opacity: 0.5;
        transition: all 0.4s ease;
    }

    .project:hover img {
        filter: blur(0);
        opacity: 1;
    }

    .meta {
        display: flex;
        gap: var(--spacing-2);
        font-family: var(--font-1);
        font-size: var(--type-body);
    }

    .title { color: var(--color-content-primary); font-weight: var(--font-weight-medium); }
    .year, .sep { color: var(--color-content-secondary); }
</style>