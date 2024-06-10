import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import BottomSheet from '@/ui/bottom-sheet'
import { Button } from '@/ui/button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui/BottomSheet',
  component: BottomSheet,
} satisfies Meta<typeof BottomSheet>

export default meta

export const _BottomSheet = () => {
  const [open, setOpened] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpened(true)}>Open BottomSheet</Button>
      <BottomSheet open={open} onClose={() => setOpened(false)}>
        BOOO
      </BottomSheet>
    </div>
  )
}
