import Nav from "../Nav"

export default function Layout({ children }) {
  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-xl">
        <Nav />
        <div className="pt-4">{children}</div>
      </div>
    </>
  )
}
