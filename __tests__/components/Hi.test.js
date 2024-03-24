import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hi from '../../src/components/Hi'

describe('Hi', () => {
  it('renders a heading', () => {
    render(<Hi />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
