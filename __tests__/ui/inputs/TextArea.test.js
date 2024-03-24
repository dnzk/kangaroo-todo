import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TextArea from '../../../src/app/ui/inputs/TextArea'

describe('TextArea', () => {
  it('renders correctly', () => {
    const { container } = render(<TextArea />)
    expect(container).toMatchSnapshot()
  })
})
