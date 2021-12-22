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
    }
  ]
}

export default function PersonalProjectList({ projects }: Props) {
  return (
    <ul className="flex flex-wrap overflow-hidden rounded-lg">
      {projects.map((project) => (
        <li key={project.id} className="w-full md:w-1/2 lg:w-1/4">
          <Link href={`/project/${project.slug}`}>
            <a
              className="inline-block w-full p-6 h-80 transition duration-500 ease-in-out hover:opacity-80"
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
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
