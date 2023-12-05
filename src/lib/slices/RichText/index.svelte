<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="mx-8 mt-8 mb-6 richtext md:flex">
	<div class="mb-7 h2 basis-1/2">
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