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
    <nav className="sticky top-0 z-10 flex flex-col items-center content-center w-full py-3 md:w- md:flex-row">
      <Link href="/">
        <a className="pb-2 md:pr-6">
          <LogoSvg />
        </a>
      </Link>
      <div className="flex items-center pr-4 space-x-4">
        {navigation.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
        <a
          href="https://www.linkedin.com/in/tylerbenning/"
          target="_blank"
          rel="noreferrer"
          className="pl-4 text-sm border-l md:text-base text-tertiary hover:text-primary border-primary"
        >
          LinkedIn
        </a>
        <a
          href="https://dribbble.com/tbenning"
          target="_blank"
          rel="noreferrer"
          className="text-sm md:text-base text-tertiary hover:text-primary"
        >
          Dribbble
        </a>
      </div>
    </nav>
  )
}

function NavItem({ item, key }) {
  return (
    <Link key={key} href={item.href}>
      <a
        className={`text-sm  md:text-base  ${
          item.isActive
            ? "text-darkseafoam font-semibold hover:text-darkerseafoam"
            : "text-tertiary hover:text-primary"
        }`}
      >
        {item.name}
      </a>
    </Link>
  )
}
