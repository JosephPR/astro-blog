import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Joseph Reilly | Blog',
  description: 'Artificial Intelligence and Development',
  site: 'https://astro-blog-josephpr.vercel.app/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});