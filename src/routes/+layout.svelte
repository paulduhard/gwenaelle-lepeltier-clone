<script>
	import "../app.css";
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Nav from '$lib/components/Nav.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<header class="md:mx-auto py-4 md:px-24 md:flex md:items-center md:justify-between">
    <!-- <img src="/svg/logo-v1.svg" class="w-60"> -->
	<Nav links={data.nav.data.links} />
</header>

<main>
	<slot />
</main>
<PrismicPreview {repositoryName} />

<section>
	<footer class="md:mx-auto md:px-24 border-t-2 py-16 flex flex-col items-center">
        <img src="/images/logo-couleur.png" alt="logo" class="px-3">
    <div class="flex gap-8">
        <nav>
            <ul>
                <li>Psycho-Praticien</li>
                <li>Art-Thérapeute</li>
                <li>Prendre rendez-vous</li>
            </ul>
        </nav>
        <div class="infos-contact text-right">
            <p class="adresse">53 rue du Refuge,<br>13200 Arles</p>
            <p class="telephone">06 87 27 97 93</p> 
        </div>
    </div>
</footer>
</section>

<style>
	@import "open-props/style";
	@font-face {
		font-family: "forma-djr-deck";
		src: url('https://use.typekit.net/vku2jdv.css') format('woff2'),
			 url('https://use.typekit.net/vku2jdv.css') format('woff');
	}
	@font-face {
		font-family: "latienne-pro";
		src: url('https://use.typekit.net/vku2jdv.css2') format('woff2'),
			 url('https://use.typekit.net/vku2jdv.css') format('woff');
	}

	footer :global(img) {
		width: 85vw;
	}
	footer :global(li), footer :global(p) {
	font-family: "forma-djr-deck", sans-serif;
	font-size: .9rem;
	font-weight: 300;
}
</style>