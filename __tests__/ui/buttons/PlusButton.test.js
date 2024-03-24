import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PlusButton from '../../../src/app/ui/buttons/PlusButton'

describe('PlusButton', () => {
  it('renders correctly', () => {
    const { container } = render(<PlusButton />)
    expect(container).toMatchSnapshot()
  })
})
