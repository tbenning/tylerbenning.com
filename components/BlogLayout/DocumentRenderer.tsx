// @ts-nocheck
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer"
import { InferRenderersForComponentBlocks } from "@keystone-6/fields-document/component-blocks"
import { InferGetStaticPropsType } from "next"

import ImgZoom from "../../components/ImgZoom"
import { componentBlocks } from "../../lib/component-blocks"

const componentBlockRenderers: InferRenderersForComponentBlocks<
  typeof componentBlocks
> = {
  quote: (props) => {
    return <p className="text-xl antialised text-tertiary">{props.content}</p>
  },
  image: (props) => {
    const imgUrl = props?.image?.data.image.url
    const altText = props?.image?.data.alt
    const width = parseInt(props.width)
    const height = parseInt(props.height)

    return (
      <div className="max-w-full max-h-full my-4">
        <ImgZoom src={imgUrl} alt={altText} width={width} height={height} />
        <span className="text-sm text-tertiary">{props.caption}</span>
      </div>
    )
  },
}

const renderers: DocumentRendererProps["renderers"] = {
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>
    },
  },

  block: {
    paragraph: ({ children, textAlign }) => {
      return <p style={{ textAlign }}>{children}</p>
    },
    layout: ({ children, layout }) => {
      return (
        <div className={`grid grid-cols-1 md:grid-cols-${layout.length} gap-4`}>
          {children.map((child, i) => (
            <div key={i}>{child}</div>
          ))}
        </div>
      )
    },
  },
}

export default function ProjectPage({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DocumentRenderer
      document={content.content.document}
      renderers={renderers}
      componentBlocks={componentBlockRenderers}
    />
  )
}
