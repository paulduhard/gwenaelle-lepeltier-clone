<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="richtext mt-8 mb-8 mx-8 md:flex">
	<div class="h2 mb-4 basis-1/2">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<div class="text basis-1/2">
		<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</div>
</section>

<style>
.richtext :global(h2) {
	font-family: "forma-djr-deck, sans-serif";
	font-size: var(--font-size-4);
	font-style: italic;
	font-weight: var(--font-weight-1);
	text-align: center;
}
.richtext :global(p) {
	font-family: "latienne-pro, serif";
	font-size: var(--font-size-1);
	line-height: var(--font-lineheight-2);
	font-weight: var(--font-weight-4);
	margin-bottom: 1rem;
}
</style>
