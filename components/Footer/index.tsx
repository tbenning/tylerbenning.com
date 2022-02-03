export default function Footer() {
  const getYear = new Date().getFullYear()
  return (
    <footer>
      <div className="container flex flex-wrap items-baseline justify-between px-4 pt-6 pb-12 mx-auto border-t-2 border-dotted space-y-3 md:space-y-0 md:flex-nowrap lg:px-0 max-w-screen-lg">
        <ul className="flex items-center text-sm text-secondary space-x-3">
          <li>© {getYear}</li>
          <li className="hidden text-gray-400 md:inline-block">&bull;</li>
          <li className="hidden md:inline-block">
            Built with Next.js, Tailwind, and Keystone.js
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <ExternalLink
            href="https://www.linkedin.com/in/tylerbenning/"
            title="LinkedIn"
          />
          <ExternalLink href="https://github.com/tbenning" title="GitHub" />
          <ExternalLink
            href="https://twitter.com/tylerbenning_"
            title="Twitter"
          />
        </div>
      </div>
    </footer>
  )
}

type Link = {
  href: string
  title: string
}

export function ExternalLink({ href, title }: Link) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center mt-1 text-sm border-b border-gray-700 text-secondary hover:text-primary hover:border-b hover:bg-gray-100"
    >
      <span className="mr-1">{title}</span>
      <span className="mb-1 leading-snug">↗</span>
    </a>
  )
}
