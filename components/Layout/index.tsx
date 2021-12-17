import Nav from "../Nav"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-4 md:px-10">
          <main className="pt-4">{children}</main>
        </div>
      </div>
    </>
  )
}
