import { config, list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';
import { document } from '@keystone-next/fields-document';

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
  },
});

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
});