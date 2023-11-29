<script>
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<nav class="header-nav">
	<ul>
		{#each links as link}
			<li>
				<PrismicLink field={link.link}>{link.label}</PrismicLink>
			</li>
		{/each}
	</ul> 
</nav>

<style>
	nav {
		position: fixed;
		background: white;
		z-index: 1;
		top: 0;
		width: 100%;
		padding: var(--size-4);
		box-shadow: var(--shadow-1);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
		font-size: var(--font-size-1);
		text-transform: uppercase;
		font-weight: var(--font-weight-5);
		color: var(--text-1);
	}

	li :global(a) {
		color: var(--text-2);
        position: relative;
        text-decoration: none;
		text-transform: lowercase;
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