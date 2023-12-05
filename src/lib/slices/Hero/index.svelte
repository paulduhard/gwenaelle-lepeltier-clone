<script>
	import { PrismicRichText, PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

</script>

{#if slice.variation === 'homepageHero'}
	<section class="mx-8 mt-10 mb-6 hero md:flex md:gap-4">
		<div class="flex-shrink hero-img">
			<PrismicImage field={slice.primary.image} />
		</div>
	</section>
	<section class="mx-1 mx-8" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<div class="mb-3 logo">
			<PrismicImage field={slice.primary.logo} />
		</div>
		<div class="mb-8 md:basis-2 md:w-3/5 lg:w-5/6">
			<PrismicRichText field={slice.primary.description} />
		</div>
	</section>
	
	{:else if slice.variation === 'default'}
	<section class="mx-8 mt-10 mb-6 mb-8 hero md:mx-20 md:flex" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<div class="md:basis-1/2 md:self-center">
			<PrismicRichText field={slice.primary.title} />
		</div>
		<div class="pl-4 border-l md:basis-1/2 md:pr-44 border-neutral-900">
			<PrismicRichText field={slice.primary.description} />
		</div>
	</section>
{/if}

<style>
	/* Make this available for tablet and desktop */
	@media (min-width: 768px) {
		.hero :global(h1) {
			font-size: 4.5rem;
		}
	}
	
	.hero :global(p) {
		font-size: .8rem;
	}

	@media (min-width: 768px) {
		.hero :global(p) {
			font-size: 1.5rem;
		}
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
</style>