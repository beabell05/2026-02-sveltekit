<script>
  // Accept named props so callers can do <Project {...project} />
  export let title = 'Project Name';
  export let year = '';
  export let link = '#';
  export let thumbnail = '/images/img1.jpg';
</script>

<a class="project" href={link} target="_blank" rel="noopener noreferrer">
  <div class="img-box" aria-hidden="true">
    <img src={thumbnail} alt="" />
  </div>
</a>

<style>
    .project { display: block; color: inherit; text-decoration: none; }

    .img-box {
        position: relative;
        overflow: hidden;
        background-color: #111;
        border-radius: var(--radius-s);
        height: 220px;
    }

    .img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
</style>