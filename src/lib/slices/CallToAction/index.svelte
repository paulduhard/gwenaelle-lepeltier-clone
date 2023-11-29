<script>

		import { PrismicRichText } from "@prismicio/svelte";
		import { PrismicLink } from '@prismicio/svelte';

		/** @type {import("@prismicio/client").Content.CallToActionSlice} */		

	    export let links;
		export let slice;

</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="cta">
			{#each slice.items as cta, index}
			<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
			
			{/each }
		</div>
	</section>

 <style>
	.cta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-8);
	}

	@media only screen and (min-width: 768px) {
		.cta {
			flex-direction: row;
		}
		}

	:global(a) {
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