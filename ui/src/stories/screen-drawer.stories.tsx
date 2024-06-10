import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '@/ui/button'
import ScreenDrawer, { useScreenDrawer } from '@/ui/screen-drawer'

const meta = {
  title: 'ui/ScreenDrawer',
  component: ScreenDrawer,
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof ScreenDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const _ScreenDrawer = (props: Story['args']) => {
  const { open } = useScreenDrawer()
  return (
    <div>
      <Button onClick={open}>Open Screen Drawer</Button>
      <ScreenDrawer {...props}>BOOO</ScreenDrawer>
    </div>
  )
}
