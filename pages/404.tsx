import Link from "next/link"

import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <h1 className="mb-4 font-serif text-4xl">404: Couldn't Find this Page</h1>
      <p className="mb-2 text-lg text-secondary">
        Hmm, looks like you accidentally got directed to a page that doesn't
        exist.
      </p>
      <Link href="/">Back Home</Link>
    </Layout>
  )
}
