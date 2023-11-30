<script>
	import { PrismicImage } from "@prismicio/svelte";
	
	/** @type {import("@prismicio/client").Content.ImageGallerySlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="mx-8">
	{#if slice.variation === 'default'}
			<PrismicImage field={slice.primary.image} />
	{:else if slice.variation === '2X'}
	<div class="two_img grid md:grid-flow-col gap-2">
		<PrismicImage field={slice.primary.image} />
		<PrismicImage field={slice.primary.image2} />
	</div>
	{:else if slice.variation === '3X'}
	<div class="three_img grid grid-cols-2 md:grid-flow-col gap-2">
		<PrismicImage field={slice.primary.image} />
		<PrismicImage field={slice.primary.image2} />
		<PrismicImage field={slice.primary.image3} />
	</div>
	{:else if slice.variation === '4X'}
	<div class="three_img grid grid-cols-2 md:grid-flow-col gap-2">
	<PrismicImage field={slice.primary.image} />
	<PrismicImage field={slice.primary.image2} />
	<PrismicImage field={slice.primary.image3} />
	<PrismicImage field={slice.primary.image4} />
	</div>
	{/if}
</section>

<style>
	.three_img :global(img:first-child) {
		grid-column: 1 / -1;
	}

</style>
