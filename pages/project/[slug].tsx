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

import ImgZoom from "../../components/ImgZoom"
import Layout from "../../components/Layout"
import ProjectLayout from "../../components/ProjectLayout"
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

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO title={project.title} description={project.subtitle} />
      <ProjectLayout>
        <main className="mt-12">
          <div className="mb-8">
            <Link href="/#work">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="pb-8 mb-8 text-6xl font-bold tracking-tight border-b leading-headers">
            {project.title}
          </h1>
          {project.content?.document && (
            <div className="prose prose-lg prose-a:no-underline prose-a:text-darkseafoam prose-a:border-b prose-a:border-darkseafoam hover:prose-a:bg-gray-100">
              <DocumentRenderer
                document={project.content.document}
                renderers={renderers}
                componentBlocks={componentBlockRenderers}
              />
            </div>
          )}
        </main>
      </ProjectLayout>
    </Layout>
  )
}

type Project = {
  slug: string
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const projects = await query.Project.findMany({
    query: `slug projectType`,
  })

  const paths = projects
    .map((project: Project) => project.slug)
    .filter((slug: string): slug is string => !!slug)
    .map((slug: string) => `/project/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const project = await query.Project.findOne({
    where: { slug: params!.slug as string },
    query:
      "id title timeline company content {document (hydrateRelationships: true)}",
  })
  return { props: { project } }
}
