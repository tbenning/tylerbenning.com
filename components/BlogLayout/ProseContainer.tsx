import { ReactChild } from "react"

type Props = {
  children: ReactChild
}

export default function ProseContainer({ children }: Props) {
  return (
    <div className="prose prose-lg prose-a:no-underline prose-h2:font-semibold prose-h2:text-3xl prose-h3:font-semibold prose-h3:text-xl prose-h4:text-lg prose-h4:mt-0 prose-a:text-darkseafoam prose-a:border-b prose-a:border-darkseafoam hover:prose-a:bg-gray-100 prose-p:leading-7 prose-li:my-1 prose-ul:-my-2  prose-ol:-my-2">
      {children}
    </div>
  )
}
