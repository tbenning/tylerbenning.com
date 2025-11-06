import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type ProjectFrontmatter = {
  title: string
  subtitle: string
  slug: string
  projectType: "personal" | "work"
  timeline?: string
  company?: string
  isPublished?: boolean
  bgColor?: string
  hasDarkBg?: boolean
  featuredImage?: string
}

export type Project = {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
  serializedContent?: any
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""))
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const mdxPath = path.join(projectsDirectory, `${slug}.mdx`)

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
    frontmatter: data as ProjectFrontmatter,
    content,
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .filter((project) => project.frontmatter.isPublished !== false)

  return projects
}

export async function serializeProject(project: Project) {
  if (project.serializedContent) {
    return project.serializedContent
  }

  const serialized = await serialize(project.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  return serialized
}
