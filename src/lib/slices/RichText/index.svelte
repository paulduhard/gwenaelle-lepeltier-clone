<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

{#if slice.variation === 'default'}
<section class="mt-8 mb-6 richText richtext md:flex md:gap-3">
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
<div class="mt-8 mb-6 md:text-center md:px-48">
	<PrismicRichText
	field={slice.primary.content}
	components={{
		label: Label
	}}
/>
</div>
{:else if slice.variation === 'textLeft'}
<div class="mt-8 mb-6 md:text-left md:px-24">
	<PrismicRichText
	field={slice.primary.content}
	components={{
		label: Label
	}}
/>
</div>
{/if}

<style>

</style>