<script>
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import('../../prismicio-types').SettingsDocumentData['adress']} */
	export let data;
</script>

    <div>
        <PrismicImage field={data.logo} />
        <PrismicRichText field={data.adress} />
        {data.phone}
    </div>

<style>

</style>