<script>

		import { PrismicLink } from '@prismicio/svelte';

		/** @type {import("@prismicio/client").Content.CallToActionSlice} */		

		export let slice;

</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="mb-20 max-w-screen-2xl">
	<div class="flex flex-col items-center justify-center gap-5 cta md:flex-row md:gap-32">
			{#each slice.items as cta, index}
			<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
			{/each }
		</div>
	</section>

 <style>
	.cta :global(a) {
		font-size: 0.85rem;
        position: relative;
        /* text-decoration: none; */
	}

	.cta :global(a::after) {
    content: "";
    position: absolute;
	left: 50%;
  	transform: translateX(-50%);
	top: -4px;
    bottom: -5px;
    width: 5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    }
 </style>