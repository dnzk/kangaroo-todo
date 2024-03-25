import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Modal from "../../../src/app/ui/modal/Modal"

describe('Modal', () => {
  it('renders correctly', () => {
    const { container } = render(<Modal />)
    expect(container).toMatchSnapshot()
  })

  it('renders children when supplied', () => {
    render(<Modal><p>Modal content goes here</p></Modal>)
    const input = screen.getByText('Modal content goes here')
    expect(input).toBeInTheDocument()
  })
})
