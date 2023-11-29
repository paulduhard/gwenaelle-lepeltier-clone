<script>

import { PrismicRichText } from "@prismicio/svelte";
import { PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

	$: two_columns = slice.primary.two_columns;
</script>

<div class="hero" class:two_columns>
	<PrismicImage field={slice.primary.image} />
	
	<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<PrismicRichText field={slice.primary.title} />
		<PrismicRichText field={slice.primary.description} />
	</section>
</div>


<style>
	:global(img) {
		width: 100%;
		height: auto;
		aspect-ratio: 9/16;
		object-fit: cover;
		margin-top: var(--size-9);
		padding-inline: var(--size-6);
	}
	
	:global(section) {
		padding-inline: var(--size-6);
		margin-bottom: var(--size-9);
	}

	.two_columns {
		display: flex;
	}
</style>