import { ArrowNarrowRightIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"

import LogoSvg from "./LogoSvg"

export default function Nav() {
  const router = useRouter()
  const navigation = [
    { name: "Home", href: "/", isActive: router.pathname === "/" },
    { name: "About", href: "/about", isActive: router.pathname === "/about" },
  ]
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-300">
      <div className="container flex flex-col items-center content-center justify-between w-full px-4 pt-2 pb-1 mx-auto bg-white max-w-screen-xl md:flex-row md:px-10">
        <div className="flex items-center pr-4 space-x-5">
          <Link href="/">
            <a className="pb-2 md:pr-6 md:pb-0">
              <LogoSvg />
            </a>
          </Link>
          {navigation.map((item) => (
            <NavItem item={item} key={item.name} />
          ))}
        </div>
        <div className="flex items-center pr-4 space-x-5">
          <a
            href="https://www.linkedin.com/in/tylerbenning/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center pl-4 text-sm md:text-base text-secondary hover:text-primary "
          >
            <span className="mr-1">LinkedIn</span>
            <ArrowNarrowRightIcon className="w-4 h-4 text-gray-400 -rotate-45" />
          </a>
          <a
            href="https://dribbble.com/tbenning"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm md:text-base text-secondary hover:text-primary"
          >
            <span className="mr-1">Dribbble</span>
            <ArrowNarrowRightIcon className="w-4 h-4 text-gray-400 -rotate-45" />
          </a>
        </div>
      </div>
    </nav>
  )
}

type Props = {
  item: {
    href: string
    isActive: boolean
    name: string
  }
}

function NavItem({ item }: Props) {
  return (
    <Link key={item.name} href={item.href}>
      <a
        className={`text-sm  md:text-base  ${
          item.isActive
            ? "text-darkseafoam font-semibold hover:text-darkerseafoam"
            : "text-secondary hover:text-primary"
        }`}
      >
        {item.name}
      </a>
    </Link>
  )
}
