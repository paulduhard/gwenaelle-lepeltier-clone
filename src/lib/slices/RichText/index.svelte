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
	font-size: var(--font-size-6);
	font-style: italic;
	font-weight: var(--font-weight-2);
	text-align: center;
}
:global(h2) {
	font-style: italic;
	font-weight: var(--font-weight-2);
	text-align: center;
}
.text {
	width: 100%;
	max-width: var(--size-content-3);
	line-height: var(--font-lineheight-2);
	font-weight: var(--font-weight-4);
}
</style>
