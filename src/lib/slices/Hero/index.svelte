<script>
	import { PrismicRichText, PrismicImage, PrismicLink } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;

</script>

{#if slice.variation === 'homepageHero'}
	<section class="mt-10 mb-8 max-w-screen-2xl md:mb-20 md:mx-20 hero md:flex md:gap-4">
		<div class="mb-6 mb:w-auto md:basis-1/2 md:mb-0 hero-img">
			<PrismicImage field={slice.primary.image} />
		</div>
		<div class="justify-between mx-1 md:w-auto md:basis-1/2 md:flex md:flex-col" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div class="mb-3 logo">
				<PrismicImage field={slice.primary.logo} />
			</div>
			<div class="md:pr-40">
				<PrismicRichText field={slice.primary.description} />
			</div>
		</div>
	</section>
	
	<!-- innerPageHero -->
	{:else if slice.variation === 'default'}
		<section class="mt-10 mb-6 mb-8 max-w-screen-2xl hero md:mx-20 md:flex" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div class="mb-7 md:basis-1/2 md:self-center">
				<PrismicRichText field={slice.primary.title} />
			</div>
			<div class="pl-4 border-l md:basis-1/2 md:pr-28 lg:pr-44 border-neutral-900">
				<PrismicRichText field={slice.primary.description} />
			</div>
		</section>

	<!-- contactPageHero -->
	{:else if slice.variation === 'contactPageHero'}
		<section class="grid items-center grid-cols-1 gap-6 mt-10 mb-6 md:mt-36 md:grid md:grid-cols-2 md:mx-20 max-w-screen-2xl md:mb-96 hero">

		<div class="justify-self-center md:justify-self-end hero-contact-img">
			<PrismicImage field={slice.primary.image} />
		</div>
		
		<div class="flex flex-col self-end h-full gap-16">
				<div class="mb-auto logo">
					<PrismicImage field={slice.primary.logo} />
				</div>	

			<!-- PLACEHOLDER POUR LE CTA -->
			<!-- <div class="flex flex-col items-center gap-4 mb-5 md:self-center cta md:flex-row md:gap-32">
				{#each slice.items as cta, index}
				<PrismicLink field={cta.link_url}>{cta.link_label}</PrismicLink>
				{/each }
			</div> -->

			<div class="pl-4 border-l md:pr-44 border-neutral-900">
				<PrismicRichText field={slice.primary.description} />
			</div>
		</div>
	</section>
	{/if}


<style>
	.hero :global(img) {
		object-fit: cover;
	}
	
	.hero-contact-img :global(img) {
		width: 200px;
	}

	@media (min-width: 768px) {
		.hero-contact-img :global(img) {
			width: 400px;
		}
	}
	
	
	.hero-img :global(img) {
		aspect-ratio: 5/7;
		width: 100%;
	}
	
	.logo :global(img) {
		width: 100%;
		max-width: 500px;
		height: fit-content;
	}

	:global(a) {
		/* font-size: 0.85rem; */
        position: relative;
        text-decoration: none;
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

	.hero :global(em) {
		font-style: normal;
		text-decoration: underline;
	}
</style>