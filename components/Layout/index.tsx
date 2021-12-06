import Nav from "../Nav"

export default function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-4 md:px-10">
          <Nav />
          <main className="pt-4">{children}</main>
        </div>
      </div>
    </>
  )
}
