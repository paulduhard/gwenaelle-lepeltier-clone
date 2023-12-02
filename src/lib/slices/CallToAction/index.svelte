<script>

		import { PrismicLink } from '@prismicio/svelte';

		/** @type {import("@prismicio/client").Content.CallToActionSlice} */		

		export let slice;

</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="flex flex-col items-center justify-center gap-6 mb-24 cta md:flex-row md:gap-32">
			{#each slice.items as cta, index}
			<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
			{/each }
		</div>
	</section>

 <style>
	:global(a) {
		color: var(--text-2);
        position: relative;
        text-decoration: none;
	}

	.cta :global(a::after) {
    content: "";
    position: absolute;
    left: 10%;
	top: -4px;
    bottom: -5px;
    width: 80%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    }
 </style>