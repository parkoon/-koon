import type { Preview } from '@storybook/react'
import React from 'react'

import '../src/styles/global.css'
import Screen from '../src/ui/screen'
import { ScreenDrawerProvider } from '../src/ui/screen-drawer'

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
          <ScreenDrawerProvider>
            <Story />
          </ScreenDrawerProvider>
        </Screen>
      )
    },
  ],
}

export default preview
