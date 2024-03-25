import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import AppBackground from "../../../src/app/ui/background/AppBackground"

describe('AppBackground', () => {
  it('renders correctly', () => {
    const { container } = render(<AppBackground />)
    expect(container).toMatchSnapshot()
  })
})
