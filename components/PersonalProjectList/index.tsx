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
    <ul className="flex flex-wrap overflow-hidden rounded-lg">
      {projects.map((project) => (
        <li
          key={project.id}
          className="w-full overflow-hidden md:w-1/2 lg:w-1/4"
        >
          <Link href={`/project/${project.slug}`}>
            <a
              className="relative inline-block w-full pt-6 pl-6 h-80 transition duration-500 ease-in-out hover:opacity-80"
              style={{ background: project.bgColor ? project.bgColor : "#333" }}
            >
              <h3
                className={`font-serif text-xl ${
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
