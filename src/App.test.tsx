import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as stories from './App.stories'

const { Default } = composeStories(stories)

describe('App', () => {
  it('should render the component', () => {
    render(<Default />)
  })

  it('should render the component with a title', () => {
    render(<Default />)
    expect(screen.getByRole('heading', { name: /Vite \+ React/i, level: 1 })).toBeInTheDocument()
  })

  it('should render the component with a button', async () => {
    render(<Default />)

    const button = screen.getByRole('button', { name: /count is 0/i })

    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(button).toHaveTextContent(/count is 1/i)
  })
})
