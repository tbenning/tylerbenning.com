import { ReactChild } from "react"

type Props = {
  children: ReactChild
}

export default function ProseContainer({ children }: Props) {
  return (
    <div className="antialiased prose prose-xl prose-a:no-underline prose-h2:font-bold prose-h2:text-3xl prose-h3:font-semibold prose-h2:font-sans prose-h3:font-sans prose-h3:text-xl prose-h4:text-xl prose-h4:mt-0 prose-a:text-darkseafoam prose-a:border-b prose-a:border-darkseafoam hover:prose-a:bg-gray-100 prose-li:my-1 prose-ul:-my-1 prose-ol:-my-2 font-serif leading-8 prose-blockquote:not-italic prose-blockquote:text-2xl prose-blockquote:text-tertiary -tracking-[.005em]">
      {children}
    </div>
  )
}
