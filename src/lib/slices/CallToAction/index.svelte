<script>

		import { PrismicLink } from '@prismicio/svelte';

		/** @type {import("@prismicio/client").Content.CallToActionSlice} */		

		export let slice;

</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="cta mb-24 flex flex-col justify-center items-center gap-6 md:flex-row md:gap-32">
			{#each slice.items as cta, index}
			<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
			{/each }
		</div>
	</section>

 <style>
	:global(a) {
		font-family: "forma-djr-deck, sans-serif";
		color: var(--text-2);
        position: relative;
        text-decoration: none;
	}

	:global(a::after) {
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