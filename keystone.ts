import { config, list } from "@keystone-6/core"
import { text, checkbox } from "@keystone-6/core/fields"
import { document } from "@keystone-6/fields-document"

const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    isPublished: checkbox({ defaultValue: false }),
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

const Project = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text({ validation: { isRequired: true } }),
    timeline: text(),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    isPublished: checkbox({ defaultValue: false }),
    bgColor: text(),
    hasDarkBg: checkbox({ defaultValue: true }),
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
  lists: { Post, Project },
})
