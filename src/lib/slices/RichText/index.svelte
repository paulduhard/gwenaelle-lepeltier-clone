<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

{#if slice.variation === 'default'}
<section class="mx-8 mt-8 mb-6 richtext md:flex">
	<div class="mb-7 h2 basis-1/2 md:self-center">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<div class="md:basis-1/2 md:pr-44">
		<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</div>
</section>
{:else if slice.variation === 'textOnly'}
<div class="mb-6 text-center md:px-48">
	<PrismicRichText
	field={slice.primary.content}
	components={{
		label: Label
	}}
/>
</div>
{/if}

<style>
		@media (min-width: 768px) {
		.hero :global(h2) {
			font-size: 3rem;
		}
	}
</style>