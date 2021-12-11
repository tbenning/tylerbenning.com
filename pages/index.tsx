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
}

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Homepage posts={posts} />
    </Layout>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: "id title slug" })
  return { props: { posts } }
}
