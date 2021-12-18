type Props = {
  children: React.ReactNode
}

export default function BlogLayout({ children }: Props) {
  return (
    <article className="max-w-3xl mx-auto mb-10 md:mb-20">{children}</article>
  )
}
