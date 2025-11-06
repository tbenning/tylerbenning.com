import ImgZoom from "../ImgZoom"

type ImageProps = {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  caption?: string
}

export default function Image({
  src,
  alt = "",
  width = 768,
  height = 384,
  caption,
}: ImageProps) {
  const widthNum = typeof width === "string" ? parseInt(width) : width
  const heightNum = typeof height === "string" ? parseInt(height) : height

  return (
    <div className="max-w-full max-h-full my-4">
      <ImgZoom src={src} alt={alt} width={widthNum} height={heightNum} />
      {caption && <span className="text-sm text-tertiary">{caption}</span>}
    </div>
  )
}
