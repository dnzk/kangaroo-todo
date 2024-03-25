import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ModalBackdrop from "../../../src/app/ui/modal/ModalBackdrop"

describe('ModalBackdrop', () => {
  it('renders correctly', () => {
    const { container } = render(<ModalBackdrop />)
    expect(container).toMatchSnapshot()
  })

  it('renders children when supplied', () => {
    render(<ModalBackdrop><p>Modal goes here</p></ModalBackdrop>)
    const input = screen.getByText('Modal goes here')
    expect(input).toBeInTheDocument()
  })
})
