import { InferGetStaticPropsType } from "next"
import Head from "next/head"

import Homepage from "../components/Homepage"
import Layout from "../components/Layout"
// Import the generated Lists API from Keystone
import { query } from ".keystone/api"

type Post = {
  id: string
  slug: string
  title: string
  subtitle: string
}
type Project = {
  id: string
  title: string
  subtitle: string
  slug: string
  isPublished: boolean
  bgColor: string
  hasDarkBg: boolean
}

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Homepage posts={posts} projects={projects} />
    </Layout>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: "id title slug subtitle" })
  const projects = await query.Project.findMany({
    query: "id title slug subtitle isPublished bgColor hasDarkBg",
  })
  return { props: { posts, projects } }
}
