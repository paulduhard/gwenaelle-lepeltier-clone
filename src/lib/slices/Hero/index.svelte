<script>

import { PrismicRichText } from "@prismicio/svelte";
import { PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	$: two_columns = slice.primary.two_columns;
</script>

<section class="hero mt-8 mx-8" class:two_columns>
		<PrismicImage field={slice.primary.image} />
	
	<section class="mx-1 mb-20" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<div class="my-4">
			{#if slice.variation === 'default'}
				<PrismicRichText field={slice.primary.title} />
			{/if}
				<div class="logo">
					<PrismicImage field={slice.primary.logo} />
				</div>
		</div>
		<PrismicRichText field={slice.primary.description} />
	</section>
</section>


<style>
	.hero :global(img) {
		height: 50vh;
		object-fit: cover;
	}

	.logo :global(img) {
		height: fit-content;
	}

	.hero :global(h1) {
	font-family: "forma-djr-deck, sans-serif";
	font-size: var(--font-size-4);
	font-style: italic;
	font-weight: var(--font-weight-1);
	text-align: center;
}
	
	.hero :global(em) {
		font-family: "latienne-pro", serif;
		font-weight: 600;
		letter-spacing: 2px;
	}
	
	.hero :global(p) {
		margin-bottom: 1rem;
	}

	.two_columns {
		display: flex;
	}
</style>