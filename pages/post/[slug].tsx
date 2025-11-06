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
import {
  getPostBySlug,
  getPostSlugs,
  serializePost,
} from "../../lib/content/posts"

export default function PostPage({
  post,
  serializedContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const getFormattedDate = new Date(
    post.frontmatter.publishDate,
  ).toLocaleDateString("en-US", options)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.subtitle}
        og="og-blog.png"
      />
      <BlogLayout>
        <main className="mt-12">
          <div className="mb-8 ">
            <Link
              href="/#writing"
              className="border-b border-gray-700 text-secondary hover:bg-gray-100"
            >
              &larr; Back to Posts
            </Link>
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:mb-6 md:text-6xl leading-headers">
            {post.frontmatter.title}
          </h1>
          {getFormattedDate && (
            <span className="block pb-8 mb-8 text-xl border-b-2 border-dotted text-tertiary">
              {getFormattedDate}
            </span>
          )}
          {post.content && (
            <ProseContainer>
              <DocumentRenderer content={serializedContent} />
            </ProseContainer>
          )}
        </main>
      </BlogLayout>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const slugs = getPostSlugs()

  const paths = slugs.map((slug) => `/post/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params!.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  }

  const serializedContent = await serializePost(post)

  return { props: { post, serializedContent } }
}
