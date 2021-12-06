export default function SectionHeader({ icon, title, subtitle }) {
  return (
    <header className="flex flex-col items-center mb-8">
      <div>{icon}</div>
      <h2 className="mt-2 mb-2 font-serif text-4xl antialiased">{title}</h2>
      <p className="text-md text-secondary">{subtitle}</p>
    </header>
  )
}
