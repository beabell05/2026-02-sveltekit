<script>
import favicon from "$lib/assets/favicon.svg";
import "$lib/styles/reset.css"; 
import "$lib/styles/tokens.css"; 
import "$lib/styles/base.css";
import "$lib/styles/utilities.css";

import Header from "$lib/components/Header.svelte";
import Footer from "$lib/components/Footer.svelte";
let {children} = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Satoshi font -->
	<link rel="preconnect" href="https://api.fontshare.com/" />
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet">

	<!-- Inter font -->
	<link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<Header />
{@render children()}
<Footer />
