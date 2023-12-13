<script>
	import "../app.css";
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Nav from '$lib/components/Nav.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import { Hamburger } from 'svelte-hamburgers';

	let currentYear = new Date().getFullYear();
  	let siteName = "Gwenaelle Lepeltier";

	let open = false;

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

<header class="sticky top-0 z-10 grid w-full px-5 py-4 bg-white md:mx-auto max-2xl:border-b max-w-screen-2xl md:flex md:items-center md:justify-between md:px-20">
		<a href="/">
			<img src="/svg/logo-v1.svg" class="w-48 md:w-60 lg:w-72">
		</a>
		<!-- Display burger-button on mobile -->
		<button class="md:hidden">
			<Hamburger bind:open />
		</button>
		<!-- Display on desktop only -->
		<nav class="desktop-nav">
			<Nav links={data.nav.data.links} />
		</nav>
		<!-- Display navigation on mobile on click -->
		{#if open}
		<Nav links={data.nav.data.links} />
		{/if}
  </header>

<main class="mx-5 md:mx-auto max-w-screen-2xl">
	<slot />
</main>
<PrismicPreview {repositoryName} />

<section>
	<footer class="flex flex-col items-center px-5 py-5 mt-20 md:mt-44 md:mx-auto md:px-24 shadow-[rgba(0,0,15,5)_0px_5px_4px_2px]">
		<a href="/" class="mb-3">
			<img src="/svg/logo-v3.svg" alt="logo" class="w-96 md:w-72">
		</a>
		<div class="flex justify-between w-full md:gap-6 md:justify-center">
			<div class="footer-nav">
				<Nav links={data.nav.data.links} />
			</div>
        <div class="mb-8 text-right infos-contact">
            <a href="/" class="block adresse">53 rue du Refuge,<br>13200 Arles</a>
            <!-- <a href="/" class="block adresse"><Settings infos={data.settings.data.adress} /></a> -->
			<a href="tel:{data.settings.data.telephone}" class="block telephone">{data.settings.data.telephone}</a>
        </div>
    </div>
	<div class="text-xs footer__copyright">
		©{currentYear} {siteName} | tous droits réservés
	  </div>
</footer>
</section>

<style>
	/* Burger button */
	:global(.hamburger) {
		position: fixed;
		top: 0;
		right: .9rem;
		z-index: 100;
	}
	
	:global(.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after) {
		width: 40px !important;
		height: 3px !important;
	}

	:global(.hamburger-inner::before) { background-color: #757FCA !important; }
	:global(.hamburger-inner) { background-color: #F47553 !important; }
	:global(.hamburger-inner::after) { background-color: #CCC700 !important; }

	/* media query for mobile only */
	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}
	}
	footer :global(li), footer :global(p), footer :global(a) {
	/* font-size: .9rem; */
	font-weight: 300;
	}
	
</style>