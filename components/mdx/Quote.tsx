type QuoteProps = {
  children: React.ReactNode
}

export default function Quote({ children }: QuoteProps) {
  return <p className="text-xl antialiased text-tertiary">{children}</p>
}
