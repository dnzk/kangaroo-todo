import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AppHeader from '../../../src/app/ui/appHeader/AppHeader'

describe('AppHeader', () => {
  it('renders correctly', () => {
    const { container } = render(<AppHeader />)
    expect(container).toMatchSnapshot()
  })

  it('should have AppLogo', () => {
    render(<AppHeader />)

    const logo = screen.getByAltText(/Kangaroo Todo/i)
    expect(logo).toBeInTheDocument()
  })
})
