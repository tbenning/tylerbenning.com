import { InferGetStaticPropsType } from "next"
import Head from "next/head"

import Homepage from "../components/Homepage"
import Layout from "../components/Layout"
import SectionBlogList from "../components/SectionBlogList"
import SectionHeader from "../components/SectionHeader"
import SectionWorkList from "../components/SectionWorkList"
import { PentaIcon, CircleIcon, DiamondIcon } from "../components/StripeIcons"
// Import the generated Lists API from Keystone
import { query } from ".keystone/api"

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Homepage />

      <section className="max-w-3xl mx-auto mb-10">
        <SectionHeader
          title="Work"
          subtitle="Where I've been for the last few years"
          icon={
            <div className="transition duration-200 ease-in-out hover:animate-bounce">
              <PentaIcon />
            </div>
          }
        />
        <SectionWorkList />
      </section>

      <section className="max-w-3xl mx-auto mb-10">
        <SectionHeader
          title="Writing"
          subtitle="A smattering of tips, tricks, and thoughts from along the way"
          icon={
            <div className="hover:animate-spin">
              <CircleIcon />
            </div>
          }
        />
        <SectionBlogList posts={posts} />
      </section>

      <section className="mx-auto">
        <SectionHeader
          title="Goodies"
          subtitle="Tidbits and snippets of projects over time"
          icon={
            <div className="hover:animate-pulse">
              <DiamondIcon />
            </div>
          }
        />
      </section>
    </Layout>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: "id title slug" })
  return { props: { posts } }
}
