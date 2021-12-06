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
    <div className="absolute z-10 flex items-center py-4 divide-x divide-gray-300">
      <div className="flex items-center pr-4 space-x-4">
        <Link href="/">
          <a className="pr-2 md:pr-4">
            <LogoSvg />
          </a>
        </Link>
        {navigation.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
      </div>
      <div className="flex items-center pl-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/tylerbenning/"
          target="_blank"
          rel="noreferrer"
          className="text-sm md:text-base text-tertiary hover:text-primary"
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
    </div>
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
