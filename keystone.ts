import { document } from "@keystone-6/fields-document"
import { config, list } from "@keystone-6/core"
import { text } from "@keystone-6/core/fields"

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text({ isIndexed: "unique", isFilterable: true }),
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
})

export default config({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
})
