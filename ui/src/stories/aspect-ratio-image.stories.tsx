import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import AspectRatioImage from '@/ui/aspect-ratio-image'
import { Button } from '@/ui/button'

const meta = {
  title: 'ui/AspectRatioImage',
  component: AspectRatioImage,
  args: {
    alt: 'Landscape photograph by Tobias Tullius',
    src: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
  },
  argTypes: {},
} satisfies Meta<typeof AspectRatioImage>

export default meta
type Story = StoryObj<typeof meta>

export const _AspectRatioImage = ({ ...props }: Story['args']) => {
  return <AspectRatioImage alt={props.alt || ''} src={props.src || ''} {...props} />
}
