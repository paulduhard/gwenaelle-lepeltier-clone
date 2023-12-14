export const prerender = 'auto';

import { createClient} from '$lib/prismicio';

/** @type {import('./types').PageServerLoad} */
export async function load({ params }) {
    const client = createClient();

    const nav = await client.getSingle('nav');
    const settings = await client.getSingle('settings')
    const page = await client.getByUID('page', params.uid ? params.uid : 'home');

    return {
        page,
        nav,
        settings
    };
}
