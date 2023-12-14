export const prerender = 'auto';

import { createClient} from '$lib/prismicio';

/** @type {import('./types').PageServerLoad} */
export async function load() {
    const client = createClient();

    const document = await client.getAllByType('page')
    const nav = await client.getSingle('nav');
    const settings = await client.getSingle('settings')
    
    return {
        document,
        nav,
        settings,
    };
}
