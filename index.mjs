import fetch from "node-fetch";

const JSON_REGEX = /SS\.serverBootstrap\ \=\ (\{[\S\s]*?\});[^\\]/;

export function extractBootstrap(html) {
    const match = html.match(JSON_REGEX);
    if (!match) {
        throw new Error('Could not find SS.serverBootstrap JSON on the page');
    }
    return JSON.parse(match[1]);
}

export async function getClass(skillshare_class_id, Cookie) {
    const url = new URL(`https://www.skillshare.com/classes/x/${skillshare_class_id}/`)
    const res = await fetch(url,
        {
            headers: {
                Cookie
            }
        }
    )
    if (res.url.includes('/browse')) throw new Error(`Class ${skillshare_class_id} no longer avalible.`)
    if (res.status == 302) throw new Error(`Class ${skillshare_class_id} has been permanantly removed.`)
    if (!res.ok) throw new Error(`${res.statusText}: ${url}`);
    const html = await res.text();
    return extractBootstrap(html);
}