import { ArrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"

type Props = {
  posts: [
    {
      id: string
      title: string
      subtitle: string
      slug: string
      publishDate: Date
    }
  ]
}

export default function SectionBlogList({ posts }: Props) {
  function getFormattedDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    return formattedDate
  }
  return (
    <div className="-mt-10 md:-mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
      <div className="col-span-1"></div>
      <div className="col-span-2">
        {posts.map((post) => (
          <div
            className="border-b-2 border-dotted last-of-type:border-0"
            key={post.id}
          >
            <Link href={`/post/${post.slug}`}>
              <a className="py-4 transition duration-500 ease-in-out group md:py-8 grid gap-1 md:gap-4 grid-cols-1 md:grid-cols-4 hover:bg-gray-100">
                <div className="col-span-1">
                  <span className="inline-block text-sm text-tertiary">
                    {getFormattedDate(post.publishDate)}
                  </span>
                </div>
                <div className="flex justify-between col-span-3">
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-primary">
                      {post.title}
                    </h3>
                    <p className="text-md text-tertiary">{post.subtitle}</p>
                  </div>
                  <ArrowRightIcon className="flex-initial w-5 mr-4 text-gray-400 transition duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
