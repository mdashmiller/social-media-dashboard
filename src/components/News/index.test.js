import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import News from './index'

describe('News basic rendering', () => {

  it('renders one news div', () => {
    const { container } = render(<News />)
    const news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
  })

})

describe('News mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<News />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
