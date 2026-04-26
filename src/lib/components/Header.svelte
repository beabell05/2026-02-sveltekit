
<script>
import Link from "$lib/components/Link.svelte"; </script>
<header class="safe-area">
<Link title="W-D" ref="/" />

<nav>
<Link title="About" ref="/about" />
<Link
title="@webdesign_ddc"
ref="https://www.instagram.com/webdesign_ddc"
/>
</nav>
</header>

<style>
header {

padding-block: var(--size-6);
display: flex;
gap: var(--size-8);
justify-content: space-between; 
align-items: center;
}
nav {
display: flex;
gap: var(--size-6);
align-items: center;
}
</style>