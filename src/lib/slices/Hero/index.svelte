<script>

import { PrismicRichText } from "@prismicio/svelte";
import { PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	$: two_columns = slice.primary.two_columns;
</script>

<section class="mx-8 mt-10 mb-6 yes hero md:flex md:gap-4" class:two_columns>
	<div class="flex-shrink hero-img">
		<PrismicImage field={slice.primary.image} />
	</div>
	
	<section class="justify-between mx-1 md:flex md:flex-col" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<div class="mb-8">
			{#if slice.variation === 'default'}
				<PrismicRichText field={slice.primary.title} />
			{/if}
				<div class="logo">
					<PrismicImage field={slice.primary.logo} />
				</div>
		</div>
			{#if slice.variation === 'homepageHero'}
			<div class="mb-8 md:w-3/5 lg:w-5/6">
				<PrismicRichText field={slice.primary.description} />
			</div>
			{:else if slice.variation === 'default'}
			<div class="pl-2 border-l border-neutral-900 md:w-3/5 lg:w-5/6">
				<PrismicRichText field={slice.primary.description} />
			</div>
			{/if}
	</section>
</section>


<style>
	.hero :global(p) {
		font-size: .8rem;
	}

	.hero :global(img) {
		/* height: 50vh; */
		object-fit: cover;
	}
	
	.hero-img :global(img) {
		aspect-ratio: 5/7;
	}
	
	.logo :global(img) {
		width: 100%;
		max-width: 500px;
		height: fit-content;
	}

	.two_columns {
		display: flex;
	}
</style>