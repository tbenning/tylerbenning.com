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

export default function SectionProjectList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-1 gap-5">
      {projects.map((project) => (
        <li key={project.id} className="flex items-center space-x-5">
          <Link href={`/project/${project.slug}`}>
            <a className="inline-block w-full p-6 bg-gray-100 rounded-lg md:w-1/2 h-80 transition duration-500 ease-in-out hover:shadow-lg"></a>
          </Link>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <span className="inline-block text-secondary">
              {project.subtitle}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
