// @ts-nocheck
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import Link from "next/link"

import BlogLayout from "../../components/BlogLayout"
import DocumentRenderer from "../../components/BlogLayout/DocumentRenderer"
import ProseContainer from "../../components/BlogLayout/ProseContainer"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { query } from ".keystone/api"

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const getFormattedDate = new Date(post.publishDate).toLocaleDateString(
    "en-US",
    options
  )
  return (
    <Layout>
      <SEO title={post.title} description={post.subtitle} og="og-blog.png" />
      <BlogLayout>
        <main className="mt-12">
          <div className="mb-8 ">
            <Link href="/#writing">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Posts
              </a>
            </Link>
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:mb-6 md:text-6xl leading-headers">
            {post.title}
          </h1>
          {getFormattedDate && (
            <span className="block pb-8 mb-8 text-xl border-b-2 border-dotted text-tertiary">
              {getFormattedDate}
            </span>
          )}
          {post.content?.document && (
            <ProseContainer>
              <DocumentRenderer content={post} />
            </ProseContainer>
          )}
        </main>
      </BlogLayout>
    </Layout>
  )
}

type Post = {
  slug: string
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await query.Post.findMany({
    query: `slug`,
  })

  const paths = posts
    .map((post: Post) => post.slug)
    .filter((slug: string): slug is string => !!slug)
    .map((slug: string) => `/post/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await query.Post.findOne({
    where: { slug: params!.slug as string },
    query:
      "id title publishDate content {document (hydrateRelationships: true)}",
  })
  return { props: { post } }
}
