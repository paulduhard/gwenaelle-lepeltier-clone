<script>

		import { PrismicLink } from '@prismicio/svelte';

		/** @type {import("@prismicio/client").Content.CallToActionSlice} */		

		export let slice;

</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="max-w-screen-2xl">
	<div class="flex flex-col items-center justify-center gap-7 cta md:flex-row md:gap-32">
			{#each slice.items as cta, index}
			<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
			{/each }
		</div>
	</section>

 <style>
	:global(a) {
        position: relative;
	}

	.cta :global(a::after) {
    content: "";
    position: absolute;
	left: 50%;
  	transform: translateX(-50%);
	top: -7px;
    bottom: -7px;
    width: 5rem;
    border-top: 1.5px solid black;
    border-bottom: 1.5px solid black;
    }
 </style>