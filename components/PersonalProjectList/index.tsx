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
    featuredImage: {
      alt: string
      image: {
        url: string
      }
    }
  }[]
}

export default function PersonalProjectList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
      {projects.map((project) => (
        <li key={project.id} className="pb-6  border-b-2">
          <Link href={`/project/${project.slug}`}>
            <a className="relative inline-block w-full h-48 pt-8 pl-8 mb-4 overflow-hidden bg-gray-100 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
              {project.featuredImage?.image?.url && (
                <div className="absolute w-full overflow-hidden rounded-tl-3xl top-10">
                  <Image
                    src={project.featuredImage?.image?.url}
                    alt={project.featuredImage?.alt}
                    width={768}
                    height={384}
                    objectFit="cover"
                    objectPosition="top left"
                  />
                </div>
              )}
            </a>
          </Link>
          <h3 className={`font-semibold text-lg text-primary mb-1`}>
            {project.title}
          </h3>
          <span
            className={
              "block text-lg font-serif text-secondary antialiased mb-1"
            }
          >
            {project.subtitle}
          </span>
          <Link href={`/project/${project.slug}`}>
            <a className="inline-block font-serif border-b text-md border-darkseafoam text-darkseafoam hover:bg-gray-100">
              Read More →
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
