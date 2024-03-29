import { ChevronRightIcon, DocumentTextIcon } from "@heroicons/react/outline"
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
    <ul className="border rounded-lg border-primary">
      {posts.map((post) => (
        <li
          key={post.id}
          className="border-b border-primary last-of-type:border-0 last-of-type:rounded-b-lg first-of-type:rounded-t-lg transition duration-500 ease-in-out hover:bg-gray-100"
        >
          <Link href={`/post/${post.slug}`}>
            <a className="flex items-center justify-between w-full p-3 ">
              <div className="flex items-start space-x-2">
                <DocumentTextIcon className="w-6 h-6 text-gray-800" />
                <div className="inline-block">
                  <h3 className="font-semibold text-md text-primary">
                    {post.title}
                  </h3>
                  <span className="inline-block text-sm text-tertiary">
                    {getFormattedDate(post.publishDate)}
                  </span>
                </div>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-tertiary" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function BlogIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <path
        fill="#fff"
        stroke="#94A3B8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.72 4.125A1.72 1.72 0 001 5.845v17.88a4.15 4.15 0 004.16 4.15h13.41a1.72 1.72 0 001.72-1.72V5.874a1.72 1.72 0 00-1.72-1.75H2.72z"
      ></path>
      <path
        stroke="#94A3B8"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M5.791 17.694h4.74"
      ></path>
      <path
        fill="#fff"
        stroke="#94A3B8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.041 22.745a1 1 0 00-1 .9c-.28 2.93-2 4.23-5 4.23h16.15c3 0 4.93-.87 5.27-4a1 1 0 00-1-1.09l-14.42-.04z"
      ></path>
      <path
        fill="#fff"
        stroke="#1E293B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.86 18.934a32.288 32.288 0 011.58-10.09c1.3-3.93 3.47-8.12 6.8-7.83 6.16.54 3.56 7-1.34 5.66 2.55.7 2.3 3.89-1.23 4.84-3.06.84-5.81 7.42-5.81 7.42z"
      ></path>
      <path
        stroke="#94A3B8"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M5.791 13.685h4.87M5.791 9.674h6.74"
      ></path>
    </svg>
  )
}
