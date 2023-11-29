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
        <!-- <img src="/images/logo-couleur.png" class="w-5/12" alt="logo"> -->
    <div class="flex justify-center gap-24">
        <nav>
            <ul class="lowercase">
                <li>Psycho-Praticien</li>
                <li>Art-Thérapeute</li>
                <li>Prendre Rendez-vous</li>
            </ul>
        </nav>
        <div class="infos-contact text-right">
            <div class="adresse">53 rue du Refuge,<br>13200 Arles</div>
            <div class="telephone">06 87 27 97 93</div> 
        </div>
    </div>
</footer>
</section>

<style>
	@import "open-props/style";
	@import "open-props/gray-hsl";

	/* @font-face {
		font-family: "Anton";
		font-style: "normal";
		font-weight: 100 900;
		font-display: swap;
		src: local(""), url("/anton.woff2") format("woff2");
		unicode-range: U+20-7E, U+E4, U+E5, U+F6;
	} */

	:root {
		--brand: var(--red-6);
		--text-1: var(--gray-9);
		--text-2: var(--gray-11);
		--surface-1: var(--gray-3);
		--surface-2: var(--indigo-2);
		--surface-3: var(--gray-2);
		--surface-4: var(--orange-4);
		--surface-shadow: var(--gray-8-hsl);
		--shadow-strength: 2%;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;

			--brand: var(--orange-10);
			--text-1: var(--gray-3);
			--text-2: var(--gray-2);
			--surface-1: var(--gray-9);
			--surface-2: var(--gray-10);
			--surface-3: var(--purple-12);
			--surface-4: var(--violet-11);
			--surface-shadow: var(--gray-11-hsl);
			--shadow-strength: 50%;
		}
	}

	/* Set fonts */
	@font-face {
    font-family: "forma-djr-deck", sans-serif;
    /* font-weight: 500; */
    /* font-style: normal; */
}
	@font-face {
		font-family: "latienne-pro", serif;
		/* font-weight: 400; */
		/* font-style: italic; */
	}

</style>