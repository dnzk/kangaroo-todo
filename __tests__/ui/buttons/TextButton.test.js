import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TextButton from '../../../src/app/ui/buttons/TextButton'

describe('TextButton', () => {
  it('renders correctly', () => {
    const { container } = render(<TextButton>text</TextButton>)
    expect(container).toMatchSnapshot()
  })
})
