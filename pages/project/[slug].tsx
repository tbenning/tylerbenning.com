// @ts-nocheck

import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import Link from "next/link"

import DocumentRenderer from "../../components/BlogLayout/DocumentRenderer"
import ProseContainer from "../../components/BlogLayout/ProseContainer"
import Layout from "../../components/Layout"
import ProjectLayout from "../../components/ProjectLayout"
import SEO from "../../components/SEO"
import { query } from ".keystone/api"

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.subtitle}
        og="og-project.png"
      />
      <ProjectLayout>
        <main className="mt-12">
          <div className="mb-8">
            <Link href="/#work">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="mb-8 text-6xl font-bold tracking-tight leading-headers">
            {project.title}
          </h1>
          <div className="flex items-center space-x-8">
            {project.company && (
              <div>
                <h2 className="font-semibold text-md">Company</h2>
                <span className="text-md text-tertiary">{project.company}</span>
              </div>
            )}
            <div>
              <h2 className="font-semibold text-md">Timeline</h2>
              <span className="text-md text-tertiary">{project.timeline}</span>
            </div>
          </div>
          <hr className="my-8 border-primary" />
          {project.content?.document && (
            <ProseContainer>
              <DocumentRenderer content={project} />
            </ProseContainer>
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
