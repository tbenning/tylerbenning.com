import Nav from "../Nav"

export default function Layout({ children }) {
  return (
    <>
      <div className="container px-4 mx-auto md:px-10 max-w-screen-xl">
        <Nav />
        <div className="pt-4">{children}</div>
      </div>
    </>
  )
}
