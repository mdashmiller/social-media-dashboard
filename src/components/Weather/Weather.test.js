import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Weather from './index'

describe('Weather basic rendering', () => {

  it('renders one weather div', () => {
    const { container } = render(<Weather />)
    const weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
  })

})

describe('Weather mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Weather />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
