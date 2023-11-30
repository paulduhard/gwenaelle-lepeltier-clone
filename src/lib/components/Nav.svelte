<script>
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<nav class="header-nav ">
	<ul class="flex justify-end gap-8">
		{#each links as link}
			<li>
				<PrismicLink field={link.link}>{link.label}</PrismicLink>
			</li>
		{/each}
	</ul> 
</nav>

<style>
	li :global(a) {
        position: relative;
        text-decoration: none;
		text-transform: lowercase;
		font-family: "forma-djr-deck", sans-serif;
		font-size: .9rem;
		font-weight: 300;
		}

	li :global(a:hover) {
        text-decoration: none;
	}

	li :global(a::after) {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    transition: bottom 0.2s ease;
    border-bottom: 1px solid black;
    }

    li :global(a:hover::after) {
    width: 100%;
    bottom: -5px;
    }

	@media (max-width: 600px) {
	.header-nav li{
        display: none;
    }
}
</style>