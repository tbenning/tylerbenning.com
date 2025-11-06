import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type PostFrontmatter = {
  title: string
  subtitle: string
  slug: string
  publishDate: string
  isPublished?: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  serializedContent?: any
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => post.frontmatter.isPublished !== false)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.publishDate).getTime()
      const dateB = new Date(b.frontmatter.publishDate).getTime()
      return dateB - dateA
    })

  return posts
}

export async function serializePost(post: Post) {
  if (post.serializedContent) {
    return post.serializedContent
  }

  const serialized = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  return serialized
}
