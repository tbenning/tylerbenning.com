import { InferGetStaticPropsType } from "next"

import Homepage from "../components/Homepage"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { query } from ".keystone/api"

type Post = {
  id: string
  slug: string
  title: string
  subtitle: string
  publishDate: Date
}
type Project = {
  id: string
  title: string
  subtitle: string
  slug: string
  isPublished: boolean
  bgColor: string
  hasDarkBg: boolean
  projectType: string
  company: string
  timeline: string
  featuredImage: {
    alt: string
    image: {
      url: string
    }
  }
}

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO />
      <Homepage posts={posts} projects={projects} />
    </Layout>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({
    query: "id title publishDate slug subtitle",
  })
  const projects = await query.Project.findMany({
    query:
      "id title slug company timeline projectType subtitle isPublished bgColor hasDarkBg featuredImage { alt image { url }}",
  })
  return { props: { posts, projects } }
}
