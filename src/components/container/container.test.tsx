import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Container } from './container'

describe('Container', () => {
  it('should render children and default className correctly when large property is not true', () => {
    const { container } = render(<Container className="testClassName"><p>Test</p></Container>)
    const element = container.firstChild

    expect(element).toBeInTheDocument()
    expect(container).toHaveTextContent('Test')
    expect(element).toHaveClass('testClassName')
    expect(element).toHaveClass('container')
    expect(element).toHaveClass('px-8')
    expect(element).toHaveClass('mx-auto')
    expect(element).toHaveClass('xl:px-5')
    expect(element).toHaveClass('max-w-screen-lg')
  })
})
