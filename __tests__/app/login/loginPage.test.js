import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginPage from "../../../src/app/login/page"

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { container } = render(<LoginPage />)
    expect(container).toMatchSnapshot()
  })

  it('renders all elements', () => {
    render(<LoginPage />)

    const logo = screen.getByAltText('Kangaroo Todo')
    expect(logo).toBeInTheDocument()

    const username = screen.getByPlaceholderText('Username')
    expect(username).toBeInTheDocument()

    const password = screen.getByPlaceholderText('Password')
    expect(password).toBeInTheDocument()

    const loginButton = screen.getByText('Log In')
    expect(loginButton).toBeInTheDocument()
  })

  it('disables button when inputs are empty', () => {
    render(<LoginPage />)

    expect(screen.getByText(/log in/i).closest('button')).toBeDisabled()

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: {
        value: 'asdf'
      }
    })

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: {
        value: 'asdf'
      }
    })

    expect(screen.getByText(/log in/i).closest('button')).not.toBeDisabled()
  })
})
