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
		font-size: 1rem;
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
    transition: top .2s ease-in, bottom .2s ease-in;
    border-bottom: 1px solid black;
    }

    li :global(a:hover::after) {
    width: 100%;
    bottom: -6px;
	top: -5px;
    }

	/* Make the same border-bottom when we are on the current page */
	/* li :global(a.active::after) {
		width: 100%;
		bottom: -6px;
		top: -5px;
	} */

	@media (max-width: 600px) {
		.header-nav li{
			/* display: none; */
		}
		.header-nav ul {
			padding-block: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		li :global(a::after) {
		content: "";
		position: absolute;
		left: 50%;
  		transform: translateX(-50%);
		bottom: -5px;
		width: 4rem;
		transition: top .2s ease-in, bottom .2s ease-in;
		border-bottom: 1px solid black;
		}
	}
</style>