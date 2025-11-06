import { InferGetStaticPropsType } from "next"

import Homepage from "../components/Homepage"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { getAllPosts } from "../lib/content/posts"
import { getAllProjects } from "../lib/content/projects"

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Transform posts to match expected format
  const formattedPosts = posts.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.frontmatter.title,
    subtitle: post.frontmatter.subtitle,
    publishDate: new Date(post.frontmatter.publishDate),
  }))

  // Transform projects to match expected format
  const formattedProjects = projects.map((project) => ({
    id: project.slug,
    title: project.frontmatter.title,
    subtitle: project.frontmatter.subtitle,
    slug: project.slug,
    projectType: project.frontmatter.projectType,
    isPublished: project.frontmatter.isPublished ?? true,
    bgColor: project.frontmatter.bgColor || "",
    hasDarkBg: project.frontmatter.hasDarkBg ?? true,
    timeline: project.frontmatter.timeline || "",
    company: project.frontmatter.company || "",
    featuredImage: project.frontmatter.featuredImage
      ? {
          alt: "",
          image: {
            url: project.frontmatter.featuredImage,
          },
        }
      : undefined,
  }))

  return (
    <Layout>
      <SEO />
      <Homepage posts={formattedPosts} projects={formattedProjects} />
    </Layout>
  )
}

// Here we load all the posts and projects from markdown files
export async function getStaticProps() {
  const posts = await getAllPosts()
  const projects = await getAllProjects()

  return { props: { posts, projects } }
}
