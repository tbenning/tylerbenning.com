import Nav from "../Nav"

type Props = {
  children: any
}

export default function Layout({ children }: Props) {
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
