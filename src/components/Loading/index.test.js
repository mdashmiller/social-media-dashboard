import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Loading from './index'

describe('Loading basic rendering', () => {

  it('renders one Loading title', () => {
    const { container } = render(<Loading />)
    const loading = getByText(container, 'Loading')
    expect(loading).toBeInTheDocument()
  })

})

describe('Loading mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
