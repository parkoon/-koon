import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import React from 'react'

type AspectRatioImageProps = {
  ratio?: number
  src: string
  alt: string
}

const AspectRatioImage = ({ ratio = 16 / 9, src, alt }: AspectRatioImageProps) => {
  return (
    <AspectRatioPrimitive.Root ratio={ratio}>
      <Image fill className="object-cover" src={src} alt={alt} />
    </AspectRatioPrimitive.Root>
  )
}

export default AspectRatioImage
