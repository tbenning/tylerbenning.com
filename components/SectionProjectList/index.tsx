import Image from "next/image"
import Link from "next/link"

type Props = {
  projects: {
    id: string
    title: string
    subtitle: string
    slug: string
    isPublished: boolean
    bgColor: string
    hasDarkBg: boolean
    projectType: string
    timeline: string
    company: string
    featuredImage: {
      alt: string
      image: {
        url: string
      }
    }
  }[]
}

export default function SectionProjectList({ projects }: Props) {
  return (
    <ul className="pb-12 border-b-2 space-y-12">
      {projects.map((project) => (
        <li
          key={project.id}
          className="flex flex-col items-center md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-8 lg:space-x-12"
        >
          <Link href={`/project/${project.slug}`}>
            <a className="flex w-full px-8 pt-8 overflow-hidden bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 transition duration-500 ease-in-out hover:shadow-lg">
              {project?.featuredImage && (
                <div className="flex overflow-hidden shadow-md rounded-t-md">
                  <Image
                    src={project.featuredImage.image.url}
                    alt={project.featuredImage.alt}
                    width={768}
                    height={384}
                    objectFit="cover"
                    objectPosition="top left"
                  />
                </div>
              )}
            </a>
          </Link>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <span className="block mb-1 text-xs tracking-widest uppercase text-tertiary">
              {project.company}
            </span>
            <h3 className="mb-1 text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <span className="block mb-1 antialiased font-system text-secondary">
              {project.subtitle}
            </span>
            <Link href={`/project/${project.slug}`}>
              <a className="inline-block antialiased border-b text-md font-system border-darkseafoam text-darkseafoam hover:bg-gray-100">
                View Case Study →
              </a>
            </Link>
            {/* <Link href={`/project/${project.slug}`}>
              <a className="w-full text-center md:text-left md:w-auto btn">
                View Case Study
              </a>
            </Link> */}
          </div>
        </li>
      ))}
    </ul>
  )
}
