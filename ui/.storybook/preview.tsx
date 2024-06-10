import type { Preview } from '@storybook/react'
import React from 'react'

import '../src/styles/global.css'
import Screen from '../src/ui/screen'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      return (
        <Screen>
          <Story />
        </Screen>
      )
    },
  ],
}

export default preview
