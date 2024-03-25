import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import AppLogo from '../../../src/app/ui/logo/AppLogo'

describe('AppLogo', () => {
  it('renders correctly', () => {
    const { container } = render(<AppLogo variant="large" />)
    expect(container).toMatchSnapshot()
  })
})
