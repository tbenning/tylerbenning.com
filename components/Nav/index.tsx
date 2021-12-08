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
    <nav className="relative top-0 z-10 flex flex-col items-center content-center w-full py-3 md:w- md:flex-row">
      <Link href="/">
        <a className="pb-2 md:pr-6">
          <LogoSvg />
        </a>
      </Link>
      <div className="flex items-center pr-4 space-x-4">
        {navigation.map((item) => (
          <NavItem item={item} />
        ))}
        <a
          href="https://www.linkedin.com/in/tylerbenning/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pl-4 text-sm border-l md:text-base text-secondary hover:text-primary border-primary"
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
