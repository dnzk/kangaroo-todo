import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from '../../../src/app/ui/buttons/Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })
})
