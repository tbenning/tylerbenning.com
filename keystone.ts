import { config, list } from "@keystone-6/core"
import {
  text,
  checkbox,
  timestamp,
  image,
  relationship,
} from "@keystone-6/core/fields"
import { document } from "@keystone-6/fields-document"

import { componentBlocks } from "./lib/component-blocks"

const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    publishDate: timestamp(),
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
    company: text(),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    isPublished: checkbox({ defaultValue: false }),
    bgColor: text(),
    hasDarkBg: checkbox({ defaultValue: true }),
    featuredImage: relationship({ ref: "Image" }),
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
      ui: {
        views: require.resolve("./lib/component-blocks"),
      },
      relationships: {
        inlineImage: {
          kind: "prop",
          listKey: "Image",
          selection: "id image { url }",
        },
      },
      componentBlocks,
    }),
  },
})

const Image = list({
  fields: {
    name: text(),
    image: image(),
    publishDate: timestamp(),
  },
})

export default config({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: {
    Post,
    Project,
    Image,
  },
  images: {
    upload: "local",
    local: {
      storagePath: "public/img/uploaded",
      baseUrl: "/img/uploaded",
    },
  },
})
