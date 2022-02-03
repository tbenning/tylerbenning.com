import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
  const router = useRouter()
  const navigation = [
    { name: "Home", href: "/#", isActive: router.pathname === "/" },
    {
      name: "Work",
      href: "/#work",
      isActive: false,
    },
    { name: "About", href: "/about", isActive: router.pathname === "/about" },
  ]
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/80 border-primary backdrop-blur-md">
      <div className="container flex items-center justify-between w-full px-4 pt-2 pb-2 mx-auto lg:px-0 max-w-screen-lg md:flex-row">
        <Link href="/">
          <a className="py-1 my-1 mr-0 font-sans text-sm antialiased font-semibold border-b border-gray-700 border-opacity-0 hover:border-opacity-100 md:mr-6 md:inline-block text-secondary">
            Tyler&nbsp;Benning
          </a>
        </Link>

        <div className="flex md:items-center">
          <div className="space-x-5">
            {navigation.map((item) => (
              <NavItem item={item} key={item.name} />
            ))}
          </div>
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
        className={`text-sm py-1 hover:bg-gray-100 hover:border-b  ${
          item.isActive
            ? "text-darkseafoam hover:text-darkerseafoam  hover:border-darkerseafoam"
            : "text-secondary hover:text-primary hover:border-gray-700"
        }`}
      >
        {item.name}
      </a>
    </Link>
  )
}
