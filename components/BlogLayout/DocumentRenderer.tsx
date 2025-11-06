import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Image from "../mdx/Image"
import Quote from "../mdx/Quote"

const components = {
  // eslint-disable-next-line @next/next/no-img-element
  img: (props: any) => <img {...props} alt={props.alt || ""} />,
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode
    [key: string]: any
  }) => {
    const style = props.style || {}
    if (props.textAlign) {
      style.textAlign = props.textAlign
    }
    return <p style={style}>{children}</p>
  },
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong>{children}</strong>
  ),
  Image,
  Quote,
}

type DocumentRendererProps = {
  content: MDXRemoteSerializeResult
}

export default function DocumentRenderer({ content }: DocumentRendererProps) {
  return <MDXRemote {...content} components={components} />
}
