import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TextInput from '../../../src/components/inputs/TextInput'

describe('TextInput', () => {
  it('renders text type by default', () => {
    render(<TextInput placeholder="Username" />)

    const input = screen.getByPlaceholderText('Username')

    expect(input.type).toBe('text')
  })

  it('renders as password when specified', () => {
    render(<TextInput placeholder="Password" type="password" />)

    const input = screen.getByPlaceholderText('Password')

    expect(input.type).toBe('password')
  })

  it('renders correctly', () => {
    const { container } = render(<TextInput />)
    expect(container).toMatchSnapshot()
  })
})
