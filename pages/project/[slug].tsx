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
import {
  getProjectBySlug,
  getProjectSlugs,
  serializeProject,
} from "../../lib/content/projects"

export default function ProjectPage({
  project,
  serializedContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.subtitle}
        og="og-project.png"
      />
      <ProjectLayout>
        <main className="mt-12">
          <div className="mb-8">
            <Link
              href="/#work"
              className="border-b border-gray-700 text-secondary hover:bg-gray-100"
            >
              &larr; Back to Projects
            </Link>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-6xl leading-headers">
            {project.frontmatter.title}
          </h1>
          <div className="flex items-center space-x-8">
            {project.frontmatter.company && (
              <div>
                <h2 className="font-semibold text-md">Company</h2>
                <span className="text-md text-tertiary">
                  {project.frontmatter.company}
                </span>
              </div>
            )}
            {project.frontmatter.timeline && (
              <div>
                <h2 className="font-semibold text-md">Timeline</h2>
                <span className="text-md text-tertiary">
                  {project.frontmatter.timeline}
                </span>
              </div>
            )}
          </div>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          {project.content && (
            <ProseContainer>
              <DocumentRenderer content={serializedContent} />
            </ProseContainer>
          )}
        </main>
      </ProjectLayout>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const slugs = getProjectSlugs()

  const paths = slugs.map((slug) => `/project/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params!.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    return { notFound: true }
  }

  const serializedContent = await serializeProject(project)

  return { props: { project, serializedContent } }
}
