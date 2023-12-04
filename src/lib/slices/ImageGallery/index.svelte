<script>
	import { PrismicImage } from "@prismicio/svelte";
	
	/** @type {import("@prismicio/client").Content.ImageGallerySlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="mx-8 mb-20 last:mb-2">
	{#if slice.variation === 'default'}
			<PrismicImage field={slice.primary.image} />
	{:else if slice.variation === '2X'}
	<div class="grid gap-2 two_img md:grid-flow-col">
		<PrismicImage field={slice.primary.image} />
		<PrismicImage field={slice.primary.image2} />
	</div>
	{:else if slice.variation === '3X'}
	<div class="grid grid-cols-2 gap-2 three_img md:grid-cols-3">
		<PrismicImage field={slice.primary.image} />
		<PrismicImage field={slice.primary.image2} />
		<PrismicImage field={slice.primary.image3} />
	</div>
	{:else if slice.variation === '4X'}
	<div class="grid grid-cols-2 gap-2 four_img md:grid-cols-2">
			<PrismicImage field={slice.primary.image} />
			<PrismicImage field={slice.primary.image2} />
			<PrismicImage field={slice.primary.image3} />
			<PrismicImage field={slice.primary.image4} />
	</div>
	{/if}
</section>

<style>
	section :global(img) {
		object-fit: cover;
	}
	
/* 3 images */
@media (max-width: 768px) {
		.three_img :global(img:first-child) {
			grid-column: 1 / -1;
		}
		.three_img :global(img:nth-child(2)),
		.three_img :global(img:nth-child(3)) {
			aspect-ratio: 3/4;
		}
	}

/* 4 images */
@media (max-width: 768px) {
	.four_img :global(img:first-child),
	.four_img :global(img:last-child) {
		grid-column: 1 / -1;
	}
}

@media (max-width: 768px) {
	.four_img :global(img:nth-child(1)),
	.four_img :global(img:nth-child(4)) {
		aspect-ratio: 18/9;
	}
	.four_img :global(img:nth-child(2)),
	.four_img :global(img:nth-child(3)) {
		aspect-ratio: 3/4;
	}
}

@media (min-width: 768px) {
	.four_img :global(img:nth-child(1)),
	.four_img :global(img:nth-child(2)) {
		aspect-ratio: 18/9;
	}
	.four_img :global(img:nth-child(3)),
	.four_img :global(img:nth-child(4)) {
		aspect-ratio: 6/4;
	}
}
</style>
