type Props = {
  icon: JSX.Element
  title: string
  subtitle?: string
}
export default function SectionHeader({ icon, title, subtitle }: Props) {
  return (
    <header className="flex items-center">
      <div className="mr-4">{icon}</div>
      <h2 className="mr-8 text-3xl antialiased font-bold">{title}</h2>
      <hr className="flex-grow border-t-0 border-b-2 border-dotted border-primary" />
    </header>
  )
}
