import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PlusButton from '../../../src/app/ui/buttons/IconButton'

describe('PlusButton', () => {
  it('renders correctly', () => {
    const { container } = render(<PlusButton size="large" icon="plus" />)
    expect(container).toMatchSnapshot()
  })
})
