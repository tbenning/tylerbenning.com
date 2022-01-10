// @ts-nocheck
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer"
import { NotEditable } from "@keystone-6/fields-document/component-blocks"
import { InferRenderersForComponentBlocks } from "@keystone-6/fields-document/component-blocks"
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import Link from "next/link"

import BlogLayout from "../../components/BlogLayout"
import ImgZoom from "../../components/ImgZoom"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { componentBlocks } from "../../lib/component-blocks"
import { query } from ".keystone/api"

const componentBlockRenderers: InferRenderersForComponentBlocks<
  typeof componentBlocks
> = {
  quote: (props) => {
    return (
      <div
        style={{
          borderLeft: "3px solid #CBD5E0",
          paddingLeft: 16,
        }}
      >
        <div style={{ fontStyle: "italic", color: "#4A5568" }}>
          {props.content}
        </div>
        <div style={{ fontWeight: "bold", color: "#718096" }}>
          <NotEditable>— </NotEditable>
          {props.attribution}
        </div>
      </div>
    )
  },
  image: (props) => {
    const imgUrl = props.image?.data?.image?.url
    const altText = props.image?.data?.alt
    return (
      <div className="max-w-full max-h-full my-4">
        <ImgZoom
          src={imgUrl}
          alt={altText}
          width={props.width}
          height={props.height}
        />
        <span className="text-sm text-tertiary">{props.caption}</span>
      </div>
    )
  },
}

const renderers: DocumentRendererProps["renderers"] = {
  // use your editor's autocomplete to see what other renderers you can override
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>
    },
  },

  block: {
    paragraph: ({ children, textAlign }) => {
      return <p style={{ textAlign }}>{children}</p>
    },
  },
}

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
      <SEO title={post.title} description={post.subtitle} />
      <BlogLayout>
        <main className="mt-12">
          <div className="mb-8 ">
            <Link href="/#writing">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Posts
              </a>
            </Link>
          </div>
          <h1 className="mb-6 text-6xl font-bold tracking-tight leading-headers">
            {post.title}
          </h1>
          {getFormattedDate && (
            <span className="block pb-8 mb-8 text-xl border-b text-tertiary">
              {getFormattedDate}
            </span>
          )}
          {post.content?.document && (
            <div className="prose prose-lg prose-a:no-underline prose-h2:font-semibold prose-h2:text-3xl prose-h3:font-semibold prose-h3:text-xl prose-h4:text-lg prose-a:text-darkseafoam prose-a:border-b prose-a:border-darkseafoam hover:prose-a:bg-gray-100">
              <DocumentRenderer
                document={post.content.document}
                renderers={renderers}
                componentBlocks={componentBlockRenderers}
              />
            </div>
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
