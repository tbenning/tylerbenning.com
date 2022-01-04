import "react-medium-image-zoom/dist/styles.css"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"

import useWindowSize from "../../lib/hooks/useWindowSize"

type Props = {
  src: string
  alt: string
  width: number
  height: number
}

export default function ImgZoom({ src, alt, width, height }: Props) {
  const windowSize = useWindowSize()
  const isXLargeScreen = windowSize?.width > 1440
  return (
    <Zoom zoomMargin={isXLargeScreen ? 160 : 20}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="scale-down"
      />
    </Zoom>
  )
}
