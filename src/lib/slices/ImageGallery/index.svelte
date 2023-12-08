<script>
	import { PrismicImage } from "@prismicio/svelte";
  
	/** @type {import("@prismicio/client").Content.ImageGallerySlice} */
	export let slice;
  
	function getGridClass() {
	  const numImages = slice.items.length;
	  switch (numImages) {
		case 1:
		  return "grid-cols-1";
		case 2:
		  return "md:grid-cols-2";
		case 3:
		  return "md:grid-cols-3 three_img";
		case 4:
		  return "md:grid-cols-2 four_img";
		default:
		  return "md:grid-cols-4"; // Par défaut, utilisez une grille de 2 colonnes pour d'autres cas
	  }
	}
  </script>
  
  <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="max-w-screen-2xl mb-28 md:mx-20">
	  <div class={`grid gap-3 mb-20 last:mb-5 ${getGridClass()}`}>
		{#each slice.items as galleryRepeater, index}
		  <PrismicImage field={galleryRepeater.image} />
		{/each}
	  </div>

  </section>
  
  <style>
	section :global(img) {
		width: 100%;
		object-fit: cover;
	}
	
	/* Styles spécifiques pour 3 images */
	@media (max-width: 768px) {
		.three_img :global(img) {
			outline: 1px solid red;
			aspect-ratio: 3/4;
	  }
	}
  
	/* Styles spécifiques pour 4 images */
	@media (max-width: 768px) {
	  .four_img :global(img:nth-child(1)),
	  .four_img :global(img:nth-child(2)) {
		aspect-ratio: 3/2;
	  }
	  .four_img :global(img:nth-child(3)),
	  .four_img :global(img:nth-child(4)) {
		aspect-ratio: 3/4;
	  }
	}
  
	/* Styles pour full screen */
	.full_screen :global(img) {
	  width: 100vw;
	  height: 100vh;
	  object-fit: cover;
	}
  </style>
  