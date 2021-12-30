type Props = {
  icon: JSX.Element
  title: string
  subtitle?: string
}
export default function SectionHeader({ icon, title, subtitle }: Props) {
  return (
    <header className="flex flex-col items-center mb-8">
      <div>{icon}</div>
      <h2 className="mt-2 mb-1 text-2xl font-semibold">{title}</h2>
      {/* <h2 className="mt-2 mb-2 font-serif text-4xl antialiased">{title}</h2> */}
      {/* <p className="text-md text-secondary">{subtitle}</p> */}
      {/* <p className="text-lg text-secondary">{subtitle}</p> */}
    </header>
  )
}
