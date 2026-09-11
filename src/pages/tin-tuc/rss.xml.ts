import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { loadYaml, type SiteData } from '../../utils/data';

export async function GET(context: APIContext) {
  const site = loadYaml<SiteData>('site.yml');

  const posts = (await getCollection('posts', p => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${site.company_short} — Tin tức & Kiến thức`,
    description: site.tagline,
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/tin-tuc/${post.id}/`,
    })),
    customData: '<language>vi</language>',
  });
}
