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

<header class="sticky top-0 z-10 w-full px-8 py-4 bg-white shadow md:flex md:items-center md:justify-between">
	<a href="/">
		<img src="/svg/logo-v1.svg" class="w-48 md:w-60">
	</a>
		<Nav links={data.nav.data.links} />
</header>

<main>
	<slot />
</main>
<PrismicPreview {repositoryName} />

<section>
	<footer class="flex flex-col items-center py-6 border-t-2 md:mx-auto md:px-24">
		<a href="/">
			<img src="/images/logo-couleur.png" alt="logo" class="w-72">
		</a>
		<div class="flex gap-20">
        <nav>
            <ul>
                <li>Psycho-Praticien</li>
                <li>Art-Thérapeute</li>
                <li>Prendre rendez-vous</li>
            </ul>
        </nav>
        <div class="text-right infos-contact">
            <p class="mb-0 adresse">53 rue du Refuge,<br>13200 Arles</p>
            <p class="telephone">06 87 27 97 93</p> 
        </div>
    </div>
</footer>
</section>

<style>
	@import "open-props/style";

	footer :global(img) {
		/* max-width: 85vw; */
	}
	footer :global(li), footer :global(p) {
	font-size: .7rem;
	font-weight: 300;
}
</style>