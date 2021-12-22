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
  const isLargeScreen = windowSize.width > 1400
  return (
    <Zoom zoomMargin={isLargeScreen ? 200 : 0}>
      <Image
        src={src}
        alt={alt}
        // layout="responsive"
        width={width}
        height={height}
        objectFit="scale-down"
      />
    </Zoom>
  )
}
