// write a story for the App component
import { Meta, StoryFn } from '@storybook/react'

import { reduxDecorator } from '@Test/decorators'

import App from './App'

export default {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    store: {
      counter: {
        value: 0,
      },
    },
  },
  decorators: [reduxDecorator],
} as Meta

const Template: StoryFn = (args) => <App {...args} />

export const Default = Template.bind({})
