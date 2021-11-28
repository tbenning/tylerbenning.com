import Link from "next/link"
export default function Nav() {
  return (
    <div className="my-4 space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  )
}
