<script>

import { PrismicRichText } from "@prismicio/svelte";
import { PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	$: two_columns = slice.primary.two_columns;
</script>

<section class="hero mt-8 mb-20 mx-8 md:flex md:gap-4" class:two_columns>
	<div class="flex-shrink">
		<PrismicImage field={slice.primary.image} />
	</div>
	
	<section class="mx-1 md:flex md:flex-col justify-between" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<div class="my-4">
			{#if slice.variation === 'default'}
				<PrismicRichText field={slice.primary.title} />
			{/if}
				<div class="logo">
					<PrismicImage field={slice.primary.logo} />
				</div>
		</div>
		<div class="md:w-3/5 lg:w-5/6">
			<PrismicRichText field={slice.primary.description} />
		</div>
	</section>
</section>


<style>
	.hero :global(img) {
		height: 50vh;
		object-fit: cover;
	}

	.logo :global(img) {
		width: 100%;
		max-width: 500px;
		height: fit-content;
	}

	.hero :global(h1) {
	font-family: "forma-djr-deck, sans-serif";
	font-size: var(--font-size-5);
	font-style: italic;
	text-align: center;
	}
	
	.hero :global(em) {
		font-family: "latienne-pro", serif;
		font-weight: 600;
		letter-spacing: 2px;
	}
	
	.hero :global(p) {
		margin-bottom: 1rem;
		/* border-left: 1px solid black; */
	}

	.hero :global(p:last-child) {
		margin-bottom: 0;
	}

	.two_columns {
		display: flex;
	}
</style>