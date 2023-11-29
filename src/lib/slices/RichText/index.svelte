<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="container">
	<div class="h2">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<div class="text">
		<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</div>
</section>

<style>
:global(h1) {
	font-family: "forma-djr-deck";
	font-size: var(--font-size-6);
	font-style: italic;
	font-weight: var(--font-weight-2);
	text-align: center;
}
:global(h2) {
	font-family: "forma-djr-deck, sans-serif";
	font-size: var(--font-size-4);
	font-style: italic;
	font-weight: var(--font-weight-2);
	text-align: center;
}
:global(p) {
	width: 100%;
	font-family: "latienne-pro, serif";
	font-size: var(--font-size-2);
	line-height: var(--font-lineheight-2);
	font-weight: var(--font-weight-4);
}
</style>
