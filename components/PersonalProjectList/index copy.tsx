import Image from "next/image"
import Link from "next/link"

type Props = {
  projects: [
    {
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
    }
  ]
}

export default function PersonalProjectList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <li
          key={project.id}
          className="overflow-hidden rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:translate-y-1"
        >
          <Link href={`/project/${project.slug}`}>
            <a
              className="relative inline-block w-full pt-6 pl-6 h-80"
              style={{ background: project.bgColor ? project.bgColor : "#333" }}
            >
              <h3
                className={`font-semibold text-lg ${
                  project.hasDarkBg ? `text-white` : `text-primary`
                }`}
              >
                {project.title}
              </h3>
              <span
                className={`text-sm ${
                  project.hasDarkBg
                    ? `text-white text-opacity-80`
                    : `text-secondary`
                }`}
              >
                {project.subtitle}
              </span>

              {project.featuredImage?.image?.url && (
                <div
                  className="absolute overflow-hidden rounded-tl-3xl"
                  style={{ top: "120px", width: "200%" }}
                >
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
        </li>
      ))}
    </ul>
  )
}
